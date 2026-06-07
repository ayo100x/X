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
import { get_post_detail } from "../../services/post.services";
import { formatPostTime, formatTimeAndDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate()

  const handlePostOnclick = () => {
    navigate(`/post/${post.postId}`);
  }
  // console.log(get_post_detail(post.quoteId))
  return (
    <div 
    onClick={handlePostOnclick}
    className="w-full max-w-2xl b g-black text-white px-4 py-5 border-b border-white/10 hover:bg-white/2 transition">
      {/* Header */}
      {post.repost.length > 0 && (
        <div className="ml-7 mb-1 text-white/40 flex items-center gap-2">
          <Repeat2 className="size-5" /> You reposted
        </div>
      )}

      <div className="flex gap-3">
        {/* Avatar */}
        <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center font-medium">
          <img
            src={post.user.userIcon}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="flex-1 min-w-0">
          {/* User Info */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-white">{post.user.name}</span>

            <span className="text-white/40">@{post.user.userName}</span>

            <span className="text-white/30">•</span>

            <span className="text-white/40">{formatPostTime(post.createdAt)}</span>
          </div>

          {/* Post Content */}
          <div className="mt-2 mr-9">
            <p className="text-[15px] leading-6 text-white/90">
              {post.postText}
            </p>

            <MediaGrid media={post.postMedia} />
          </div>

          {post.quoteId && (
            <div>
              <QuoteCard post= {get_post_detail(post.quoteId)} />
            </div>
          )}

          {/* Engagement */}
          <div className="flex items-center gap-8 text-white/50 justify-between mt-4">
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle size={18} />
              <span className="text-sm">{post.comments.length}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Repeat2 size={18} />
              <span className="text-sm">{post.repost.length}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Heart size={18} />
              <span className="text-sm">{post.likes}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <BarChart2 size={18} />
              <span className="text-sm">{post.views}</span>
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
