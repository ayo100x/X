import MessageBubble from "./messageBubble";

const MessageTile = ({ activeConversation }) => {
  return (
    <div className="flex flex-col gap-4">
      {activeConversation.messages.map((message) => {
        const isCurrentUser = message.senderId === 0;

        return (
          <MessageBubble  key={message.messageId} message={message} isCurrentUser={isCurrentUser} />
        );
      })}
    </div>
  );
};
export default MessageTile;
