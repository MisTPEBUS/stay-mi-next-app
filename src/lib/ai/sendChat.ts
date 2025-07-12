import { ChatCompletionRequestMessage } from "./openAiType";

export type FunctionCallResponse = {
  name: string;
  arguments: Record<string, unknown>;
};

export type AIResponse = { type: "text"; content: string } | { type: "function_call"; function: FunctionCallResponse };

export const sendChat = async (messages: ChatCompletionRequestMessage[]): Promise<AIResponse> => {
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ messages }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("OpenAI 請求失敗");

  const data = await res.json();
  const message = data.choices?.[0]?.message;

  if (!message) {
    throw new Error("OpenAI 回傳格式錯誤");
  }

  if (message.function_call) {
    const name = message.function_call.name ?? "unknown_function";
    let parsedArgs: Record<string, unknown> = {};

    try {
      parsedArgs = JSON.parse(message.function_call.arguments ?? "{}");
    } catch (err) {
      console.warn("Function arguments JSON 解析失敗", err);
    }

    return {
      type: "function_call",
      function: {
        name,
        arguments: parsedArgs,
      },
    };
  }

  return {
    type: "text",
    content: message.content ?? "",
  };
};
