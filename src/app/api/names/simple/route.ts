import { NextRequest, NextResponse } from "next/server";
import sheets from "../../../../../lib/google-sheets";
import { NameData } from "@/app/types";
import { transformData } from "@/app/utils/transformData";

type ApiResponse = { data: string[] } | { error: string };

export const revalidate = 3600; // 1시간 캐싱

export async function GET(
    req: NextRequest
): Promise<NextResponse<ApiResponse>> {
    try {
        console.log("Request URL:", req.url);

        // 1. env SPREADSHEET_ID env 확인
        const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
        if (!SPREADSHEET_ID) {
            throw new Error("Missing SPREADSHEET_ID environment variable");
        }

        const range = "data!A1:G5000";
        // 2. sheets에서 데이터 get해오기
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range,
        });

        // 3. 데이터 확인
        const rows = response.data.values as string[][];
        if (!rows) {
            console.error("No data found");
            return NextResponse.json<ApiResponse>(
                { error: "No data found" },
                { status: 404 }
            );
        }

        const [headers, ...data] = rows;

        // 4. 데이터 변환 및 필터링
        const modifiedData = transformData<NameData>(headers, data);
        const filteredData = modifiedData
            .sort((a, b) => b.count - a.count) // 내림차순
            .filter((row) => row.count > 0) // 0보다 큰 데이터만 필터링
            .map((row) => row.name) // 이름만 추출
            .slice(0, 10); // 상위 10개만 추출

        // 5. 데이터 반환
        return NextResponse.json<ApiResponse>({ data: filteredData }, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        if (error instanceof Error) {
            return NextResponse.json<ApiResponse>(
                { error: error.message },
                { status: 500 }
            );
        } else {
            return NextResponse.json<ApiResponse>(
                { error: "Unknown error occurred" },
                { status: 500 }
            );
        }
    }
}