import {
  Book,
  ChevronDown,
  MessageCirclePlus,
  Search,
  Settings,
} from "lucide-react";
import ContactCard from "./ConversationCard";
import ConversationCard from "./ConversationCard";
import { useConversationStore } from "../stores/use.conversation.store";


const ConversationList = () => {
  const conversations = useConversationStore((state) => state.conversations)

  return (
    <div className="h-screen w-full flex flex-col bg-black text-white border-r border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-black">
        {/*chat  */}
        <span className="text-[22px] font-bold tracking-tight text-white">
          Chat
        </span>

        {/* buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-1 h-9 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors duration-200">
            <span className="text-[15px] font-medium text-white">All</span>
            <ChevronDown size={20} className="text-white" />
          </button>

          <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors duration-200 border border-white/10">
            <Book size={20} className="text-white" />
          </button>

          <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors duration-200 border border-white/10">
            <MessageCirclePlus size={20} className="text-white" />
          </button>
        </div>
      </div>
      {/* SEARCHBAR */}
      <div className="flex justify-center px-5 py-4 bg-black">
        <div className="w-full h-13 rounded-full bg-[#202327] border border-transparent flex justify-center items-center cursor-text">
          <div className="flex items-center gap-2">
            <Search className="size-4.5 text-white/40" />

            <input
              type="text"
              placeholder="Search"
              className="w-20 bg-transparent outline-none text-white placeholder:text-white/40"
            />
          </div>
        </div>
      </div>

      {/* Chats */}
      <div className="overflow-y-auto custom-scrollbar">
        {conversations.map((conversation) => (
          <ConversationCard key={conversation.userId} conversation={conversation} />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
