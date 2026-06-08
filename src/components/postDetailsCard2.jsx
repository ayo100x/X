import { useEffect, useState } from "react";
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
import { get_post_detail } from "../../services/post.services";
import { formatPostTime, formatTimeAndDate } from "../utils/helpers";
import { user } from "../stores/user.store";

const PostDetailsCard2 = ({ post }) => {
  const [reply, setReply] = useState("");
  const [isReplyFocused, setIsReplyFocused] = useState(false);
  const [repliedPost, setRepliedPost] = useState({});

  const getRepliedPost = () => {
    const response = get_post_detail(post.replyId);
    setRepliedPost(response);
  };

  useEffect(() => {
    getRepliedPost();
  }, [post.replyId]);

  return (
    <div className="w-full max-w-2xl bg-black text-white">
      {/* ================= REPLIED POST ================= */}
      <div className="flex gap-3 px-4 pt-5">
        {/* Avatar Column + Connector */}
        <div className="flex flex-col items-center">
          <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center font-medium">
            <img
              src={repliedPost?.user?.userIcon}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Connector */}
          <div className="w-px flex-1 min-h-20 bg-white/15 mt-2" />
        </div>

        {/* Parent Content */}
        <div className="pb-5 w-full">
          {/* User details and meta */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-white">
              {repliedPost?.user?.name}
            </span>

            <span className="text-white/40">
              @{repliedPost?.user?.userName}
            </span>

            <span className="text-white/30">•</span>

            <span className="text-white/40">
              {formatPostTime(repliedPost?.createdAt)}
            </span>
          </div>

          <div className="mt-2">
            <span className="block text-[15px] leading-6 text-white/90">
              {repliedPost?.postText}
            </span>

            <MediaGrid media={repliedPost?.postMedia} />
          </div>

          {repliedPost?.quoteId && (
            <div>
              <QuoteCard post={get_post_detail(repliedPost?.quoteId)} />
            </div>
          )}

          {/* Buttons - like, comment, retweet.. */}
          <div className="flex items-center justify-between mt-4 text-white/50">
            <button className="flex items-center gap-2 hover:text-white transition">
              <MessageCircle size={18} />
              <span className="text-sm">{repliedPost?.comments?.length}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <Repeat2 size={18} />
              <span className="text-sm">{repliedPost?.repost?.length}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <Heart size={18} />
              <span className="text-sm">{repliedPost?.likes}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <BarChart2 size={18} />
              <span className="text-sm">{repliedPost?.views}</span>
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
      {/* Clicked post - The actual post being viewed */}
      <div className="flex flex-col gap-3 px-4 border-b border-white/10">
        <div className="flex gap-3">
          {/* Avatar aligned with connector */}
          <div className="h-11 w-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center font-medium">
            <img
              src={post.user.userIcon}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Header */}
          <div className="flex-1 flex items-start justify-between">
            {/* name username */}
            <div>
              <span className="block text-[15px] font-semibold">
                {post.user.name}
              </span>

              <span className="text-sm text-white/50">
                @{post.user.userName}
              </span>
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
              {post.postText}
            </span>
            <MediaGrid media={post.postMedia} />
          </div>

          {/* Meta */}
          <div className="mt-5 pb-4 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <span>{formatTimeAndDate(post.createdAt).time}</span>

              <span>•</span>

              <span>{formatTimeAndDate(post.createdAt).date}</span>

              <span>•</span>

              <span>
                <span className="text-white/80 font-medium">
                  {post.views.length}
                </span>{" "}
                Views
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
              <img
                src={user.userIcon}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="flex-1">
              {isReplyFocused && (
                <div className="mb-2">
                  <span className="text-sm text-white/50">
                    Replying to{" "}
                    <span className="text-blue-400">@{post.user.userName}</span>
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

export default PostDetailsCard2;
