import { AudioLines, ImagePlay, Plus, Sticker } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ConversationInput = () => {
  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    const maxHeight = 200;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [text]);

  return (
    <div className="bg-transparent w-full flex items-end gap-2 p-4">
      <div className="flex gap-2">
        {/* + button */}
        <button className="flex items-center justify-center rounded-full shrink-0 bg-white/10 size-12">
          <Plus size={20} className="text-white" />
        </button>
        {/* GIF button */}
        <button className="flex items-center justify-center rounded-full shrink-0 bg-white/10 size-12">
          <ImagePlay size={20} className="text-white" />
        </button>
        {/* Sticker button*/}
        <button className="flex items-center justify-center rounded-full shrink-0 bg-white/10 size-12">
          <Sticker size={20} className="text-white" />
        </button>
      </div>
      {/* Reply bar */}
      <div className="w-full min-h-12 px-3 py-2 flex items-end bg-white/10 rounded-3xl">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          placeholder="Message"
          className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-white/70 leading-6 max-h-[200px] px-2 py-1 custom-scrollbar"
        />

        <button className="ml-2 flex items-center justify-center size-8 rounded-full bg-white/30 shrink-0">
          <AudioLines size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ConversationInput;
