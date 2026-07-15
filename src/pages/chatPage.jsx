import React from "react";
import ChatList from "./chatList";
import NewChatScreen from "../components/newChatScreen";
import ConversationScreen from "../components/conversationScreen";

const ChatPage = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-[500px] ">
        <ChatList />
      </div>

      <div className="flex-1 w-full">
        {/* <NewChatScreen /> */}
        <ConversationScreen />
      </div>
    </div>

    //
  );
};

export default ChatPage;
