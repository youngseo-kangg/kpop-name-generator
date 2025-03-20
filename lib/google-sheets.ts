import { google } from "googleapis";
import * as dotenv from "dotenv";

dotenv.config();

// Google Sheets API 설정
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

// credentials.json을 base64로 디코딩
const credentialsBase64 = process.env.GOOGLE_APPLICATION_CREDENTIALS || "";
const credentialsString = Buffer.from(credentialsBase64, "base64").toString("utf8");
let credentials;

try {
  credentials = JSON.parse(credentialsString);
} catch (error) {
  console.error("Error parsing JSON credentials:", error);
  throw new Error("Invalid GOOGLE_APPLICATION_CREDENTIALS environment variable");
}

// Google Auth 인스턴스 생성
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

// Google Sheets API 인스턴스 생성
const sheets = google.sheets({ version: "v4", auth });

export default sheets;