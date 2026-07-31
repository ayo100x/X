import {
  Smile,
  UserX,
  NotebookTabs,
  VolumeX,
  CircleSlash,
  BarChart3,
  Code2,
  Flag,
  Megaphone,
} from "lucide-react";
import { useState } from "react";

const MorePostAction = ({ post }) => {
  const actions = [
    {
      icon: Smile,
      label: "Not interested in this post",
      onClick: () => {},
    },
    {
      icon: UserX,
      label: `Unfollow @${post?.user?.userName}`,
      onClick: () => {},
    },
    {
      icon: NotebookTabs,
      label: "Add/remove from Lists",
      onClick: () => {},
    },
    {
      icon: VolumeX,
      label: "Mute",
      onClick: () => {},
    },
    {
      icon: CircleSlash,
      label: `Block @${post?.user?.userName}`,
      onClick: () => {},
    },
    {
      icon: BarChart3,
      label: "View post activity",
      onClick: () => {},
    },
    {
      icon: Code2,
      label: "Embed post",
      onClick: () => {},
    },
    {
      icon: Flag,
      label: "Report post",
      onClick: () => {},
    },
    {
      icon: Megaphone,
      label: "Request Community Note",
      onClick: () => {},
    },
  ];

  return (
    <div className="w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[rgb(20,20,20)] py-2 shadow-2xl">
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

export default MorePostAction;