const UserCard = ({contact}) => {
  return (
    <div className=" bg-transparent hover:bg-white/3 transition-colors mx- mb-3">
      <div className="p-2 flex gap-4">
        <img
          src={contact.contactAvatar}
          alt=""
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />

        <div className="flex flex-col">
          <span className="text-[15px] font-semibold text-white">{contact.contactName}</span>
          <span className="mt-1 text-[15px] text-white/50">@{contact.contactUserName}</span>
        </div>
      </div>
    </div>
  );

};

export default UserCard;
