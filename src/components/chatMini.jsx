import { Search, Plus, Maximize2, ChevronDown } from "lucide-react";

const ChatMini = ({setIsChatExpanded}) => {
  const chats = [
    {
      name: "Alex Morgan",
      message: "Yo, are you building the UI today?",
      time: "6d",
    },
    {
      name: "Sarah Lee",
      message: "Let’s push the update tonight",
      time: "2h",
    },
    {
      name: "David Kim",
      message: "Check the new design system",
      time: "1d",
    },
    {
      name: "David Kim",
      message: "Check the new design system",
      time: "1d",
    },
    {
      name: "Alex Morgan",
      message: "Yo, are you building the UI today?",
      time: "6d",
    },

    {
      name: "David Kim",
      message: "Check the new design system",
      time: "1d",
    },


  ];

  return (
    <div className="w-100 max-w-md h-[500px] bg-black text-white border-l border-white/10 flex flex-col ">
      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-black border-b border-white/10 px-4 py-3 space-y-3">
        {/* Top row */}
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold">Chat</span>

            {/* Filter dropdown */}
            <button className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70 hover:border-white/40 transition">
              All
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition">
              <Plus size={16} />
            </button>

            <button className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition">
              <Maximize2 size={16} />
            </button>

            <button 
            onClick={() => setIsChatExpanded(false)}
            className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            type="text"
            placeholder="Search chats"
            className="
              w-full
              h-10
              rounded-full
              bg-white/3
              border border-white/10
              pl-10 pr-4
              text-sm
              placeholder:text-white/40
              outline-none
              focus:border-white/30
              transition
            "
          />
        </div>
      </div>

      {/* CHAT LIST */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {chats.map((chat, i) => (
          <div
            key={i}
            className="
              flex items-start gap-3
              px-4 py-3
              hover:bg-white/3
              transition
              relative
            "
          >
            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">
              {chat.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 border-b border-white/10 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{chat.name}</span>

                <span className="text-xs text-white/40">{chat.time}</span>
              </div>

              <span className="text-sm text-white/50 truncate block">
                {chat.message}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMini;
