import { HeartPlus, MoreHorizontal } from "lucide-react";

const MessageBubble = ({ message }) => {
  const isCurrentUser = message.senderId === 0;

  return (
    <div
      className={`group flex items-end gap-2 my-1 ${
        isCurrentUser ? "justify-end pr-3" : "justify-start pl-3"
      }`}
    >
      
      {isCurrentUser && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <MoreHorizontal size={17} className="text-white/70" />
          </button>

          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <HeartPlus size={17} className="text-white/70" />
          </button>
        </div>
      )}

      {/* BUBBLE */}
      <div className="max-w-[72%] flex flex-col mt-3">
        {message.media && (
          <img
            src={message.media}
            alt=""
            className="w-100 rounded-3xl border border-white/10"
          />
        )}

        {message.text && (
          <div
            className={`rounded-[20px] px-4 py-2.5 ${
              isCurrentUser ? "bg-[#1d9bf0]" : "bg-white/10"
            }`}
          >
            <span className="text-[15px] leading-5 text-white wrap-break-word whitespace-pre-wrap">
              {message.text}
            </span>
          </div>
        )}
      </div>

      {!isCurrentUser && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <HeartPlus size={17} className="text-white/70" />
          </button>

          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <MoreHorizontal size={17} className="text-white/70" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;