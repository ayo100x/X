import { HeartPlus, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import ChatContextMenu from "./ChatContextMenu";
import { useConversationStore } from "../stores/use.conversation.store";



  return (
    <div
      className={`group flex  gap-2 my-1 ${
        isCurrentUser ? "justify-end pr-3" : "justify-start pl-3"
      }`}
    >
      {isCurrentUser && (
        <div
          className={`flex items-center gap-1 transition-opacity duration-150
            ${isMenuOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
            `}
        >
          <div className="relative">
            <button
              onClick={handleChatContextOnClick}
              className="size-8 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              <MoreHorizontal size={17} className="text-white/70" />
            </button>
            {openContextMenuId === message.messageId && (
              <div className="absolute right-0 top-6 mt-2 z-50">
                <ChatContextMenu isCurrentUser={isCurrentUser}/>
              </div>
            )}
          </div>

          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <HeartPlus size={17} className="text-white/70" />
          </button>
        </div>
      )}

      {/* BUBBLE */}
      <div className="max-w-[70%] flex flex-col mt-3">
        {message.media && (
          <img
            src={message.media}
            alt=""
            className="w-90 rounded-3xl border border-white/10"
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
        <div
          className={`flex items-center gap-1 transition-opacity duration-150
            ${isMenuOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
            `}
        >
          <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
            <HeartPlus size={17} className="text-white/70" />
          </button>

          <div className="relative">
            <button
              onClick={handleChatContextOnClick}
              className="size-8 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              <MoreHorizontal size={17} className="text-white/70" />
            </button>
            {openContextMenuId === message.messageId && (
              <div className="absolute left-2 top-6 mt-2 z-50">
                <ChatContextMenu />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


<div className="flex items-center gap-1 ">
    <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
      <MoreHorizontal size={17} className="text-white/70" />
    </button>
    <button className="size-8 rounded-full flex items-center justify-center hover:bg-white/10">
      <HeartPlus size={17} className="text-white/70" />
    </button>
</div>


