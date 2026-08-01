const UserFollowCard = ({ user }) => {
  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex justify-between m-2 mb-0">
        <div className="flex items-center gap-2">
          {/* avatar */}
          <div className="size-10 rounded-full flex items-center justify-center">
            <img src={user.userAvatar} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white">{user.name}</span>
            <span className="text-white/40">@{user.userName}</span>
          </div>
        </div>

        <button className="h-7 px-4 rounded-full bg-white hover:bg-white/90 transition-colors mt-2">
          <span className="text-[15px] font-bold text-black">Follow</span>
        </button>
      </div>
      <div className="w-full flex gap-2">
        <div className="w-12"/>
        <span>{user.about}</span>
      </div>
      
    </div>
  );
};

export default UserFollowCard;
