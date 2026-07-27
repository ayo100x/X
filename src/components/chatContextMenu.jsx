import { CopyPlus, Flag, Forward, Info, MessageCircle, Trash2 } from "lucide-react";
import { useConversationStore } from "../stores/use.conversation.store";

const ChatContextMenu = ({messageId,}) => {
  const {deleteMessageForMe, conversations, activeConversationId} = useConversationStore();
  const actions = [
    {
      icon: MessageCircle,
      label: "Reply",
      onClick: () => {},
    },
    {
      icon: Forward,
      label: "Forward",
      onClick: () => {},
    },
    {
      icon: CopyPlus,
      label: "Copy message text",
      onClick: () => {},
    },
    {
      icon: Info,
      label: "Info",
      onClick: () => {},
    },
    {
      icon: Flag,
      label: "Report Message",
      onClick: () => {},
    },
    {
      icon: Trash2,
      label: "Delete for me",
      onClick: () => {deleteMessageForMe(messageId)},
    },
  ];


  return (
    <div className="w-50 overflow-hidden rounded-t-2xl rounded-b-2xl border border-white/10 bg-[rgb(20,20,20)]  shadow-2xl">
      {actions.map(({ icon: Icon, label, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className="flex w-full items-center gap-4 px-4 py-3 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/5"
        >
          <Icon
            size={20}
            strokeWidth={2.2}
            className="shrink-0 text-white"
          />

          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ChatContextMenu;