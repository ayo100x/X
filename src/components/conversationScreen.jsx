import { div } from "framer-motion/client";
import { MoreHorizontal, Phone, Video } from "lucide-react";
import ConversationInput from "./conversationInput";
import { useState } from "react";
import MessageBubble from "./messageBubble";
import { usePostStore } from "../stores/post.store";

const ConversationScreen = () => {
  const [messages, setMessages] = useState([
    {
      messageId: 1,
      text: "Had a long day",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 2,
      text: "You free later?",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 3,
      text: "Yeah, what's up?",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 4,
      text: "Just wanted to check in.",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 5,
      text: "Sounds good 😂",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 6,
      text: "I'm almost home.",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 7,
      text: "Take your time.",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 8,
      text: "Did you eat already?",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 9,
      text: "Not yet.",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 10,
      text: "Let's order something.",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 11,
      text: "I'm down.",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 12,
      text: "Pizza or burgers?",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 13,
      text: "Pizza 🍕",
      user: {
        userId: 1,
        userName: "John",
      },
    },
    {
      messageId: 14,
      text: "Good choice.",
      user: {
        userId: 2,
        userName: "Sarah",
      },
    },
    {
      messageId: 15,
      text: "See you soon.",
      user: {
        userId: 1,
        userName: "John",
      },
    },
  ]);

  const user = usePostStore((state) => state.user);

  return (
    <div className="bg-black text-white h-full flex flex-col w-full relative ">
      {/* header */}
      <div className="bg-black/60 backdrop-blur-md absolute top-0 left-0 right-0">
        <div className="flex items-center m-3 justify-between ">
          {/* avatar & Name*/}
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=48"
              className="object-cover rounded-full w-15 h-15"
            />

            <span className="text-[15px] font-medium text-white">John</span>
          </div>

          {/* buttons */}
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-full bg-white/30 size-14">
              <Phone size={20} className="text-white" />
            </button>

            <button className="flex items-center justify-center rounded-full bg-white/30 size-14">
              <Video size={20} className="text-white" />
            </button>

            <button className="flex items-center justify-center rounded-full bg-white/30 size-14">
              <MoreHorizontal size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="overflow-y-auto custom-scrollbar">
        {/* user info & date joined */}
        <div className="mt-20 gap-3 items-center justify-center flex flex-col">
          {/* user avatar */}
          <img
            src="https://i.pravatar.cc/150?img=48"
            className="object-cover rounded-full w-15 h-15"
          />

          {/* user info */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-semibold text-[25px]"> John </span>
            <span className="text-white/30">@johndoe</span>
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
        <div className="w-full bg-transparent flex-1 mt-3 items-center ">
          {messages.map((message) => (
            <MessageBubble
              key={message.messageId}
              message={message}
              currentUser={user.userId}
            />
          ))}
          {/* <MessageBubble /> */}
        </div>
      </div>

      <div className=" absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md ">
        <ConversationInput />
      </div>
    </div>
  );
};

export default ConversationScreen;
