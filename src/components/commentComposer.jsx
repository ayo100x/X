import { useState, useRef, useEffect } from "react";
import {
  X,
  Image,
  ListOrdered,
  BarChart3,
  Smile,
  Calendar,
  MapPin,
} from "lucide-react";
import { useCommentComposerStore } from "../stores/useCommentComposerStore";
import { formatPostTime } from "../utils/helpers";
import { usePostStore } from "../stores/post.store";
import { get_post_detail } from "../../services/post.services";
import QuoteCard from "./quoteCard";

const MAX_CHARS = 280;

const CommentComposer = ({ post }) => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const remaining = MAX_CHARS - text.length;
  const isOverLimit = remaining < 0;
  const isNearLimit = remaining <= 20;
  const canPost = text.trim().length > 0 && !isOverLimit;

  const closeCommentComposer = useCommentComposerStore(
    (state) => state.closeCommentComposer,
  );

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    const maxHeight = 350;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [text]);

  const maxHeight = 220;
  const ringSize = 30;
  const strokeWidth = 2.5;
  const radius = (ringSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(text.length / MAX_CHARS, 0), 1);
  const dashoffset = circumference * (1 - progress);
  const ringColor = isOverLimit
    ? "#f4212e"
    : isNearLimit
      ? "#ffd400"
      : "#1d9bf0";

  const actionIcons = [
    {
      icon: Image,
      label: "Media",
      onClick: () => fileInputRef.current.click(),
    },
    { icon: ListOrdered, label: "GIF", onClick: () => {} },
    { icon: BarChart3, label: "Poll", onClick: () => {} },
    { icon: Smile, label: "Emoji", onClick: () => {} },
    { icon: Calendar, label: "Schedule", onClick: () => {} },
    { icon: MapPin, label: "Location", onClick: () => {} },
  ];

  const user = usePostStore((state) => state.user);

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
    if (!text.trim() && media.length === 0) return;

    create_post({
      postText: text,
      postMedia: media.map((item) => item.preview),
      replyId: post.postId,
    });

    setText("");
    setMedia([]);
    closeCommentComposer();
  };

  return (
    <div className="w-full h-fit max-w-[600px] max-h-[90vh] flex flex-col bg-[rgb(20,20,20)] text-white rounded-2xl shadow-2xl overflow-hidden custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => closeCommentComposer()}
          className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X size={18} strokeWidth={2.2} />
        </button>
        <button className="text-[15px] font-bold text-[#1d9bf0] px-4 py-1.5 rounded-full hover:bg-[#1d9bf0]/10 transition-colors">
          Drafts
        </button>
      </div>

      {/* Body */}
      <div className="px-4 pt-3 pb-3 space-y-3 overflow-y-auto custom-scrollbar flex-1">
        {/* Row 1: Original post */}
        <div className="flex gap-3">
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              src={post.user.userIcon}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* Connector line stretches to fill space between the two rows */}
            <div className="w-[2px] h-10 bg-[#333] my-1 rounded-full" />
          </div>

          <div className="flex-1 min-w-0 pt-0.5 pb-3">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold text-white text-[15px] hover:underline cursor-pointer">
                {post.user.name}
              </span>
              <span className="text-[#71767b] text-[15px]">
                @{post.user.userName}{" "}
              </span>
              <span className="text-[#71767b] text-[15px]">·</span>
              <span className="text-[#71767b] text-[15px] hover:underline cursor-pointer">
                {formatPostTime(post.createdAt)}
              </span>
            </div>
            <span className="mt-1 mb-2 text-[15px] leading-5 text-white/95 break-words">
              {post.postText}
            </span>
            {post.quoteId && (
              <div>
                <QuoteCard post={get_post_detail(post.quoteId)} />
              </div>
            )}
            <div className="text-[15px]">
              <span className="text-white/500">Replying to </span>
              <span className="hover:underline cursor-pointer text-blue-300">
                @{post.user.userName}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: avatar + textarea side by side */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <img
              src={user.userIcon}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Post your reply"
              className="w-full bg-transparent resize-none outline-none text-[20px] leading-7 placeholder:text-[#71767b] min-h-18 max-h-87.5  caret-[#1d9bf0]"
              rows={1}
            />
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleMediaSelect}
        />
        {media.length > 0 && (
          <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mx-8">
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
      </div>

      {/* Footer */}
      <div className="px-4 pt-1 pb-3">
        <div className="flex items-center justify-between">
          {/* Action icons */}
          <div className="flex items-center -ml-2">
            {actionIcons.map(({ icon: Icon, label, onClick }) => (
              <button
                key={label}
                aria-label={label}
                onClick={onClick}
                className="p-2 rounded-full text-[#1d9bf0] hover:bg-[#1d9bf0]/10 transition-colors"
              >
                <Icon size={20} strokeWidth={2.2} />
              </button>
            ))}
          </div>

          {/* Progress ring + Reply button */}
          <div className="flex items-center gap-3">
            {text.length > 0 && (
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
              disabled={!canPost}
              className="px-4 py-1.5 text-[15px] font-bold rounded-full bg-white text-black disabled:opacity-50 disabled:cursor-default transition-all active:scale-[0.97]"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComposer;
