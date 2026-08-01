import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BookmarkHeader = () => {

  const navigate = useNavigate()
  
  return (
    <div className="flex items-center gap-4 m-2 ">
      <button 
        onClick={() => {navigate(-1)}}
        className="size-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
        <ArrowLeft size={20} className="text-white" />
      </button>
      <span className="text-[20px] font-bold text-white leading-none">Bookmarks</span>
    </div>
  );
};

export default BookmarkHeader;
