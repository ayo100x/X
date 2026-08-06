import { create } from "zustand";

export const useNewMessageModalStore = create((set) => ({
    showNewMessageModal: false,

    openNewMessageModal: () => {
        set({
            showNewMessageModal: true,
        })
    },

    closeNewMessageModal: () => {
        set({
            showNewMessageModal: false,
        })
    },



}))