import { MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import AiMiniChat from "./aiMiniChat";
import ChatMini from "./chatMini";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FloatingButtons = () => {
  const [isAiChatExpanded, setIsAiChatExpanded] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  const toggleAiChatButton = () => {
    setIsAiChatExpanded(!isAiChatExpanded);
    setIsChatExpanded(false);
  };

  const toggleChatButton = () => {
    setIsChatExpanded(!isChatExpanded);
    setIsAiChatExpanded(false);
  };

  const panelVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 30,
    },
  };

  const panelVariants2 = {
    hidden: {
      // opacity: 0,
      height: 0,
    },
    visible: {
      // opacity: 1,
      height: 70,
    },
    exit: {
      // opacity: 0,
      height: 70,
    },
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 w-fit items-end">
      <motion.div
        animate={{
          height: isAiChatExpanded ? 370 : 56,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
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
      </motion.div>

      <motion.div
        animate={{
          height: isChatExpanded ? 520 : 56,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
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
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
