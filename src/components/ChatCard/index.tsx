"use client";

import { Send } from "lucide-react";
import { useRef, useEffect } from "react";

import { useChatStore } from "@/store/chatStore";

import ChatMessage from "./components/ChatMessage";

const ChatCard = () => {
  const { messages, input, setInput, addMessage } = useChatStore();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = input.trim();

    if (!trimmed) return;

    addMessage({ role: "user", content: trimmed });
    addMessage({ role: "loading", content: "正在輸入中..." });

    setTimeout(() => {
      useChatStore.getState().removeLastLoading();
      addMessage({ role: "system", content: `我收到你的訊息：${trimmed}` });
    }, 2000);

    setInput("");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-3">
        <input
          type="text"
          className="flex-1 rounded border p-2"
          placeholder="輸入訊息..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 p-2 text-white">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatCard;
