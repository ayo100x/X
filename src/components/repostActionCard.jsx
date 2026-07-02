import { Repeat2, PenSquare } from "lucide-react";
import { useState } from "react";
import { usePostStore } from "../stores/post.store";
import { useQuoteComposerStore } from "../stores/useQuoteComposerStore";

const RepostActionCard = ({ post, closeRepostCardActions }) => {
  const repost = usePostStore((state) => state.repost);
  const user = usePostStore((state) => state.user);

  const handleRepostOnClick = () => {
    repost(post.postId);
    closeRepostCardActions();
  };

  const hasReposted = post.repost.includes(user.userId);

  const openQuoteComposer = useQuoteComposerStore((state) => state.openQuoteComposer);

  const handleQuoteOnClick = () => {
    openQuoteComposer(post);
    closeRepostCardActions();
  }

  return (
    <div className="absolute z-50 overflow-hidden rounded-2xl bg-[rgb(20,20,20)] border border-white/10 shadow-2xl min-w-[180px]">
      {/* Repost Button */}
      <button
        onClick={handleRepostOnClick}
        className="flex w-full items-center gap-3 px-4 py-3 text-white transition-colors hover:bg-white/4 "
      >
        <div className="flex items-center justify-center size-9 rounded-full transition-colors group-hover:bg-green-500/10">
          <Repeat2 size={20} />
        </div>

        <span className="text-[15px] font-medium">
          {hasReposted ? "Undo repost" : "Repost"}
        </span>
      </button>

      {/* Quote Button */}
      <button 
        onClick={handleQuoteOnClick}
        className="flex w-full items-center gap-3 px-4 py-3 text-white transition-colors  hover:bg-white/4">
        <div className="flex items-center justify-center size-9 rounded-full">
          <PenSquare size={20} />
        </div>

        <span className="text-[15px] font-medium">Quote</span>
      </button>
    </div>
  );
};

export default RepostActionCard;
