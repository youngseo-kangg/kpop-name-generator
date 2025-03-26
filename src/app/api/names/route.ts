import { NextRequest, NextResponse } from "next/server";

// lib 
import sheets from "../../../../lib/google-sheets";

// utils
import { transformData } from "@/app/utils/transformData";

// types
import { NameData } from "@/app/types";

type GETResponse = { data: NameData[] } | { error: string };

export const dynamic = 'force-dynamic'; // 실시간 데이터 필요

export async function GET(
    req: NextRequest
   ): Promise<NextResponse<GETResponse>> {
    try {
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
     const rows = response.data.values as string[][];
     if (!rows) {
      console.error("No data found");
      return NextResponse.json<GETResponse>(
       { error: "No data found" },
       { status: 404 }
      );
     }
   
     // 3-1. 헤더, 데이터 추출
     const [headers, ...data] = rows;
   
     // 3-2. 데이터 형식 변환
     const modifiedData = transformData<NameData>(headers, data);

     // 4. 데이터 반환
     return NextResponse.json<GETResponse>({ data: modifiedData }, { status: 200 });
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