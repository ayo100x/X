const MessageBubble = ({ message }) => {
  const isCurrentUser = message.senderId === 0;
  // console.log(message.media)
  
  return (
    <div
      className={`flex m-1 ${isCurrentUser ? "justify-end" : "justify-start"}`}
    >
      {message.media && (
        <div className="max-w-[70%] rounded-full">
          <img src={message.media} alt="" className="w-100 h-fit rounded-3xl border-white/10 border" />
        </div>
      )}
      {message.text && (
        <div
          className={`max-w-[70%] rounded-full px-4 py-2 ${
            isCurrentUser ? "bg-[#1d9bf0]" : "bg-white/10"
          }`}
        >
          <span className="text-[15px] text-white wrap-break-word">
            {message.text}
          </span>
        </div>
      )}
    </div>
  );
};
export default MessageBubble;
