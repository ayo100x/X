import { ArrowLeft } from "lucide-react";
import React from "react";

const BookmarkHeader = () => {
  return (
    <div className="flex items-center gap-2 ">
      <button className="size-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
        <ArrowLeft size={20} className="text-white" />
      </button>
      <span className="text-[20px] font-bold text-white leading-none">Bookmarks</span>
    </div>
  );
};

export default BookmarkHeader;
