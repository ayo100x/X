import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
  Sparkles,
  MoreHorizontal,
} from "lucide-react";
import MediaGrid from "./mediaGrid";
import QuoteCard from "./quoteCard";
import { get_post_detail } from "../../services/post.services";
import { formatPostTime, formatTimeAndDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import RepostActionCard from "./repostActionCard";
import { useEffect, useRef, useState } from "react";
import { usePostStore } from "../stores/post.store";
import { useCommentComposerStore } from "../stores/useCommentComposerStore";
import MorePostAction from "./morePostAction";

const PostCard = ({ post }) => {
  const [showRepostAction, setShowRepostAction] = useState(false);
  const [activePost, setActivePost] = useState({});
  const [showMoreActionButtons, setShowMoreActionButtons] = useState(false);

  const user = usePostStore((state) => state.user);
  const likePost = usePostStore((state) => state.likePost);

  const repostRef = useRef(null);

  const navigate = useNavigate();

  const handlePostOnclick = () => {
    navigate(`/post/${post.postId}`);
  };

  useEffect(() => {
    if (!showRepostAction) return;

    function handleClickOutside(event) {
      if (repostRef.current && !repostRef.current.contains(event.target)) {
        setShowRepostAction(false);
        setActivePost({});
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRepostAction]);

  useEffect(() => {
    if (!showMoreActionButtons) return;

    function handleClickOutside(event) {
      if (
        moreActionRef.current &&
        !moreActionRef.current.contains(event.target)
      ) {
        setShowMoreActionButtons(false);
        setActivePost({});
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMoreActionButtons]);

  const moreActionRef = useRef(null);

  const closeRepostCardActions = () => {
    setShowRepostAction(false);
    setActivePost({});
  };

  const hasReposted = post.repost.includes(user.userId);
  const hasLiked =  post.likes.includes(user.userId);
  // const hasLiked = false
  

  const handleLikeOnClick = () => {
    likePost(post.postId);
  };

  const openCommentComposer = useCommentComposerStore(
    (state) => state.openCommentComposer,
  );

  const handleCommentOnClick = () => {
    openCommentComposer(post);
  };

  return (
    <div
      onClick={handlePostOnclick}
      className="w-full max-w-2xl b g-black text-white px-4 py-5 border-b border-white/10 hover:bg-white/2 transition"
    >
      {/* Header */}
      {hasReposted && (
        <div className="ml-7 mb-1 text-white/40 flex items-center gap-2">
          <Repeat2 className="size-5" /> You reposted
        </div>
      )}

      <div className="flex gap-3">
        {/* Avatar */}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center font-medium"
        >
          <img
            src={post.user.userIcon}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            {/* User Info */}
            <div className="flex items-center gap-2 text-sm">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="font-semibold text-white"
              >
                {post.user.name}
              </span>

              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-white/40"
              >
                @{post.user.userName}
              </span>

              <span className="text-white/30">•</span>

              <span className="text-white/40">
                {formatPostTime(post.createdAt)}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="h-9 w-9 rounded-full  flex items-center justify-center text-white/70 hover:text-white transition"
              >
                <Sparkles size={16} />
              </button>

              <div ref={moreActionRef} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMoreActionButtons((prev) => !prev);
                  }}
                  className="h-9 w-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition"
                >
                  <MoreHorizontal size={16} />
                </button>

                {showMoreActionButtons && (
                  <div>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={(e) => {
                        e.stopPropagation();
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

          {/* Post Content */}
          <div className="mt-2 mr-9">
            <span className="text-[15px] leading-6 text-white/90 whitespace-pre-wrap">
              {post.postText}
            </span>

            <MediaGrid media={post.postMedia} />
          </div>

          {post.quoteId && (
            <div>
              <QuoteCard post={get_post_detail(post.quoteId)} />
            </div>
          )}

          {/* Engagement */}
          <div className="flex items-center gap-8 text-white/50 justify-between mt-4">
            {/* reply button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCommentOnClick();
              }}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle size={18} />
              <span className="text-sm">{post.comments.length}</span>
            </button>
            {/* repost button */}
            <div ref={repostRef} className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowRepostAction((prev) => !prev);
                }}
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
                      e.stopPropagation();
                      setShowRepostAction(false);
                      setActivePost({});
                    }}
                  />

                  {/* Menu */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="absolute bottom-full left-2 mb-2 z-50"
                  >
                    <RepostActionCard
                      post={post}
                      closeRepostCardActions={closeRepostCardActions}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* like button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLikeOnClick();
              }}
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

            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <BarChart2 size={18} />
              <span className="text-sm">{post.views}</span>
            </button>

            {/* Actions */}
            <div className="flex items-center gap-4 text-white/50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="hover:text-white transition-colors"
              >
                <Bookmark size={18} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="hover:text-white transition-colors"
              >
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
