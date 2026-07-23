import {
  Ban,
  ChevronRight,
  Fullscreen,
  LockKeyhole,
  MessageCircleOff,
} from "lucide-react";

const ChatProfileActions = () => {
  return (
    <div className="bg-white/10 flex flex-col rounded-xl m-6 mt-10 ">
      <div className="hover:bg-white/30 flex items-start px-4 rounded-t-xl">
        <MessageCircleOff size={25} className="mt-4 shrink-0" />

        <div className="ml-3 flex w-full items-center justify-between border-b border-white/10 py-4">
          <span>Disappearing Messages</span>

          <div className="flex items-center gap-2 text-white/40">
            <span>Off</span>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      <div className="hover:bg-white/30 flex items-start  px-4">
        <Fullscreen size={25} className="mt-4 shrink-0"/>
        <div className="ml-3 flex w-full items-center justify-between border-b border-white/10 py-4">
          <span>Block Screenshots</span>
          <div className="flex items-center gap-2 text-white/40">
            <span>Off</span>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      <div className="hover:bg-white/30 flex items-start px-4">
        <LockKeyhole size={25} className="mt-4 shrink-0" />
        <div className="ml-3 flex w-full items-center justify-between border-b border-white/10 py-4">
          <span>Safety Number</span>
          <div className="flex items-center gap-2 text-white/40">
            <span>Unverified</span>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      <div className="hover:bg-white/30 rounded-b-xl flex items-start px-4 text-red-500">
        <Ban size={25} className="mt-4 shrink-0" />
        <span className="w-full gap-6 ml-3 py-4">Block Messages</span>
      </div>
    </div>
  );
};

export default ChatProfileActions;
