import { div } from "framer-motion/client";
import { MoreHorizontal, Phone, Video } from "lucide-react";
import ConversationInput from "./conversationInput";
import { useState } from "react";
import MessageBubble from "./messageBubble";
import { usePostStore } from "../stores/post.store";
import { useUserChatProfileStore } from "../stores/useUserChatProfileStore";

const ConversationScreen = ({activeConversation}) => {
  

  const user = usePostStore((state) => state.user);
  const setUserChatProfile = useUserChatProfileStore((state) => state.setUserChatProfile)

  const handleOpenUserChatProfile = () => {
     setUserChatProfile(true);
  }

  return (
    <div className="bg-black text-white h-full flex flex-col w-full relative ">
      {/* header */}
      <div className="bg-black/60 absolute top-0 left-0 right-0">
        <div className="flex items-center m-3 justify-between ">
          {/* avatar & Name*/}
          <div className="flex items-center gap-3">
            <img
              src={activeConversation.userAvatar}
              className="object-cover rounded-full w-15 h-15"
            />

            <span className="text-[15px] font-medium text-white">{activeConversation.name}</span>
          </div>

          {/* buttons */}
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 duration-200 transition-colors cursor-pointer size-14">
              <Phone size={20} className="text-white" />
            </button>

            <button className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 duration-200 transition-colors cursor-pointer size-14">
              <Video size={20} className="text-white" />
            </button>

            <button 
              onClick={handleOpenUserChatProfile}
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 duration-200 transition-colors cursor-pointer size-14">
              <MoreHorizontal size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* body */}
      <div className=" overflow-y-auto custom-scrollbar">
        {/* user info & date joined */}
        <div className="gap-3 mt-30 items-center justify-center flex flex-col">
          {/* user avatar */}
          <img
            src={activeConversation.userAvatar}
            className="object-cover rounded-full w-15 h-15"
          />

          {/* user info */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-semibold text-[25px]"> {activeConversation.name} </span>
            <span className="text-white/30">@{activeConversation.userName}</span>
            <div className="flex gap-1">
              <span className="text-white font-semibold text-[18px]">275</span>
              <span className="text-white/30">Followers</span>
              <span className="text-white/30">•</span>
              <span className="text-white/30">Joined February 2022</span>
            </div>
          </div>

          <button className="h-10 px-5 rounded-full bg-white hover:bg-white/90 transition-colors">
            <span className="text-[15px] font-bold text-black">
              View profile
            </span>
          </button>

          <span className="text-white/30 mt-3"> Jul 28, 2023 </span>
        </div>
        {/* Message List (conversations) */}
        <div className="w-full bg-transparent flex-1 mt-3 px-3 items-center ">
          {activeConversation.messages.map((message) => (
            <MessageBubble
              key={message.messageId}
              message={message}
              // currentUser={message.senderId}
            />
          ))}
        </div>
      </div>

      <div className=" absolute bottom-0 left-0 right-0 bg-black/60">
        <ConversationInput />
      </div>
    </div>
  );
};

export default ConversationScreen;
