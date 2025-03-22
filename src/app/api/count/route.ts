import { NextRequest, NextResponse } from "next/server";
import sheets from "../../../../lib/google-sheets";

type CountRow = number[];
type GETResponse = { data: number } | { error: string };

export async function GET(
   req: NextRequest
   ): Promise<NextResponse<GETResponse>> {
    try {
     // 1. params에 total=true 인지 확인
     const url = new URL(req.url);
     const total = url.searchParams.get('total');
     if (total !== 'true') {
      return NextResponse.json<GETResponse>(
       { error: "Invalid total parameter" },
       { status: 400 }
      );
     }

     // 2. env SPREADSHEET_ID env 확인
     const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
     if (!SPREADSHEET_ID) {
      throw new Error("Missing SPREADSHEET_ID environment variable");
     }
   
     const range = "data!G1:G5000"; // google spreadsheet에서 count 열 데이터만 가져오기
     // 3. sheets에서 데이터 get해오기
     const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range,
     });

     // 4. 데이터 확인 + 헤더 제거
     const rows = response.data.values as CountRow[];

     if (!rows) {
      console.error("No data found");
      return NextResponse.json<GETResponse>(
       { error: "No data found" },
       { status: 404 }
      );
     }
   
    // 3-1. 데이터 추출
    const data: CountRow[] = rows.slice(1);
    
    // 3-2. 데이터 형식 변환
    const allData = data.reduce((acc, curr) => {
      if(!curr[0]) {
         return acc;
      }
      return acc + Number(curr[0]);
    }, 0);

    // 4. 데이터 반환
    return NextResponse.json<GETResponse>({ data: allData }, { status: 200 });
    } catch (error) {
     console.error("Error fetching data:", error);
     if (error instanceof Error) {
      return NextResponse.json<GETResponse>(
       { error: error.message },
       { status: 500 }
      );
     } else {
      return NextResponse.json<GETResponse>(
       { error: "Unknown error occurred" },
       { status: 500 }
      );
     }
    }
   }