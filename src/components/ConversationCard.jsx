import { useConversationStore } from "../stores/use.conversation.store";
import {formatRelativeTime,} from "../utils/helpers";

const ConversationCard = ({conversation}) => {

  const setActiveConversationId = useConversationStore((state) => state.setActiveConversationId)

  const handleConversationClick = () => {
    setActiveConversationId(conversation?.userId)
  }
  return (
    <div 
      onClick={handleConversationClick}
      className="w-full bg-black text-white overflow-hidden hover:bg-white/10 transition-colors duration-200 cursor-pointer">
      <div className="flex gap-3 px-4 mt-5 ">
        {/* Avatar */}
        <img
          src={conversation?.userAvatar}
          alt=""
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />

        {/* Chat content */}
        <div className="flex-1 min-w-0 pb-3 border-b border-white/10 ">
          {/* User Name and Time */}
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-semibold text-white">{conversation?.name}</span>

            <span className="text-[13px] text-white/45">{formatRelativeTime(conversation?.lastTextTime)}</span>
          </div>

          {/* Last message */}
          <p className="mt-1 text-[15px] text-white/50 truncate">
            {conversation?.lastText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
