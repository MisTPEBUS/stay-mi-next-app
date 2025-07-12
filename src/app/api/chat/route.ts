import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { extractTravelKeywordsTool } from "@/lib/ai/openai-functions";

import { openAiFunctionMock, openAiLostFieldMock } from "./mock";

const openaiUrl = "https://api.openai.com/v1/chat/completions";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    const { data } = await axios.post(
      openaiUrl,
      {
        model: "gpt-4o",
        messages,
        temperature: 0.7,
        functions: [extractTravelKeywordsTool],
        function_call: "auto",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    //const data = openAiFunctionMock;
    // const data = openAiLostFieldMock;
    return NextResponse.json(data);
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json({ error: "OpenAI API request 壞掉了" }, { status: 500 });
  }
}
