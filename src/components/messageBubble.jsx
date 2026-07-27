import { HeartPlus, MoreHorizontal } from "lucide-react";
import ChatContextMenu from "./ChatContextMenu";
import { useState } from "react";

const MessageBubble = ({
  message,
  isCurrentUser,
  setOpenedContextMenuId,
  hoveredMessageId,
  openedContextMenuId,
}) => {
  const showActionButton =
    hoveredMessageId === message.messageId ||
    openedContextMenuId === message.messageId;
  const showContextMenu = openedContextMenuId === message.messageId;
 
  const toggleMoreButton = () => {
    if (showContextMenu) {
      setOpenedContextMenuId(null)
    } else {
      setOpenedContextMenuId(message.messageId)
    }
  }

  return (
    <div
      className={`flex items-end group
      ${isCurrentUser ? "justify-end" : "justify-start"}
    `}
    >
      {isCurrentUser && showActionButton && (
        <div className="flex items-center gap-1 mb-2.5">
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMoreButton();
              }}
              className="size-8 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              <MoreHorizontal size={17} className="text-white/70" />
            </button>
            {showContextMenu && (
              <div className="absolute">
                <ChatContextMenu messageId={message.messageId}/>
              </div>
            )}
          </div>
          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <HeartPlus size={17} className="text-white/70" />
          </button>
        </div>
      )}

      {message.text && (
        <div
          className={`w-fit max-w-[70%] py-2 px-4 rounded-[20px] ${
            isCurrentUser ? "bg-[#1d9bf0] " : "bg-white/10"
          }`}
        >
          <span className="text-[15px] leading-5 text-white wrap-break-word whitespace-pre-wrap shrink-0">
            {message.text}
          </span>
        </div>
      )}

      {message.media && (
        <img
          src={message.media}
          alt=""
          className="w-90 rounded-3xl border border-white/10"
        />
      )}

      {!isCurrentUser && showActionButton && (
        <div className="flex items-center gap-1 mb-2.5">
          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <HeartPlus size={17} className="text-white/70" />
          </button>
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMoreButton();
              }}
              className="size-8 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              <MoreHorizontal size={17} className="text-white/70" />
            </button>
            {showContextMenu && (
              <div className="absolute">
                <ChatContextMenu messageId={message.messageId} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
