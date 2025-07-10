"use client";

import clsx from "clsx";
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { useState, FormEvent } from "react";

import { fetchWeather } from "@/app/api/chat/fetchWeather";
import { Button } from "@/components/ui/button";
import { ChatCompletionRequestMessage, UIMessage } from "@/lib/ai/openAiType";
import { sendChat } from "@/lib/ai/sendChat";

import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import { ChatMessageList } from "./chat-message-list";
import { ExpandableChat, ExpandableChatBody, ExpandableChatFooter, ExpandableChatHeader } from "./expandable-chat";

const colorClassMap = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  red: "bg-red-100 text-red-800",
  gray: "bg-gray-100 text-gray-800",
} as const;

type ColorKey = keyof typeof colorClassMap;

function getColorClass(color?: string): string {
  const fallback: ColorKey = "gray";
  if (["green", "blue", "red", "gray"].includes(color || "")) {
    return colorClassMap[color as ColorKey];
  }
  return colorClassMap[fallback];
}

export const ExpandableChatDemo = () => {
  const [chatHistory, setChatHistory] = useState<ChatCompletionRequestMessage[]>([
    {
      role: "system",
      content:
        "你是 StayMi 的旅遊行程 AI 小幫手，請依照順序詢問使用者：旅遊日期、地點、主題、預算與住宿偏好，幫助他生成簡單的行程建議。",
    },
    {
      role: "assistant",
      content: "Hi 你好~我是StayMi機器人,我可以幫你規畫旅遊行程?",
    },
    {
      role: "assistant",
      content: "請問你想要到哪裡呢？",
    },
  ]);
  const [messages, setMessages] = useState<UIMessage[]>([
    {
      id: 1,
      type: "text",
      sender: "ai",
      content: "Hi 你好~我是StayMi機器人,我可以幫你規畫旅遊行程?",
    },
    {
      id: 2,
      type: "text",
      sender: "ai",
      content: "請問你想要到哪裡呢？",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input } as const;
    const nextId = messages.length + 1;

    setMessages((prev) => [
      ...prev,
      {
        id: nextId,
        type: "text",
        sender: "user",
        content: input,
      },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const updatedHistory = [...chatHistory, userMessage];
      const reply = await sendChat(updatedHistory);

      setMessages((prev) => [
        ...prev,
        {
          id: nextId + 1,
          type: "text",
          sender: "ai",
          content: reply,
        },
        /*     {
          id: nextId + 2,
          type: "card",
          sender: "ai",
          title: "推薦景點：木柵動物園",
          description: "親子同遊首選，附近有木柵大飯店可入住。",
        },
       {
          id: nextId + 3,
          type: "badge",
          sender: "ai",
          label: "親子推薦",
          color: "green",
        }, */
      ]);
      setChatHistory((prev) => [...prev, userMessage, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachFile = () => {
    //
  };

  const handleMicrophoneClick = () => {
    //
  };

  return (
    <div className="">
      <ExpandableChat size="lg" position="bottom-right" icon={<Bot className="h-6 w-6" />}>
        <ExpandableChatHeader className="flex-col justify-center text-center">
          <h1 className="text-xl font-semibold">✨ STAY MI 旅遊AI小幫手 ✨</h1>
          <p className="text-muted-foreground text-sm">為每一段旅程，找到對的地方。給懂生活的你，一點柔軟的歇息</p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => {
              if (message.type === "text") {
                return (
                  <ChatBubble key={message.id} variant={message.sender === "user" ? "sent" : "received"}>
                    <ChatBubbleAvatar
                      className="h-10 w-10 shrink-0"
                      src={
                        message.sender === "user"
                          ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                          : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                      }
                      fallback={message.sender === "user" ? "US" : "AI"}
                    />
                    <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"}>
                      {message.content}
                    </ChatBubbleMessage>
                  </ChatBubble>
                );
              }

              if (message.type === "card") {
                return (
                  <div
                    key={message.id}
                    className="my-2 flex justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md"
                  >
                    <div>
                      <h3 className="text-lg font-bold">{message.title}</h3>
                      <p className="text-muted-foreground text-sm">{message.description}</p>
                    </div>
                    <Button>前往GO</Button>
                  </div>
                );
              }

              if (message.type === "badge") {
                return (
                  <span
                    key={message.id}
                    className={clsx(
                      "ml-2 inline-block rounded-full px-3 py-1 text-sm font-medium",
                      getColorClass(message.color)
                    )}
                  >
                    {message.label}
                  </span>
                );
              }

              return null;
            })}

            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                  fallback="AI"
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="bg-background focus-within:ring-ring relative rounded-lg border p-1 focus-within:ring-1"
          >
            <ChatInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="請輸入您要輸入的訊息..."
              className="bg-background min-h-12 resize-none rounded-lg border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center justify-between p-3 pt-0">
              <div className="flex justify-end">
                {/*  <Button variant="ghost" size="icon" type="button" onClick={handleAttachFile}>
                  <Paperclip className="size-4" />
                </Button> */}

                <Button variant="ghost" size="icon" type="button" onClick={handleMicrophoneClick}>
                  <Mic className="size-4" />
                </Button>
              </div>
              <Button type="submit" size="sm" className="gap-1.5 px-4 py-6">
                訊 息 送 出
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  );
};
