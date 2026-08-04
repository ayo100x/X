import { formatPostTime, formatTimeAndDate } from "../utils/helpers";
import { Heart, MessageCircle, Repeat2, UserPlus, AtSign } from "lucide-react";

const notificationMap = {
  like: {
    icon: Heart,
    iconClass: "fill-pink-500 text-pink-500",
    text: "liked your post",
  },
  repost: {
    icon: Repeat2,
    iconClass: "text-green-500",
    text: "reposted your post",
  },
};

const NotificationCard = ({ notification }) => {
  const { icon: Icon, iconClass, text } = notificationMap[notification.type];

  const showPost = notification.type !== "follow";

  return (
    <div className="flex gap-3 p-3 border-b border-white/10">
      <Icon size={28} className={iconClass} />

      <div className="flex-1">
        <div className="size-8 rounded-full overflow-hidden">
          <img
            src={notification.actorAvatar}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-2" />

        <div className="flex items-center gap-1 text-sm flex-wrap">
          <span className="font-semibold text-white">
            {notification.actorName}
          </span>

          <span className="text-white">{text}</span>

          <span className="text-white/40">•</span>

          <span className="text-white/40">
            {formatPostTime(notification.createdAt)}
          </span>
        </div>

        {showPost && (
          <span className="text-white/40">{notification.postText}</span>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
