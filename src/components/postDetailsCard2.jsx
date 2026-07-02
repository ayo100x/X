import { useEffect, useRef, useState } from "react";
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
import { usePostStore } from "../stores/post.store";
import RepostActionCard from "./repostActionCard";
import { useCommentComposerStore } from "../stores/useCommentComposerStore";
import MorePostAction from "./morePostAction";

const PostDetailsCard2 = ({ post }) => {
  const [reply, setReply] = useState("");
  const [isReplyFocused, setIsReplyFocused] = useState(false);
  const [repliedPost, setRepliedPost] = useState({});
  const [showRepostAction, setShowRepostAction] = useState(false);
  const [showRepostAction2, setShowRepostAction2] = useState(false);
  const [showMoreActionButtons, setShowMoreActionButtons] = useState(false);
  const [media, setMedia] = useState([]);

  const moreActionRef = useRef(null);

  const getRepliedPost = async () => {
    const response = await get_post_detail(post.replyId);
    setRepliedPost(response);
  };

  const posts = usePostStore((state) => state.posts);

  useEffect(() => {
    getRepliedPost();
  }, [posts, post.replyId]);

  const composerRef = useRef(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

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
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    const maxHeight = 350;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [reply]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (composerRef.current?.contains(e.target)) return;

      const hasText = reply.trim() !== "";
      const hasMedia = media.length > 0;

      if (!hasText && !hasMedia) {
        setIsReplyFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [reply, media]);

  const hasLiked_rp = repliedPost?.likes?.includes(user.userId) ?? false; // repliedPost
  const hasLiked_dp = post.likes.includes(user.userId); // detailedPost

  const likePost = usePostStore((state) => state.likePost);

  const handleLikeOnClick = (postId) => {
    likePost(postId);
  };

  const handleRepostOnClick = () => {
    setShowRepostAction(!showRepostAction);
  };
  const hasReposted_rp = repliedPost?.repost?.includes(user.userId) ?? false; // repliedPost
  const hasReposted_dp = post.repost.includes(user.userId); // detailedPost

  const closeRepostCardActions = () => {
    setShowRepostAction((prev) => !prev);
  };

  const closeRepostCardActions2 = () => {
    setShowRepostAction2((prev) => !prev);
  }

  const openCommentComposer = useCommentComposerStore(
    (state) => state.openCommentComposer,
  );

  const handleMoreOnClick = () => {
    setShowMoreActionButtons((prev) => !prev);
  };

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
      postMedia: media.map((item) => item.preview),
      replyId: post.postId,
    });

    setReply("");
    setMedia([]);
    setIsReplyFocused(false);
  };

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
            <span className="block text-[15px] leading-6 text-white/90 whitespace-pre-wrap">
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
            {/* Comment */}
            <button
              onClick={() => openCommentComposer(repliedPost)}
              className="flex items-center gap-2 hover:text-white transition"
            >
              <MessageCircle size={18} />
              <span className="text-sm">{repliedPost?.comments?.length}</span>
            </button>

            {/* Repost */}
            <div className="relative">
              <button
                onClick={() => setShowRepostAction(true)}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <div
                  className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                    hasReposted_rp
                      ? " text-green-400"
                      : "text-white/50 hover:bg-green-500/10 hover:text-green-400"
                  }`}
                >
                  <Repeat2 size={18} />
                </div>
                <span className="text-sm">{repliedPost?.repost?.length}</span>
              </button>

              {showRepostAction && (
                <div>
                  {/* Transparent overlay */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={(e) => {
                      setShowRepostAction(!showRepostAction);
                    }}
                  />

                  {/* Menu */}
                  <div className="absolute bottom-full left-2 mb-2 z-50">
                    <RepostActionCard
                      post={repliedPost}
                      closeRepostCardActions={closeRepostCardActions}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Like */}
            <button
              onClick={() => {
                handleLikeOnClick(repliedPost?.postId);
              }}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div
                className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                  hasLiked_rp
                    ? "fill-pink-500 text-pink-500"
                    : "text-white/50 hover:bg-pink-500/10 hover:text-pink-500"
                }`}
              >
                <Heart
                  size={18}
                  className={`transition-colors ${
                    hasLiked_rp
                      ? "fill-pink-500 text-pink-500"
                      : "text-white/50 group-hover:text-pink-500"
                  }`}
                />
              </div>
              <span className="text-sm">{repliedPost?.likes?.length}</span>
            </button>

            {/* Views */}
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
            {/* grok & moreAction buttons */}
            <div className="flex items-center gap-2">
              <button className="text-white/60 hover:text-white transition">
                <Sparkles size={18} />
              </button>

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

                    <div className="absolute right-0 top-full mt-2 z-50">
                      <MorePostAction post={post} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {/* Content */}
          <div className="mt-4">
            <span className="block text-[15px] leading-7 text-white/90 whitespace-pre-wrap">
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
                <span className="text-white/80 font-medium">{post.views}</span>{" "}
                Views
              </span>
            </div>
          </div>

          {/* Engagement */}
          <div className="py-4 border-b border-white/10">
            <div className="flex items-center justify-between text-white/60">
              {/* Comment */}
              <button
                onClick={() => openCommentComposer(post)}
                className="hover:text-white transition"
              >
                <MessageCircle size={20} />
              </button>

              {/* Repost */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowRepostAction2(true);
                  }}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <div
                    className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                      hasReposted_dp
                        ? " text-green-400"
                        : "text-white/50 hover:bg-green-500/10 hover:text-green-400"
                    }`}
                  >
                    <Repeat2 size={18} />
                  </div>
                  <span className="text-sm">{post.repost.length}</span>
                </button>

                {showRepostAction2 && (
                  <div>
                    {/* Transparent overlay */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={(e) => {
                        setShowRepostAction2(!showRepostAction2);
                      }}
                    />

                    {/* Menu */}
                    <div className="absolute bottom-full left-2 mb-2 z-50">
                      <RepostActionCard
                        post={post}
                        closeRepostCardActions={closeRepostCardActions2}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Likes */}
              <button
                onClick={() => {
                  handleLikeOnClick(post.postId);
                }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <div
                  className={`flex items-center justify-center size-8 rounded-full transition-colors ${
                    hasLiked_dp
                      ? "fill-pink-500 text-pink-500"
                      : "text-white/50 hover:bg-pink-500/10 hover:text-pink-500"
                  }`}
                >
                  <Heart
                    size={18}
                    className={`transition-colors ${
                      hasLiked_dp
                        ? "fill-pink-500 text-pink-500"
                        : "text-white/50 group-hover:text-pink-500"
                    }`}
                  />
                </div>
                <span className="text-sm">{post.likes.length}</span>
              </button>

              {/* BookMarks */}
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
                  rows={3}
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
                        {isNearLimit && (
                          <div className="w-px h-6 bg-[#2f3336]" />
                        )}
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
    </div>
  );
};

export default PostDetailsCard2;
