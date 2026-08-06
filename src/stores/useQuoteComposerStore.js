import { create } from "zustand";

export const useQuoteComposerStore = create((set) => ({
    showQuoteComposerStore: false,
    activePost: null,

    openQuoteComposer: (post) => {
        set({
            activePost: post,
            showQuoteComposer: true,
        })
    },

    closeQuoteComposer: () => {
        set({
            activePost: null,
            showQuoteComposer: false,
        })
    }

}))