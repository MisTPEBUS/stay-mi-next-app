import { create } from "zustand";

export type Message = {
  role: "user" | "system" | "assistant" | "loading" | "cards" | "bubble";
  content: string;
};

type ChatState = {
  messages: Message[];
  input: string;
  planningMode: boolean;
  setInput: (value: string) => void;
  addMessage: (msg: Message) => void;
  setPlanningMode: (mode: boolean) => void;
  removeLastLoading: () => void;
  removeLastMessage?: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  input: "",
  planningMode: false,
  setInput: (input) => set({ input }),
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  removeLastLoading: () =>
    set((state) => {
      const reversed = [...state.messages].reverse();
      const indexFromEnd = reversed.findIndex((msg) => msg.role === "loading");

      if (indexFromEnd === -1) return {}; // 沒有 loading 不處理

      const indexToRemove = state.messages.length - 1 - indexFromEnd;
      const newMessages = state.messages.filter((_, i) => i !== indexToRemove);

      return { messages: newMessages };
    }),
  setPlanningMode: (mode) => set({ planningMode: mode }),
}));
