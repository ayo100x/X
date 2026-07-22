import { Search, User, Users, X } from "lucide-react";
import { useNewMessageModalStore } from "../stores/useNewMessageModalStore";
import UserCard from "./userCard";
import { useState } from "react";
import { useContactStore } from "../stores/use.contact.store";

const NewMessageModal = () => {
  const closeNewMessageModal = useNewMessageModalStore(
    (state) => state.closeNewMessageModal,
  );

  const contacts = useContactStore((state) => state.contacts);


  return (
    <div className="w-full max-w-[600px] h-fit max-h-[90vh] flex flex-col bg-[rgb(20,20,20)] text-white rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mx-5 mt-4 mb-5">
        <span className="text-[20px] font-bold">New message</span>

        <button
          onClick={closeNewMessageModal}
          className="size-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="mx-5">
        <div className="flex items-center h-11 rounded-full bg-[#202327] border border-transparent focus-within:border-[#1d9bf0] transition-colors">
          <Search className="ml-4 mr-3 size-[18px] text-white/40 shrink-0" />

          <input
            type="text"
            placeholder="Search people"
            className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-white/40"
          />
        </div>
      </div>

      {/* Create Group */}
      <button className="flex items-center mx-5 mt-4 mb-3 rounded-2xl hover:bg-white/[0.04] transition-colors">
        <div className="flex items-center justify-center ml-3 size-11 rounded-full bg-[#1d9bf0]">
          <Users size={20} />
        </div>

        <span className="ml-4 text-[15px] font-semibold text-[#1d9bf0]">
          Create a group
        </span>
      </button>

      {/* List of users to start new chat with */}

      <div className="mt-4 mx-5 overflow-y-auto custom-scrollbar">
        {contacts.map((contact) => <UserCard key={contact.contactId} contact={contact}/>)}
      </div>
    </div>
  );
};

export default NewMessageModal;
