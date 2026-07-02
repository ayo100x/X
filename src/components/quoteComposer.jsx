import {
  X,
  Image,
  ListOrdered,
  BarChart3,
  Smile,
  Calendar,
  MapPin,
  Globe,
} from "lucide-react";
import { useQuoteComposerStore } from "../stores/useQuoteComposerStore";
import QuoteCard from "./quoteCard";
import { usePostStore } from "../stores/post.store";
import { useEffect, useRef, useState } from "react";

const QuoteComposer = ({ post }) => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const MAX_CHARS = 280;
  const remaining = MAX_CHARS - text.length;
  const isOverLimit = remaining < 0;
  const isNearLimit = remaining <= 20;
  const canPost = text.trim().length > 0 && !isOverLimit;

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

  const closeQuoteComposer = useQuoteComposerStore(
    (state) => state.closeQuoteComposer,
  );
  const user = usePostStore((state) => state.user);

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

  const create_post = usePostStore((state) => state.create_post)
  const createPostOnClick = () => {
    if (!text.trim() && media.length === 0) return;

    create_post({
      postText: text,
      postMedia: media.map((item) => item.preview),
      quoteId: post.postId,
    });

    setText("");
    setMedia([]);
    closeQuoteComposer();
  };

  return (
    <div className="w-full max-w-[600px] h-fit max-h-[90vh] flex flex-col bg-[rgb(20,20,20)] text-white rounded-2xl bordr border-[#2f3336] shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => closeQuoteComposer()}
          className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X size={18} strokeWidth={2.2} />
        </button>
        <button className="text-[15px] font-bold text-[#1d9bf0] px-4 py-1.5 rounded-full hover:bg-[#1d9bf0]/10 transition-colors">
          Drafts
        </button>
      </div>

      <div className="flex gap-6 m-5 overflow-y-auto custom-scrollbar">
        {/* User Avatar */}
        <div>
          <img
            src={user.userIcon}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        {/* Text Area & Quote */}
        <div className="mt-1 w-full">
          {/* Text Area */}
          <div>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a comment"
              className="w-full bg-transparent resize-none outline-none text-[20px] leading-8 placeholder:text-[#71767b] overflow-y-auto caret-[#1d9bf0]"
              rows={1}
            />
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
          {/* Quote Post */}
          <div>
            <QuoteCard post={post} />
          </div>
        </div>
      </div>

      <div className="m-5 border-b border-white/40">
        <button className="mt-1 flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-blue-500 pb-3">
          <Globe size={16} />
          <span>Everyone can reply</span>
        </button>
      </div>

      <div className="m-5 flex justify-between">
        {/* button - Icons */}
        <div className="flex items-center -ml-2">
          {actionIcons.map(({ icon: Icon, label, onClick }) => (
            <button
              key={label}
              aria-label={label}
              onClick={onClick}
              className="p-2 rounded-full text-white/70 hover:bg-[#1d9bf0]/10 transition-colors"
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
                <svg width={ringSize} height={ringSize} className="-rotate-90">
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
  );
};

export default QuoteComposer;
