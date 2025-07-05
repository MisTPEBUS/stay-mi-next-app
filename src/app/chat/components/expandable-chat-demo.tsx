"use client";

import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { useState, FormEvent } from "react";

import { Button } from "@/components/ui/button";

import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import { ChatMessageList } from "./chat-message-list";
import { ExpandableChat, ExpandableChatBody, ExpandableChatFooter, ExpandableChatHeader } from "./expandable-chat";

export const ExpandableChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi 你好~我是StayMi機器人,我可以幫你規畫旅遊行程?",
      sender: "ai",
    },
    {
      id: 2,
      content: "請問你想要到哪裡呢",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "我還沒有串GG",
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleAttachFile = () => {
    //
  };

  const handleMicrophoneClick = () => {
    //
  };

  return (
    <div className="relative h-[600px]">
      <ExpandableChat size="lg" position="bottom-right" icon={<Bot className="h-6 w-6" />}>
        <ExpandableChatHeader className="flex-col justify-center text-center">
          <h1 className="text-xl font-semibold">✨ STAY MI 旅遊AI小幫手 ✨</h1>
          <p className="text-muted-foreground text-sm">為每一段旅程，找到對的地方。給懂生活的你，一點柔軟的歇息</p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => (
              <ChatBubble key={message.id} variant={message.sender === "user" ? "sent" : "received"}>
                <ChatBubbleAvatar
                  className="shrink-0　 h-10 w-10"
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
            ))}

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
