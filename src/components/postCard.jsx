import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
} from "lucide-react";
import MediaGrid from "./mediaGrid";
import QuoteCard from "./quoteCard";

const PostCard = ({ post }) => {
  const media = [
    "https://picsum.photos/800/500",
    "https://picsum.photos/600/600",
  ];

  return (
    <div className="w-full max-w-2xl bg-black text-white px-4 py-5 border-b border-white/10 hover:bg-white/[0.02] transition">
      {/* Header */}
      <div className="ml-7 mb-1 text-white/40 flex items-center gap-2">
        <Repeat2 className="size-5" /> You reposted
      </div>
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="h-11 w-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center font-medium">
          A
        </div>

        <div className="flex-1 min-w-0">
          {/* User Info */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-white">Ayomide</span>

            <span className="text-white/40">@ayomide</span>

            <span className="text-white/30">•</span>

            <span className="text-white/40">2h</span>
          </div>

          {/* Post Content */}
          <div className="mt-2">
            <p className="text-[15px] leading-6 text-white/90">
              Building a social media app from scratch with React, Tailwind,
              Zustand and Express. The goal is to keep the UI extremely clean,
              minimal and premium while maintaining excellent performance.
            </p>

            <MediaGrid media={media} />
          </div>

          {post.quote && (
            <div>
              <QuoteCard />
            </div>
          )}

          {/* Engagement */}
          <div className="flex items-center gap-8 text-white/50 justify-between mt-4">
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle size={18} />
              <span className="text-sm">24</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Repeat2 size={18} />
              <span className="text-sm">12</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Heart size={18} />
              <span className="text-sm">145</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <BarChart2 size={18} />
              <span className="text-sm">4.2K</span>
            </button>

            {/* Actions */}
            <div className="flex items-center gap-4 text-white/50">
              <button className="hover:text-white transition-colors">
                <Bookmark size={18} />
              </button>

              <button className="hover:text-white transition-colors">
                <Upload size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
