import { Repeat2, PenSquare } from "lucide-react";
import { useState } from "react";

const RepostActionCard = () => {
  return (
    
      <div className="w-35 h-35 overflow-hidden rounded-2xl bg-[rgb(20,20,20)] text-white p-2 flex flex-col gap-2 absolute inset-0 z-50">
        {/* Repost Button */}
        <button className="flex items-center w-full gap-4 px-5 py-4 rounded-xl hover:bg-white/10 transition">
          <Repeat2 size={18} />
          <span className="text-sm font-medium">Repost</span>
        </button>

        {/* Quote Button */}
        <button className="flex items-center w-full gap-4 px-5 py-4 rounded-xl hover:bg-white/10 transition h-full">
          <PenSquare size={18} />
          <span className="text-sm font-medium">Quote</span>
        </button>
      
    </div>
  );
};

export default RepostActionCard;
