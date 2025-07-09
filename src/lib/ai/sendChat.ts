import { ChatCompletionRequestMessage } from "./openAiType";

export type FunctionCallResponse = {
  name: string;
  arguments: Record<string, unknown>;
};

export type AIResponse = { type: "text"; content: string } | { type: "function_call"; function: FunctionCallResponse };

export const sendChat = async (messages: ChatCompletionRequestMessage[]) => {
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ messages }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("OpenAI 請求失敗");

  const data = await res.json();

  return data.choices[0].message.content as string;
};
