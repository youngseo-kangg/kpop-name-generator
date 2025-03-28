import { NextRequest, NextResponse } from "next/server";
import sheets from "../../../../lib/google-sheets";

type RawData = string[];
type POSTResponse = { data: number } | { error: string };

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ name: string }> }
): Promise<NextResponse<POSTResponse>> {
    try {
        // 1. env SPREADSHEET_ID env 확인
        const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
        if (!SPREADSHEET_ID) {
            throw new Error("Missing SPREADSHEET_ID environment variable");
        }

        // 2. URL에서 name 파라미터 추출
        const { name } = await params;
        if (!name) {
            return NextResponse.json<POSTResponse>(
                { error: "Invalid name parameter" },
                { status: 400 }
            );
        }

        // 3. 현재 데이터 가져오기
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: "data!A1:G0575"
        });

        const rows = response.data.values as RawData[];
        if (!rows || rows.length < 2) {
            return NextResponse.json<POSTResponse>(
                { error: "No data found" },
                { status: 404 }
            );
        }

        // 4. 헤더와 데이터 분리
        const [ headers, ...dataRows ] = rows; 
        
        // 5. count 열 찾기 (헤더에서 'count' 열의 인덱스 찾기)
        const countColumnIndex = headers.findIndex(header => 
            header.toLowerCase() === 'count'
        );

        if (countColumnIndex === -1) {
            return NextResponse.json<POSTResponse>(
                { error: "Count column not found" },
                { status: 500 }
            );
        }

        // 6. 데이터 행에서 name이 일치하는 행 찾기
        const targetRowIndex = dataRows.findIndex(row => row[0] === name);
        if (targetRowIndex === -1) {
            return NextResponse.json<POSTResponse>(
                { error: "Target name not found" },
                { status: 404 }
            );
        }

        // 7. 현재 count 값 가져오기 및 증가
        const currentCount = parseInt(dataRows[targetRowIndex][countColumnIndex]) || 0;
        const newCount = currentCount + 1;
        
        // 8. 업데이트할 범위 계산 (A1 형식으로)
        const columnLetter = String.fromCharCode(65 + countColumnIndex); // 알파벳을 숫자로 변환, ex) A=65, B=66, ...
        const updateRange = `data!${columnLetter}${targetRowIndex + 2}`; // +2 
        // '+2'인 이유 ? ... +1: 0-based 인덱스를 1-based로 변환 ... +1: 헤더 행(1번 행) 제거한 것 고려 

        // 9. 새로운 count 값으로 업데이트
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: updateRange,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[newCount.toString()]]
            }
        });
        
        // 10. 업데이트 된 count 값 반환
        return NextResponse.json<POSTResponse>(
            { data: newCount },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error updating count:", error);
        if (error instanceof Error) {
            return NextResponse.json<POSTResponse>(
                { error: error.message },
                { status: 500 }
            );
        } else {
            return NextResponse.json<POSTResponse>(
                { error: "Unknown error occurred" },
                { status: 500 }
            );
        }
    }
} 