export type ChatCompletionRequestMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type UIMessage =
  | {
      id: number;
      type: "text";
      sender: "user" | "ai";
      content: string;
    }
  | {
      id: number;
      type: "card";
      sender: "ai";
      title: string;
      description: string;
    }
  | {
      id: number;
      type: "badge";
      sender: "ai";
      label: string;
      color?: string;
    };
