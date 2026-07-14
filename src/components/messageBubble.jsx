const MessageBubble = ({ message, currentUser }) => {
  const isCurrentUser = message.user.userId === currentUser;
  return (
    <div
      className={`flex m-3 ${isCurrentUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[70%] rounded-full px-4 py-3 ${
          isCurrentUser ? "bg-[#1d9bf0]" : "bg-white/10"
        }`}
      >
        <span className="text-[15px] text-white wrap-break-word">
          {message.text}
        </span>
      </div>
    </div>
  );
};
export default MessageBubble;
