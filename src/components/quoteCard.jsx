import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
} from "lucide-react";
import MediaGrid from "./mediaGrid";

const QuoteCard = () => {
  const media = [
    "https://picsum.photos/800/500",
    "https://picsum.photos/600/600",
  ];

  return (
    <div className="w-full max-w-2xl bg-black text-white   ">
      {/* Header */}

      <div className="flex gap-3 border rounded-xl  border-white/10 mt-10 p-2">
        {/* Avatar */}

        <div className="flex-1 min-w-0">
          {/* User Info */}

          <div className="flex items-center gap-2 text-sm">
            <div className="size-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center font-medium">
              A
            </div>
            <span className="font-semibold text-white">Ayomide</span>

            <span className="text-white/40">@ayomide</span>

            <span className="text-white/30">•</span>

            <span className="text-white/40">2h</span>
          </div>

          {/* Post Content */}
          <div className="m-3">
            <p className="text-[15px] leading-6 text-white/90">
              Building a social media app from scratch with React, Tailwind,
              Zustand and Express. The goal is to keep the UI extremely clean,
              minimal and premium while maintaining excellent performance.
            </p>
            <MediaGrid media={media} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
