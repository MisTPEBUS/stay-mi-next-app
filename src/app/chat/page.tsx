"use client";
import ChatCard from "@/components/ChatCard";

const ChatPage = () => {
  return (
    <section className="h-screen bg-white">
      <div className="bg-white-pure mx-auto h-full max-w-2xl">
        <ChatCard />
      </div>
    </section>
  );
};

export default ChatPage;
