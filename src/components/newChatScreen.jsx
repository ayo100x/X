import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNewMessageModalStore } from "../stores/useNewMessageModalStore";

const NewChatScreen = () => {
  const openNewMessageModal = useNewMessageModalStore((state) => state.openNewMessageModal)
  const handleNewMessageOnClick = () => {
    openNewMessageModal()
  };

  return (
    <div className="h-full flex items-center justify-center bg-black">
      <div className="flex flex-col items-center text-center max-w-sm px-8">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
          <MessageCircle size={34} className="text-white" />
        </div>

        <span className="mt-6 text-[32px] font-bold tracking-tight text-white">
          Select a message
        </span>

        <span className="mt-3 text-[15px] leading-6 text-white/50">
          Choose from your existing conversations, start a new one, or just keep
          chatting.
        </span>

        <button
          onClick={handleNewMessageOnClick}
          className="mt-8 h-11 px-6 rounded-full bg-[#1d9bf0] text-white font-bold hover:bg-[#1a8cd8] transition-colors"
        >
          New message
        </button>

      </div>
    </div>
  );
};

export default NewChatScreen;
