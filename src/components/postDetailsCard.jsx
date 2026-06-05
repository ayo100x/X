import { useState } from "react";
import {
  MoreHorizontal,
  Sparkles,
  MessageCircle,
  Repeat2,
  Heart,
  Bookmark,
  Upload,
  ChevronDown,
  ChevronRight,
  Image,
  Gift,
  Smile,
  MapPin,
  Flag,
} from "lucide-react";
import MediaGrid from "./mediaGrid";

const PostDetailsCard = () => {
  const [reply, setReply] = useState("");
  const [isReplyFocused, setIsReplyFocused] = useState(false);
  const media = [
    "https://picsum.photos/800/500",
    "https://picsum.photos/600/600",
  ];

  return (
    <div className="w-full max-w-2xl bg-black text-white px-4 py-5 border-b border-white/10">
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center font-medium">
            A
          </div>

          <div className="flex flex-col">
            <span className="text-[15px] font-semibold">Ayomide</span>

            <span className="text-sm text-white/50">@ayomide</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-9 w-9 rounded-full  flex items-center justify-center text-white/70 hover:text-white transition">
            <Sparkles size={16} />
          </button>

          <button className="h-9 w-9 rounded-full flex items-center justify-center text-white/70 hover:text-white  transition">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-5">
        <span className="block text-[15px] leading-7 text-white/90">
          Building a social media platform with React, Tailwind, Zustand and
          Express. Focusing heavily on creating a premium user experience,
          smooth interactions and a clean modern interface inspired by X.
        </span>

        <MediaGrid media={media} />
      </div>

      {/* META */}
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

      {/* ENGAGEMENT + QUOTES */}
      <div className="mt-3 border-b border-white/10">
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

        <div className="mt-4 flex items-center justify-between">
          <button className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition">
            <span>Relevant</span>
            <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition">
            <span>View Quotes</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* REPLY COMPOSER */}
      <div className="py-4">
        <div className="flex gap-3">
          {/* Avatar */}
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

            {/* COLLAPSED */}
            {!isReplyFocused ? (
              <div className="flex items-center gap-3">
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  onFocus={() => setIsReplyFocused(true)}
                  placeholder="Post your reply"
                  rows={1}
                  className="
                    flex-1
                    bg-transparent
                    resize-none
                    outline-none
                    placeholder:text-white/40
                    text-[15px]
                    leading-6
                  "
                />

                <button
                  className="
                    px-5
                    py-2
                    rounded-full
                    bg-white
                    text-black
                    text-sm
                    font-semibold
                    hover:bg-white/90
                    transition
                  "
                >
                  Reply
                </button>
              </div>
            ) : (
              <>
                {/* EXPANDED */}
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Post your reply"
                  rows={3}
                  className="
                    w-full
                    bg-transparent
                    resize-none
                    outline-none
                    placeholder:text-white/40
                    text-[15px]
                    leading-6
                  "
                />

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/60">
                    <button className="hover:text-white transition">
                      <Image size={18} />
                    </button>

                    <button className="hover:text-white transition">
                      <Gift size={18} />
                    </button>

                    <button className="hover:text-white transition">
                      <Sparkles size={18} />
                    </button>

                    <button className="hover:text-white transition">
                      <Smile size={18} />
                    </button>

                    <button className="hover:text-white transition">
                      <MapPin size={18} />
                    </button>

                    <button className="hover:text-white transition">
                      <Flag size={18} />
                    </button>
                  </div>

                  <button
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-white
                      text-black
                      text-sm
                      font-semibold
                      hover:bg-white/90
                      transition
                    "
                  >
                    Reply
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsCard;
