import { Ban, ChevronRight, Fullscreen, LockKeyhole, MessageCircleOff } from "lucide-react";

const ChatProfileActions = () => {
  return (
    <div className="bg-white/10 flex flex-col rounded-xl m-5 ">
      <div className="hover:bg-white/30 flex w-full rounded-xl p-4 gap-3">
        <MessageCircleOff size={25} />
        <div className="flex flex-col w-full gap-6">
          <div className="flex justify-between">
            <span>Disappearing Messages</span>
            <div className="flex items-center gap-2 text-white/40">
              <span>Off</span>
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="border-b border-white/10 flex justify-end" />
        </div>
      </div>

      <div className="hover:bg-white/30 flex w-full rounded-xl p-4 gap-3">
        <Fullscreen size={25} />
        <div className="flex flex-col w-full gap-6">
          <div className="flex justify-between">
            <span>Block Screenshots</span>
            <div className="flex items-center gap-2 text-white/40">
              <span>Off</span>
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="border-b border-white/10 flex justify-end" />
        </div>
      </div>

      <div className="hover:bg-white/30 flex w-full rounded-xl p-4 gap-3">
        <LockKeyhole size={25} />
        <div className="flex flex-col w-full gap-6">
          <div className="flex justify-between">
            <span>Safety Number</span>
            <div className="flex items-center gap-2 text-white/40">
              <span>Unverified</span>
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="border-b border-white/10 flex justify-end" />
        </div>
      </div>

      <div className="hover:bg-white/30 flex w-full rounded-xl p-4 gap-3 text-red-500">
        <Ban size={25} />
        <div className="flex flex-col w-full gap-6">
          
            <span>Block Messages</span>
            
          <div className="border-b border-white/10 flex justify-end" />
        </div>
      </div>
    </div>
  );
};

export default ChatProfileActions;
