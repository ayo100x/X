import { useEffect, useRef, useState } from "react";
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
import { formatTimeAndDate } from "../utils/helpers";
import QuoteCard from "./quoteCard";
import { get_post_detail } from "../../services/post.services";
import { user } from "../stores/user.store";
import { usePostStore } from "../stores/post.store";
import RepostActionCard from "./repostActionCard";
import { useCommentComposerStore } from "../stores/useCommentComposerStore";
import MorePostAction from "./morePostAction";

const PostDetailsCard = ({ post }) => {
  const [reply, setReply] = useState("");
  const [media, setMedia] = useState([]);
  const [isReplyFocused, setIsReplyFocused] = useState(false);
  const [showRepostAction, setShowRepostAction] = useState(false);
  const [showMoreActionButtons, setShowMoreActionButtons] = useState(false);

  const composerRef = useRef(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    const maxHeight = 350;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [reply]);

  const MAX_CHARS = 280;
  const remaining = MAX_CHARS - reply.length;
  const isOverLimit = remaining < 0;
  const isNearLimit = remaining <= 20;
  const canPost = reply.trim().length > 0 && !isOverLimit;

  const ringSize = 30;
  const strokeWidth = 2.5;
  const radius = (ringSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(reply.length / MAX_CHARS, 0), 1);
  const dashoffset = circumference * (1 - progress);
  const ringColor = isOverLimit
    ? "#f4212e"
    : isNearLimit
      ? "#ffd400"
      : "#1d9bf0";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!composerRef.current?.contains(e.target)) {
        setIsReplyFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMediaSelect = (e) => {
    const files = Array.from(e.target.files);

    const selectedMedia = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }));

    setMedia((prev) => {
      const availableSlots = 4 - prev.length;

      if (availableSlots <= 0) {
        return prev;
      }

      return [...prev, ...selectedMedia.slice(0, availableSlots)];
    });

    e.target.value = "";
  };

  const removeMedia = (id) => {
    setMedia((prev) => {
      const item = prev.find((m) => m.id === id);

      if (item) {
        URL.revokeObjectURL(item.preview);
      }

      return prev.filter((m) => m.id !== id);
    });
  };

  const create_post = usePostStore((state) => state.create_post);
  const createPostOnClick = () => {
    if (!reply.trim() && media.length === 0) return;

    create_post({
      postText: reply,
      postMedia: media,
      replyId: post.postId,
    });

    setReply("");
    setMedia([]);
    setIsReplyFocused(false);
  };

  const likePost = usePostStore((state) => state.likePost);

  const handleLikeOnClick = () => {
    likePost(post.postId);
  };

  const hasLiked = post.likes.includes(user.userId);

  const handleRepostOnClick = () => {
    setShowRepostAction(!showRepostAction);
  };

  const closeRepostCardActions = () => {
    setShowRepostAction((prev) => !prev);
  };

  const hasReposted = post.repost.includes(user.userId);

  const openCommentComposer = useCommentComposerStore(
    (state) => state.openCommentComposer,
  );

  const handleCommentOnClick = () => {
    openCommentComposer(post);
  };

  const handleMoreOnClick = () => {
    setShowMoreActionButtons((prev) => !prev);
  };

  const moreActionRef = useRef(null);

  return (
    <div className="w-full max-w-2xl bg-black text-white px-4 py-5 border-b border-white/10">
      {/* HEADER */}
      {post.repost.length > 0 && (
        <div className="ml-7 mb-1 text-white/40 flex items-center gap-2">
          <Repeat2 className="size-5" /> You reposted
        </div>
      )}
      {/* POST USER DETAILS */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center font-medium">
            <img
              src={post.user.userIcon}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[15px] font-semibold">{post.user.name}</span>

            <span className="text-sm text-white/50">{post.user.userName}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* GROK BUTTON */}
          <button className="h-9 w-9 rounded-full  flex items-center justify-center text-white/70 hover:text-white transition">
            <Sparkles size={16} />
          </button>
          {/* More Action Button */}
          <div ref={moreActionRef} className="relative">
            <button
              onClick={handleMoreOnClick}
              className="h-9 w-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition"
            >
              <MoreHorizontal size={16} />
            </button>

            {showMoreActionButtons && (
              <div>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => {
                    setShowMoreActionButtons(false);
                  }}
                />

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-full mt-2 z-50"
                >
                  <MorePostAction post={post} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-5 ml-2">
        <span className="block text-[15px] leading-7 text-white/90 whitespace-pre-wrap">
          {post.postText}
        </span>

        <MediaGrid media={post.postMedia} />

        {post.quoteId && <QuoteCard post={get_post_detail(post.quoteId)} />}
      </div>

      {/* META */}
      <div className="mt-5 pb-4 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
          <span>{formatTimeAndDate(post.createdAt).time}</span>

          <span>•</span>

          <span>{formatTimeAndDate(post.createdAt).date}</span>

          <span>•</span>

          <span>
            <span className="text-white/80 font-medium">{post.views}</span>{" "}
            Views
          </span>
        </div>
      </div>

      {/* ENGAGEMENT + QUOTES */}
      <div className="mt-3 border-b border-white/10">
        <div className="flex items-center justify-between text-white/60">
          {/* Reply */}
          <button
            onClick={handleCommentOnClick}
            className="hover:text-white transition"
          >
            <MessageCircle size={20} />
          </button>

          {/* Repost */}
          <div className="relative">
            <button
              onClick={
                
                handleRepostOnClick
              }
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div
                className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                  hasReposted
                    ? " text-green-400"
                    : "text-white/50 hover:bg-green-500/10 hover:text-green-400"
                }`}
              >
                <Repeat2 size={18} />
              </div>
              <span className="text-sm">{post.repost.length}</span>
            </button>

            {showRepostAction && (
              <div>
                {/* Transparent overlay */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={(e) => {
                    setShowRepostAction(false);
                  }}
                />

                {/* Menu */}
                <div className="absolute z-50">
                  <RepostActionCard
                    post={post}
                    closeRepostCardActions={closeRepostCardActions}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Like */}
          <button
            onClick={handleLikeOnClick}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <div
              className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                hasLiked
                  ? "fill-pink-500 text-pink-500"
                  : "text-white/50 hover:bg-pink-500/10 hover:text-pink-500"
              }`}
            >
              <Heart
                size={18}
                className={`transition-colors ${
                  hasLiked
                    ? "fill-pink-500 text-pink-500"
                    : "text-white/50 group-hover:text-pink-500"
                }`}
              />
            </div>
            <span className="text-sm">{post.likes.length}</span>
          </button>

          {/* Bookmark */}
          <button className="hover:text-white transition">
            <Bookmark size={20} />
          </button>

          {/* Upload/Share */}
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

      <div className="flex gap-3 py-4" ref={composerRef}>
        {/* Avatar */}
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
                ref={textareaRef}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Post your reply"
                rows={1}
                className="
                    w-full
                    bg-transparent
                    resize-none
                    outline-none
                    placeholder:text-white/40
                    text-[20px]
                    leading-8
                  "
              />

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleMediaSelect}
              />
              {media.length > 0 && (
                <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mx-">
                  {media.map((item) => (
                    <div
                      key={item.id}
                      className="relative overflow-hidden rounded-2xl"
                    >
                      <img
                        src={item.preview}
                        alt=""
                        className="w-full object-cover"
                      />

                      {/* Top Controls */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        {/* Edit */}
                        <button
                          className="
                          h-8
                          px-3
                          rounded-full
                          bg-black/70
                          backdrop-blur-md
                          text-white
                          text-xs
                          font-medium
                          hover:bg-black/85
                          transition
                        "
                        >
                          Edit
                        </button>

                        {/* Remove */}
                        <button
                          onClick={() => removeMedia(item.id)}
                          className="
                        size-8
                        rounded-full
                        bg-black/70
                        backdrop-blur-md
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-black/85
                        transition
                      "
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/60">
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="hover:text-white transition"
                  >
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

                <div className="flex items-center gap-3">
                  {reply.length > 0 && (
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <svg
                          width={ringSize}
                          height={ringSize}
                          className="-rotate-90"
                        >
                          <circle
                            cx={ringSize / 2}
                            cy={ringSize / 2}
                            r={radius}
                            fill="none"
                            stroke="#2f3336"
                            strokeWidth={strokeWidth}
                          />
                          <circle
                            cx={ringSize / 2}
                            cy={ringSize / 2}
                            r={radius}
                            fill="none"
                            stroke={ringColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={dashoffset}
                            strokeLinecap="round"
                          />
                        </svg>
                        {isNearLimit && (
                          <span
                            className={`absolute text-[12px] font-medium tabular-nums ${isOverLimit ? "text-[#f4212e]" : "text-[#71767b]"}`}
                          >
                            {remaining}
                          </span>
                        )}
                      </div>
                      {isNearLimit && <div className="w-px h-6 bg-[#2f3336]" />}
                    </div>
                  )}

                  <button
                    onClick={createPostOnClick}
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetailsCard;
