import { MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import AiMiniChat from "./aiMiniChat";
import ChatMini from "./chatMini";
import { useState } from "react";

const FloatingButtons = () => {
  const [isAiChatExpanded, setIsAiChatExpanded] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  const toggleAiChatButton = () => {
    setIsAiChatExpanded(!isAiChatExpanded);
    setIsChatExpanded(false)
  };

  const toggleChatButton = () => {
    setIsChatExpanded(!isChatExpanded);
    setIsAiChatExpanded(false);
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 w-fit items-end">
      {(!isAiChatExpanded && (
        <button
          onClick={toggleAiChatButton}
          className="
          h-14 w-14
          rounded-2xl
          bg-black
          border border-white/15
          text-white
          flex items-center justify-center
          shadow-lg
          hover:border-white/30
          hover:bg-white/3
          transition
          relative
        "
        >
          {/* Grok Icon (spark + arrow feel) */}
          <Sparkles size={18} />

          {/* small arrow accent (premium touch) */}
          <ArrowUpRight
            size={10}
            className="absolute bottom-3 right-3 text-white/40"
          />
        </button>
      )) || <AiMiniChat setIsAiChatExpanded={setIsAiChatExpanded} />}

      {(!isChatExpanded && (
        <button
          onClick={toggleChatButton}
          className="
          h-14 w-14
          rounded-2xl
          bg-black
          border border-white/15
          text-white
          flex items-center justify-center
          shadow-lg
          hover:border-white/30
          hover:bg-white/3
          transition
        "
        >
          <MessageCircle size={20} />
        </button>
      )) || <ChatMini setIsChatExpanded={setIsChatExpanded} />}
    </div>
  );
};

export default FloatingButtons;
