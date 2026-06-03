import {
  Lock,
  History,
  Link2,
  ChevronDown,
  Paperclip,
  Sparkles,
  Mic,
  ChevronDown as Dropdown,
  Image,
  FileText,
  Wand2,
} from "lucide-react";

const AiMiniChat = ({setIsAiChatExpanded}) => {
  return (
    <div className="w-100 max-w-lg rounded-2xl border border-white/10 bg-black text-white p-4 space-y-4 ">
      {/* HEADER */}
      <div className="flex items-center justify-end gap-3 text-white/60">
        <button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition">
          <Lock size={16} />
        </button>

        <button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition">
          <History size={16} />
        </button>

        <button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition">
          <Link2 size={16} />
        </button>

        <button 
        onClick={() => setIsAiChatExpanded(false)}
        className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition">
          <ChevronDown size={16} />
        </button>
      </div>

      {/* TITLE */}
      <div>
        <span className="text-lg font-semibold">How can I help you today?</span>
      </div>

      {/* TEXTAREA */}
      <div className="relative">
        <textarea
          placeholder="Ask anything"
          className="
            w-full
            min-h-30
            resize-none
            rounded-2xl
            bg-white/3
            border border-white/10
            p-4
            pb-14
            text-sm
            placeholder:text-white/40
            outline-none
            focus:border-white/30
            transition
          "
        />

        {/* LEFT TOOL (inside textarea area) */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/50">
          <button className="hover:text-white transition">
            <Paperclip size={18} />
          </button>
        </div>

        {/* RIGHT TOOL */}
        <div className="absolute bottom-3 right-3 flex items-center gap-3 text-white/50">
          {/* Model dropdown */}
          <button className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-white/10 hover:border-white/30 transition">
            <span>GPT-4o</span>
            <Dropdown size={14} />
          </button>

          <button className="hover:text-white transition">
            <Sparkles size={18} />
          </button>

          <button className="hover:text-white transition">
            <Mic size={18} />
          </button>
        </div>
      </div>

      {/* QUICK ACTIONS (2 ROWS) */}
      <div className="space-y-2">
        {/* Row 1 */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-xs hover:border-white/30 transition">
            <Image size={14} />
            <span>Generate Image</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-xs hover:border-white/30 transition">
            <Wand2 size={14} />
            <span>Rewrite</span>
          </button>
        </div>

        {/* Row 2 */}
        <div className="flex">
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-xs hover:border-white/30 transition w-fit">
            <FileText size={14} />
            <span>Summarize Text</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiMiniChat;
