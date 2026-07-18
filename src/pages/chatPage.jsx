import React, { useState } from "react";
import ContactList from "./contactList";
import NewChatScreen from "../components/newChatScreen";
import ConversationScreen from "../components/conversationScreen";
import { useUserChatProfileStore } from "../stores/useUserChatProfileStore";
import {
  ArrowLeft,
  Ban,
  Bell,
  ChevronLeft,
  ChevronRight,
  Flag,
  MessageCircleOff,
  MoreHorizontal,
  Phone,
  Search,
  Trash2,
  User,
  UserRound,
  UserRoundPen,
  Video,
} from "lucide-react";
import ChatProfileActions from "../components/chatProfileActions";

const ChatPage = () => {
  const [showMoreActionButtons, setShowMoreActionButtons] = useState(false);
  const userChatProfile = useUserChatProfileStore(
    (state) => state.userChatProfile,
  );
  const closeUserChatProfile = useUserChatProfileStore(
    (state) => state.closeUserChatProfile,
  );

  const handleBackOnclick = () => {
    console.log("clicked");
    closeUserChatProfile(false);
  };

  const handleMoreOnClick = () => {
    setShowMoreActionButtons(!showMoreActionButtons);
  };

  return (
    <div className="flex h-screen relative ">
      <div className="w-[500px] ">
        <ContactList />
      </div>

      <div className="flex-1 w-full">
        <NewChatScreen />
        {/* <ConversationScreen /> */}
      </div>

      {userChatProfile && (
        <div className="absolute bg-transparent inset-0 flex justify-center">
          <div className="w-full h-fit max-w-150 max-h-[90vh] flex flex-col bg-[rgb(20,20,20)] text-white rounded-2xl shadow-2xl overflow-hidden custom-scrollbar mt-10 ">
            {/* Header */}
            <div className="flex justify-between m-4">
              <button
                onClick={handleBackOnclick}
                className="flex items-center justify-center rounded-full  hover:bg-white/10 duration-200 transition-colors cursor-pointer size-11"
              >
                <ArrowLeft size={20} />
              </button>

              <button className="flex items-center justify-center rounded-full  hover:bg-white/10 duration-200 transition-colors cursor-pointer size-11">
                <UserRoundPen size={20} />
              </button>
            </div>

            <div className="overflow-y-auto custom-scrollbar">
              {/* User Info & Details */}
              <div className="flex justify-center items-center flex-col m-4">
                <div className="w-18 h-18 shrink-0 bg-transparent rounded-full relative overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/150?img=48"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & UserName */}
                <div className="mt-7 flex flex-col justify-center items-center ">
                  <span className="text-white font-semibold text-[25px]">
                    John
                  </span>
                  <span className="text-white/30">@johndoe</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center  m-3 gap-10">
                <button className="w-17 h-17 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/40">
                  <Phone size={25} />
                </button>
                <button className="w-17 h-17 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/40">
                  <Video size={25} />
                </button>
                <button className="w-17 h-17 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/40">
                  <UserRound size={25} />
                </button>
                <div className="relative">
                  <button
                    onClick={handleMoreOnClick}
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/40"
                  >
                    <MoreHorizontal size={25} />
                  </button>
                  {showMoreActionButtons && (
                    <div className="absolute top-18 right-0 w-72 bg-[rgb(20,20,20)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
                      <button className="w-full flex items-center gap-4 m-1 px-4 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Bell size={20} className="text-white" />
                        <span className="text-[15px] font-medium text-white">
                          Mute
                        </span>
                      </button>

                      <button className="w-full flex items-center gap-4 m-1 px-4 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Ban size={20} className="text-white" />
                        <span className="text-[15px] font-medium text-white">
                          Block messages
                        </span>
                      </button>

                      <button className="w-full flex items-center gap-4 m-1 px-4 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Search size={20} className="text-white" />
                        <span className="text-[15px] font-medium text-white">
                          Search
                        </span>
                      </button>

                      <button className="w-full flex items-center gap-4 m-1 px-4 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Flag size={20} className="text-red-400" />
                        <span className="text-[15px] font-medium text-red-400">
                          Report user
                        </span>
                      </button>

                      <button className="w-full flex items-center gap-4 m-1 px-4 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Trash2 size={20} className="text-red-400" />
                        <span className="text-[15px] font-medium text-red-400">
                          Clear conversation
                        </span>
                      </button>

                      <button className="w-full flex items-center gap-4 m-1 mb-2 px-4 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Trash2 size={20} className="text-red-400" />
                        <span className="text-[15px] font-medium text-red-400">
                          Delete conversation
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <ChatProfileActions />
            </div>

            <div></div>
          </div>
        </div>
      )}
    </div>

    //
  );
};

export default ChatPage;
