import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Upload,
} from "lucide-react";
import MediaGrid from "./mediaGrid";
import { formatPostTime } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const QuoteCard = ({ post }) => {
  if (!post) return null;

  const navigate = useNavigate()
  const handleOnClick = (e) => {
    e.stopPropagation();
    navigate(`/post/${post.postId}`)
  }

  return (
    <div 
    onClick={handleOnClick}
    className="w-full max-w-2xl cursor-pointer bg-transparent text-white   ">
      {/* Header */}

      <div className="flex gap-3 border rounded-xl  border-white/10 mt-10 p-2">
        {/* Avatar */}

        <div className="flex-1 min-w-0">
          {/* User Info */}

          <div className="flex items-center gap-2 text-sm">
            <div className="size-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center font-medium">
              <img
                src={post.user.userIcon}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-semibold text-white">{post.user.name}</span>

            <span className="text-white/40">@{post.user.userName}</span>

            <span className="text-white/30">•</span>

            <span className="text-white/40">{formatPostTime(post.createdAt)}</span>
          </div>

          {/* Post Content */}
          <div className="m-3">
            <p className="text-[15px] leading-6 text-white/90">
              {post.postText}
            </p>
            <MediaGrid media={post.postMedia} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
