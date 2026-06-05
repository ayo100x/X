import { useState } from "react";
import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
  MoreHorizontal,
  Sparkles,
  Image,
  Gift,
  Smile,
  MapPin,
  Flag,
} from "lucide-react";

import MediaGrid from "./mediaGrid";
import QuoteCard from "./quoteCard";

const ThreadView = () => {
  const [reply, setReply] = useState("");
  const [isReplyFocused, setIsReplyFocused] = useState(false);

  const media = [
    "https://picsum.photos/800/500",
    "https://picsum.photos/600/600",
  ];

  return (
    <div className="w-full max-w-2xl bg-black text-white">
      {/* ================= PARENT POST ================= */}
      <div className="flex gap-3 px-4 pt-5">
        {/* Avatar Column + Connector */}
        <div className="flex flex-col items-center">
          <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center font-medium">
            A
          </div>

          {/* Connector */}
          <div className="w-px flex-1 min-h-20 bg-white/15 mt-2" />
        </div>

        {/* Parent Content */}
        <div className="pb-5">
          {/* User details and meta */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-white">Ayomide</span>

            <span className="text-white/40">@ayomide</span>

            <span className="text-white/30">•</span>

            <span className="text-white/40">2h</span>
          </div>

          <div className="mt-2">
            <span className="block text-[15px] leading-6 text-white/90">
              Building a social media app from scratch with React, Tailwind,
              Zustand and Express. The goal is to keep the UI extremely clean,
              minimal and premium while maintaining excellent performance.
            </span>

            {/* <MediaGrid media={media} /> */}
          </div>

          {/* <div className="mt-3">
            <QuoteCard />
          </div> */}

          {/* Buttons - like, comment, retweet.. */}
          <div className="flex items-center justify-between mt-4 text-white/50">
            <button className="flex items-center gap-2 hover:text-white transition">
              <MessageCircle size={18} />
              <span className="text-sm">24</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <Repeat2 size={18} />
              <span className="text-sm">12</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <Heart size={18} />
              <span className="text-sm">145</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <BarChart2 size={18} />
              <span className="text-sm">4.2K</span>
            </button>

            <div className="flex items-center gap-4">
              <button className="hover:text-white transition">
                <Bookmark size={18} />
              </button>

              <button className="hover:text-white transition">
                <Upload size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DETAILED POST ================= */}
      <div className="flex flex-col gap-3 px-4 border-b border-white/10">
        <div className="flex gap-3">
          {/* Avatar aligned with connector */}
          <div className="h-11 w-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center font-medium">
            A
          </div>

          {/* Header */}
          <div className="flex-1 flex items-start justify-between">
            {/* name username */}
            <div>
              <span className="block text-[15px] font-semibold">Ayomide</span>

              <span className="text-sm text-white/50">@ayomide</span>
            </div>
                    {/* grok buttons */}
            <div className="flex items-center gap-2">
              <button className="text-white/60 hover:text-white transition">
                <Sparkles size={18} />
              </button>

              <button className="text-white/60 hover:text-white transition">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {/* Content */}
          <div className="mt-4">
            <span className="block text-[15px] leading-7 text-white/90">
              Building a social media platform with React, Tailwind, Zustand and
              Express. Focusing heavily on creating a premium user experience,
              smooth interactions and a clean modern interface inspired by X.
            </span>

            {/* <MediaGrid media={media} /> */}
          </div>

          {/* Meta */}
          <div className="mt-5 pb-4 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <span>3:52 PM</span>

              <span>•</span>

              <span>Jun 3, 2026</span>

              <span>•</span>

              <span>
                <span className="text-white/80 font-medium">127.9K</span> Views
              </span>
            </div>
          </div>

          {/* Engagement */}
          <div className="py-4 border-b border-white/10">
            <div className="flex items-center justify-between text-white/60">
              <button className="hover:text-white transition">
                <MessageCircle size={20} />
              </button>

              <button className="hover:text-white transition">
                <Repeat2 size={20} />
              </button>

              <button className="hover:text-white transition">
                <Heart size={20} />
              </button>

              <button className="hover:text-white transition">
                <Bookmark size={20} />
              </button>

              <button className="hover:text-white transition">
                <Upload size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Reply Composer */}
        <div className="py-4">
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              A
            </div>

            <div className="flex-1">
              {isReplyFocused && (
                <div className="mb-2">
                  <span className="text-sm text-white/50">
                    Replying to <span className="text-blue-400">@ayomide</span>
                  </span>
                </div>
              )}

              {!isReplyFocused ? (
                <div className="flex items-center gap-3">
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    onFocus={() => setIsReplyFocused(true)}
                    placeholder="Post your reply"
                    rows={1}
                    className="flex-1 bg-transparent resize-none outline-none placeholder:text-white/40 text-[15px]"
                  />

                  <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold">
                    Reply
                  </button>
                </div>
              ) : (
                <>
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    rows={3}
                    placeholder="Post your reply"
                    className="w-full bg-transparent resize-none outline-none placeholder:text-white/40 text-[15px]"
                  />

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white/60">
                      <Image size={18} />

                      <Gift size={18} />

                      <Sparkles size={18} />

                      <Smile size={18} />

                      <MapPin size={18} />

                      <Flag size={18} />
                    </div>

                    <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold">
                      Reply
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadView;
