import { useRef, useState } from "react";
import {
  Image,
  Gift,
  Wand2,
  SlidersHorizontal,
  Smile,
  CalendarClock,
  MapPin,
  Flag,
  Globe,
} from "lucide-react";

const PostComposer = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const el = textareaRef.current;

    setText(e.target.value);

    if (!el) return;

    // reset height before recalculating
    el.style.height = "0px";

    // grow up to max 80% of viewport height
    const maxHeight = window.innerHeight * 0.8;

    el.style.height = Math.min(el.scrollHeight, maxHeight) + "px";
  };

  return (
    <div className="w-full max-w-2xl bg-black border-y border-white/10 p-4 flex flex-col">
      <div className="flex gap-3 min-h-0">
        {/* Profile */}
        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
          A
        </div>

        {/* Content */}
        <div className="flex w-full flex-col min-h-0">
          {/* Textarea Area */}

          <div className="border-b border-white/20 ">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleInput}
              placeholder="What's happening?"
              rows={2}
              className="w-full min-h-20 overflow-y-auto  bg-transparent outline-none resize-none  focus:border-white/60 py-2 text-sm placeholder:text-white/40 overflow-hidden leading-5"
            />

            <button className="mt-1 flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-blue-500 pb-3 hover:bg-blue-500/10">
              <Globe size={14} />
              Everyone can reply
            </button>
            
          </div>

          {/* Toolbar pinned bottom */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-white/70">
              <Image className="w-4 h-4 hover:text-white cursor-pointer" />
              <Gift className="w-4 h-4 hover:text-white cursor-pointer" />
              <Wand2 className="w-4 h-4 hover:text-white cursor-pointer" />
              <SlidersHorizontal className="w-4 h-4 hover:text-white cursor-pointer" />
              <Smile className="w-4 h-4 hover:text-white cursor-pointer" />
              <CalendarClock className="w-4 h-4 hover:text-white cursor-pointer" />
              <MapPin className="w-4 h-4 hover:text-white cursor-pointer" />
              <Flag className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>

            <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
