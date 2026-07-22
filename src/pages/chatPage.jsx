import React, { useState } from "react";
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
import { useNewMessageModalStore } from "../stores/useNewMessageModalStore";
import NewMessageModal from "../components/newMessageModal";
import ConversationList from "../components/conversationList";
import { useConversationStore } from "../stores/use.conversation.store";
import UserChatProfile from "../components/UserChatProfile";

const ChatPage = () => {
  
  const userChatProfile = useUserChatProfileStore(
    (state) => state.userChatProfile,
  )
  

  const showNewMessageModal = useNewMessageModalStore(
    (state) => state.showNewMessageModal,
  );

  const closeNewMessageModal = useNewMessageModalStore(
    (state) => state.closeNewMessageModal,
  );

  

  const conversations = useConversationStore((state) => state.conversations);
  const activeConversationId = useConversationStore(
    (state) => state.activeConversationId,
  );
  const activeConversation = conversations.find(
    (conversation) => conversation.userId === activeConversationId,
  );

  return (
    <div className="flex h-screen relative ">
      <div className="w-125 ">
        <ConversationList />
      </div>

      <div className="flex-1 w-full">
        {activeConversation ? (
          <ConversationScreen activeConversation={activeConversation} />
        ) : (
          <NewChatScreen />
        )}
      </div>

      {showNewMessageModal && (
        <div>
          {/* transparent overlay */}
          <div
            onClick={closeNewMessageModal}
            className=" bg-transparent overflow-hidden h-full fixed inset-0 z-40"
          />

          {/* NewMessageModal */}

          <div className="absolute inset-0 z-50 flex justify-center mt-5">
            <NewMessageModal />
          </div>
        </div>
      )}
      
      {userChatProfile && (
       <UserChatProfile activeConversation={activeConversation}/>
      )}
    </div>

    //
  );
};

export default ChatPage;
