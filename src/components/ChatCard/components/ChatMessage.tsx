import Image from "next/image";

import { Message } from "@/store/chatStore";
type Props = {
  message: Message;
};

const ChatMessage = ({ message }: Props) => {
  switch (message.role) {
    case "user":
      return (
        <div className="flex items-center justify-end gap-2">
          <p className="max-w-[100%] rounded bg-blue-100 p-3">{message.content}</p>
          <Image src="/images/user.png" alt="user" width={40} height={40} className="rounded-full" />
        </div>
      );
    case "system":
      return (
        <div className="items-center gap-2">
          <Image src="/images/AIicon.png" alt="ai" width={40} height={40} className="rounded-full" />
          <div
            className="prose prose-sm max-w-[100%] rounded bg-gray-100 p-3"
            dangerouslySetInnerHTML={{ __html: message.content }}
          />
        </div>
      );

    case "loading":
      return (
        <div className="flex items-center gap-2">
          <Image src="/images/AIicon.png" alt="ai" width={40} height={40} className="rounded-full" />
          <p className="max-w-[100%] animate-pulse rounded bg-gray-100 p-3">
            正在輸入中<span className="animate-bounce">...</span>
          </p>
        </div>
      );
    case "cards":

    case "bubble":

    default:
      return null;
  }
};

export default ChatMessage;
