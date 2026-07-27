import { useState } from "react";
import MessageBubble from "./messageBubble";
import { div } from "framer-motion/client";

const MessageTile = ({ activeConversation }) => {
  const [hoveredMessageId, setHoveredMessageId] = useState(null);
  const [openedContextMenuId, setOpenedContextMenuId] = useState(null);

  const closeContextMenu = () => {
    setOpenedContextMenuId(null);
  }

  return (
    <div onClick={closeContextMenu} className="flex flex-col gap-4">
      {activeConversation.messages.map((message) => {
        const isCurrentUser = message.senderId === 0;

        return (
          <div key={message.messageId} onMouseEnter={() =>{setHoveredMessageId(message.messageId)}} onMouseLeave={() =>{setHoveredMessageId(null)}}> 
            <MessageBubble message={message} isCurrentUser={isCurrentUser} setOpenedContextMenuId={setOpenedContextMenuId} hoveredMessageId={hoveredMessageId} openedContextMenuId={openedContextMenuId}  />
          </div>

        );
      })}
    </div>
  );
};
export default MessageTile;
