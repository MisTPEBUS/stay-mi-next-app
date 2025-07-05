"use client";

import { ExpandableChatDemo } from "./components/expandable-chat-demo";

const ChatPage = () => {
  return (
    <section className="h-screen bg-white">
      <div className="bg-white-pure mx-auto h-full max-w-2xl">
        <ExpandableChatDemo />
      </div>
    </section>
  );
};

export default ChatPage;
