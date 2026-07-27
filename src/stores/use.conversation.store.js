import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useConversationStore = create(
  persist((set, get) => ({
    conversations: [
      {
        userId: 1,
        name: "John Carter",
        userName: "johncarter",
        userAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
        messages: [
          {
            messageId: 1,
            text: "Hey, are you free today?",
            senderId: 1,
          },
          {
            messageId: 2,
            text: "Yeah, what's up?",
            senderId: 0,
          },

          {
            messageId: 3,
            text: "I wanted to ask about the project.",
            senderId: 1,
          },
          {
            messageId: 4,
            text: "Sure, how's it going?",
            senderId: 0,
          },
          {
            messageId: 5,
            text: "I'm almost done with the frontend.",
            senderId: 1,
          },
          {
            messageId: 6,
            text: "Nice! Did you finish the chat page?",
            senderId: 0,
          },
          {
            messageId: 7,
            text: "Yep, just adding a few animations.",
            senderId: 1,
          },
          {
            messageId: 8,
            text: "Can't wait to see it.",
            senderId: 0,
          },
          {
            messageId: 9,
            text: "I'll push the changes tonight.",
            senderId: 1,
          },
          {
            messageId: 10,
            text: "Perfect. I'll review them tomorrow morning.",
            senderId: 0,
          },
          {
            messageId: 11,
            text: "Sounds good 👍",
            senderId: 1,
          },
          {
            messageId: 12,
            text: "By the way, are we still meeting this weekend?",
            senderId: 0,
          },
          {
            messageId: 13,
            text: "Yeah, Saturday works for me.",
            senderId: 1,
          },
          {
            messageId: 14,
            text: "Awesome, let's grab lunch too.",
            senderId: 0,
          },
          {
            messageId: 15,
            text: "Deal! See you then 😄",
            senderId: 1,
          },
        ],
        lastText: "I am waiting for my package.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 2,
        name: "Emma Williams",
        userName: "emmaw",
        userAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
        messages: [],
        lastText: "Passed my exams!! 🎉",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 3,
        name: "Michael Brown",
        userName: "mikeb",
        userAvatar: "https://randomuser.me/api/portraits/men/35.jpg",
        messages: [],
        lastText: "Let's meet around 5pm.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 4,
        name: "Sophia Davis",
        userName: "sophia_d",
        userAvatar: "https://randomuser.me/api/portraits/women/41.jpg",
        messages: [],
        lastText: "I just got home.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 5,
        name: "Daniel Wilson",
        userName: "danielw",
        userAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
        messages: [],
        lastText: "Did you check the document?",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 6,
        name: "Olivia Johnson",
        userName: "livvy",
        userAvatar: "https://randomuser.me/api/portraits/women/15.jpg",
        messages: [],
        lastText: "😂😂 That was hilarious.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 7,
        name: "David Miller",
        userName: "davidm",
        userAvatar: "https://randomuser.me/api/portraits/men/61.jpg",
        messages: [],
        lastText: "Call me when you're free.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 8,
        name: "Ava Moore",
        userName: "ava_m",
        userAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
        messages: [],
        lastText: "The food was amazing!",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 9,
        name: "James Anderson",
        userName: "jamesa",
        userAvatar: "https://randomuser.me/api/portraits/men/74.jpg",
        messages: [],
        lastText: "I'm almost there.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 10,
        name: "Charlotte Thomas",
        userName: "charlotte",
        userAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
        messages: [],
        lastText: "Don't forget tomorrow.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 11,
        name: "Ethan Taylor",
        userName: "ethant",
        userAvatar: "https://randomuser.me/api/portraits/men/26.jpg",
        messages: [],
        lastText: "Can you send me the link?",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 12,
        name: "Mia Harris",
        userName: "mia_h",
        userAvatar: "https://randomuser.me/api/portraits/women/81.jpg",
        messages: [],
        lastText: "I'll text you later tonight.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 13,
        name: "Noah Martin",
        userName: "noahm",
        userAvatar: "https://randomuser.me/api/portraits/men/88.jpg",
        messages: [],
        lastText: "The meeting went really well.",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 14,
        name: "Isabella Garcia",
        userName: "bella_g",
        userAvatar: "https://randomuser.me/api/portraits/women/29.jpg",
        messages: [],
        lastText: "Thanks for checking in ❤️",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
      {
        userId: 15,
        name: "Liam Martinez",
        userName: "liamm",
        userAvatar: "https://randomuser.me/api/portraits/men/93.jpg",
        messages: [],
        lastText: "See you this weekend!",
        lastTextTime: "2026-06-28T08:55:00Z",
      },
    ],

    activeConversationId: null,
    setActiveConversationId: (conversationId) => {
      set({
        activeConversationId: conversationId,
      });
    },

    sendMessage: (data) => {
      // console.log(data.media)
      const { conversations, activeConversationId } = get();
      if (!activeConversationId || !data) return;

      if (data.media) {
        set({
          conversations: conversations.map((conversation) => {
            if (conversation.userId !== activeConversationId)
              return { ...conversation };
            const newMessage = {
              messageId: crypto.randomUUID(),
              text: null,
              media: data.media,
              senderId: 0,
            };

            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }),
        });
      }
      if (data.text) {
        set({
          conversations: conversations.map((conversation) => {
            if (conversation.userId !== activeConversationId)
              return { ...conversation };
            const newMessage = {
              messageId: crypto.randomUUID(),
              text: data.text,
              media: null,
              senderId: 0,
            };

            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }),
        });
      }
    },

    deleteMessageForMe: (messageId) => {
      console.log("called");
      const { activeConversationId, conversations } = get();
      if (activeConversationId === null || messageId === null) return;
      set({
        conversations: conversations.map((conversation) => {
          if (conversation.userId !== activeConversationId) return conversation;
          console.log("found active conversation");
          console.log("Before: ",
            (conversation.messages.filter(
              (message) => message.messageId !== messageId,
            )).length,
          );
          console.log("After: ",
            (conversation.messages.filter(
              (message) => message.messageId !== messageId,
            )).length,
          );
          console.log("Deleting:", messageId);
          return {
            ...conversation,
            messages: conversation.messages.filter(
              (message) => message.messageId !== messageId,
            ),
          };
        }),
      });
    },

    name: "conversations-storage",
  })),
);
