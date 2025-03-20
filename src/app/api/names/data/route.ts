import { NextRequest, NextResponse } from "next/server";
import sheets from "../../../../../lib/google-sheets";

type NameRow = string[];
type NameData = {
 [key: string]: string;
};

type ApiResponse = { data: NameData[] } | { error: string };

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
   
     const range = "data!A1:O5000";
     // 2. sheets에서 데이터 get해오기
     const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range,
     });

     // 3. 데이터 확인
     const rows = response.data.values as NameRow[];
     if (!rows) {
      console.error("No data found");
      return NextResponse.json<ApiResponse>(
       { error: "No data found" },
       { status: 404 }
      );
     }
   
     // 3-1. 헤더 추출
     const headers = rows[0].map((header: string) =>
        header.toLowerCase().replace(/\s+/g, "_")
     );
      // 3-2. 데이터 추출
     const data: NameRow[] = rows.slice(1);
   
     // 3-3. 데이터 형식 변환
     const allData: NameData[] = data.map((row: NameRow) => {
      return headers.reduce((obj: NameData, header: string, index: number) => {
       obj[header] = row[index];
       return obj;
      }, {} as NameData);
     });
     // 4. 데이터 반환
     return NextResponse.json<ApiResponse>({ data: allData }, { status: 200 });
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