import { create } from "zustand";

export const useUserChatProfileStore = create((set) => ({
    userChatProfile: false,
    setUserChatProfile: () => {
        set({
            userChatProfile: true
        })
    },
    closeUserChatProfile: () => {
        set({
            userChatProfile: false
        })
    }
}))