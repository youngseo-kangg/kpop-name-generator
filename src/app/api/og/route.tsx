/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge"; // edge 런타임을 사용해야한다.

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const description = searchParams.get("description");
    const nameExplanation = searchParams.get("name_explanation");
    const ogImageUrl = `${process.env.NEXT_PUBLIC_API_URL}/og_image_result.png`;

    if (!description) {
      return new Response("description", {
        status: 400,
      });
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <img src={ogImageUrl} alt="og image" />
          <p
            style={{
              position: "absolute",
              bottom: "36%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 48,
              fontWeight: "bold",
            }}
          >
            {description}
          </p>
          <p
            style={{
              position: "absolute",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            which means {nameExplanation}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response("이미지 만들기 실패", { status: 500 });
  }
}
