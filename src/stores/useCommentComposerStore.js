import { create } from "zustand";

export const useCommentComposerStore = create((set) => ({
    showCommentComposer: false,
    activePost: null,

    openCommentComposer: (post) => {
        set({
            activePost: post,
            showCommentComposer: true,
        })
    },

    closeCommentComposer: () => {
        set({
            activePost: null,
            showCommentComposer: false,
        })
    }

}))