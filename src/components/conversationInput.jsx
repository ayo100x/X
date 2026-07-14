import { AudioLines, ImagePlay, Plus, Sticker } from "lucide-react";

const ConversationInput = () => {
  return (
    <div className="bg-transparent w-full h-fit flex items-center gap-2 p-4">
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

      {/* search bar */}
      <div className="w-full h-12 flex items-center bg-white/10 rounded-full">
        <div className="flex items-center justify-between w-full mx-3">
          <input
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white/70"
            placeholder="Message"
          />

          <button className="flex shrink-0 items-center justify-center size-8 rounded-full bg-white/30">
            <AudioLines size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationInput;
