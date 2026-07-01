import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePostStore = create(
  persist((set, get) => ({
    posts: [
      {
        postId: 1,
        postText:
          "Building side projects consistently beats waiting for the perfect idea.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [2, 4],
        replyId: null,
        likes: [1, 3, 5, 7],
        views: "1.2k",
        comments: [],
        createdAt: "2026-06-05T09:12:00Z",
        user: {
          userId: 1,
          name: "Sarah Johnson",
          userName: "sarahj",
          userIcon: "https://i.pravatar.cc/150?img=5",
        },
      },
      {
        postId: 2,
        postText:
          "Finally tried keyboard-driven navigation everywhere. Huge productivity boost.",
        postMedia: ["https://picsum.photos/800/500?random=1"],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 4],
        views: "2.8k",
        comments: [],
        createdAt: "2026-06-05T11:30:00Z",
        user: {
          userId: 2,
          name: "David Wilson",
          userName: "davidw",
          userIcon: "https://i.pravatar.cc/150?img=12",
        },
      },
      {
        postId: 3,
        postText: "Frontend performance is underrated in most projects.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 2, 4],
        views: "3.8k",
        comments: [],
        createdAt: "2026-06-06T08:10:00Z",
        user: {
          userId: 3,
          name: "Michael Brown",
          userName: "mikebrown",
          userIcon: "https://i.pravatar.cc/150?img=15",
        },
      },
      {
        postId: 4,
        postText: "The best debugging sessions happen after a short walk.",
        postMedia: [
          "https://picsum.photos/800/500?random=2",
          "https://picsum.photos/800/500?random=3",
        ],
        quoteId: null,
        quote: [],
        repost: [1],
        replyId: null,
        likes: [3, 6, 7],
        views: "4.1k",
        comments: [],
        createdAt: "2026-06-06T12:44:00Z",
        user: {
          userId: 4,
          name: "Emily Davis",
          userName: "emilyd",
          userIcon: "https://i.pravatar.cc/150?img=20",
        },
      },
      {
        postId: 5,
        postText: "Design systems save more time than people realize.",
        postMedia: [],
        quoteId: 9,
        quote: [],
        repost: [2, 3],
        replyId: null,
        likes: [2, 4, 6],
        views: "5.3k",
        comments: [],
        createdAt: "2026-06-06T15:22:00Z",
        user: {
          userId: 5,
          name: "James Miller",
          userName: "jamesm",
          userIcon: "https://i.pravatar.cc/150?img=18",
        },
      },
      {
        postId: 6,
        postText: "Animations should guide users, not distract them.",
        postMedia: [
          "https://picsum.photos/800/500?random=4",
          "https://picsum.photos/800/500?random=5",
          "https://picsum.photos/800/500?random=6",
        ],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 5],
        views: "2.2k",
        comments: [],
        createdAt: "2026-06-07T07:10:00Z",
        user: {
          userId: 6,
          name: "Sophia Martinez",
          userName: "sophiam",
          userIcon: "https://i.pravatar.cc/150?img=30",
        },
      },
      {
        postId: 7,
        postText: "Nothing beats shipping features and learning from users.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [1, 2, 5],
        replyId: null,
        likes: [1, 2],
        views: "1.8k",
        comments: [],
        createdAt: "2026-06-07T10:15:00Z",
        user: {
          userId: 7,
          name: "Daniel Moore",
          userName: "danmoore",
          userIcon: "https://i.pravatar.cc/150?img=25",
        },
      },
      {
        postId: 8,
        postText:
          "I still think good naming is one of the hardest problems in programming.",
        postMedia: ["https://picsum.photos/800/500?random=7"],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 3, 7],
        views: "6.4k",
        comments: [],
        createdAt: "2026-06-07T13:09:00Z",
        user: {
          userId: 8,
          name: "Olivia Taylor",
          userName: "oliviat",
          userIcon: "https://i.pravatar.cc/150?img=32",
        },
      },
      {
        postId: 9,
        postText: "Coffee and dark mode continue to carry my entire career.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [4],
        replyId: null,
        likes: [2, 4],
        views: "8.1k",
        comments: [],
        createdAt: "2026-06-07T16:20:00Z",
        user: {
          userId: 9,
          name: "Ethan Anderson",
          userName: "ethana",
          userIcon: "https://i.pravatar.cc/150?img=40",
        },
      },
      {
        postId: 10,
        postText: "Spent today refactoring old code and honestly enjoyed it.",
        postMedia: [
          "https://picsum.photos/800/500?random=8",
          "https://picsum.photos/800/500?random=9",
          "https://picsum.photos/800/500?random=10",
          "https://picsum.photos/800/500?random=11",
        ],
        quoteId: 13,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 2, 3, 4, 5],
        views: "12.6k",
        comments: [],
        createdAt: "2026-06-08T09:55:00Z",
        user: {
          userId: 10,
          name: "Grace Thomas",
          userName: "gracethomas",
          userIcon: "https://i.pravatar.cc/150?img=45",
        },
      },

      {
        postId: 11,
        postText: "CSS is fun until one element refuses to align.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 4],
        views: "3.3k",
        comments: [],
        createdAt: "2026-06-08T12:00:00Z",
        user: {
          userId: 11,
          name: "Benjamin Lee",
          userName: "benlee",
          userIcon: "https://i.pravatar.cc/150?img=47",
        },
      },

      {
        postId: 12,
        postText: "Learning by building has never failed me.",
        postMedia: ["https://picsum.photos/800/500?random=12"],
        quoteId: null,
        quote: [],
        repost: [2],
        replyId: null,
        likes: [1, 2, 5],
        views: "4.8k",
        comments: [],
        createdAt: "2026-06-08T15:22:00Z",
        user: {
          userId: 12,
          name: "Ava White",
          userName: "avawhite",
          userIcon: "https://i.pravatar.cc/150?img=50",
        },
      },

      {
        postId: 13,
        postText:
          "The smaller the feature, the more edge cases it seems to have.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [3, 4],
        views: "2.1k",
        comments: [],
        createdAt: "2026-06-08T18:30:00Z",
        user: {
          userId: 13,
          name: "Henry Clark",
          userName: "henryc",
          userIcon: "https://i.pravatar.cc/150?img=53",
        },
      },

      {
        postId: 14,
        postText:
          "I need more apps that prioritize speed over endless features.",
        postMedia: [
          "https://picsum.photos/800/500?random=13",
          "https://picsum.photos/800/500?random=14",
        ],
        quoteId: null,
        quote: [],
        repost: [1],
        replyId: null,
        likes: [1, 6],
        views: "7.9k",
        comments: [],
        createdAt: "2026-06-09T08:11:00Z",
        user: {
          userId: 14,
          name: "Charlotte Hall",
          userName: "charhall",
          userIcon: "https://i.pravatar.cc/150?img=56",
        },
      },

      {
        postId: 15,
        postText: "Small wins every day eventually become massive progress.",
        postMedia: [],
        quoteId: 7,
        quote: [],
        repost: [2, 3],
        replyId: null,
        likes: [2, 4, 5],
        views: "1.7k",
        comments: [],
        createdAt: "2026-06-09T11:00:00Z",
        user: {
          userId: 15,
          name: "Lucas Young",
          userName: "lucasy",
          userIcon: "https://i.pravatar.cc/150?img=58",
        },
      },

      {
        postId: 16,
        postText: "I love finding tiny ways to improve developer experience.",
        postMedia: [
          "https://picsum.photos/800/500?random=15",
          "https://picsum.photos/800/500?random=16",
          "https://picsum.photos/800/500?random=17",
        ],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 2, 4],
        views: "9.4k",
        comments: [],
        createdAt: "2026-06-09T14:45:00Z",
        user: {
          userId: 16,
          name: "Amelia Harris",
          userName: "ameliah",
          userIcon: "https://i.pravatar.cc/150?img=60",
        },
      },

      {
        postId: 17,
        postText: "A clean UI always feels faster.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [1],
        replyId: null,
        likes: [1, 3],
        views: "2.6k",
        comments: [],
        createdAt: "2026-06-09T17:33:00Z",
        user: {
          userId: 17,
          name: "Alexander Lewis",
          userName: "alexlewis",
          userIcon: "https://i.pravatar.cc/150?img=63",
        },
      },

      {
        postId: 18,
        postText: "Just spent two hours chasing a missing semicolon.",
        postMedia: ["https://picsum.photos/800/500?random=18"],
        quoteId: 2,
        quote: [],
        repost: [],
        replyId: null,
        likes: [2, 4, 6],
        views: "11.3k",
        comments: [],
        createdAt: "2026-06-09T20:02:00Z",
        user: {
          userId: 18,
          name: "Mia Walker",
          userName: "miawalker",
          userIcon: "https://i.pravatar.cc/150?img=65",
        },
      },

      {
        postId: 19,
        postText: "Consistency is more important than intensity.",
        postMedia: [],
        quoteId: null,
        quote: [],
        repost: [],
        replyId: null,
        likes: [1, 2],
        views: "2.9k",
        comments: [],
        createdAt: "2026-06-10T09:08:00Z",
        user: {
          userId: 19,
          name: "William Scott",
          userName: "willscott",
          userIcon: "https://i.pravatar.cc/150?img=68",
        },
      },

      {
        postId: 20,
        postText: "I really enjoy building products from scratch.",
        postMedia: [
          "https://picsum.photos/800/500?random=19",
          "https://picsum.photos/800/500?random=20",
          "https://picsum.photos/800/500?random=21",
          "https://picsum.photos/800/500?random=22",
        ],
        quoteId: null,
        quote: [],
        repost: [2],
        replyId: null,
        likes: [1, 2, 3, 5],
        views: "15.7k",
        comments: [],
        createdAt: "2026-06-10T13:50:00Z",
        user: {
          userId: 20,
          name: "Harper King",
          userName: "harperk",
          userIcon: "https://i.pravatar.cc/150?img=70",
        },
      },
    ],

    user: {
      userId: 1,
      name: "ayo",
      userName: "ayomide",
      userIcon: "https://i.pravatar.cc/150?img=48",
    },

    create_post: (postData) => {
      const { user, posts } = get(); // get list of post from zustand
      if (!postData.postText && !postData.postMedia) {
        // show error toast // Enter a text
        return;
      }

      // generate id
      const postId = Date.now();

      const newPost = {
        postId: postId,
        postText: postData.postText,
        postMedia: postData.postMedia ?? [],
        quoteId: postData?.quoteId,
        repost: [],
        quote: [],
        replyId: postData?.replyId ?? null,
        likes: [],
        views: "0",
        comments: [],
        createdAt: new Date().toISOString(),
        user: {
          userId: user.userId,
          name: user.name,
          userName: user.userName,
          userIcon: user.userIcon,
        },
      };

      set((state) => ({
        posts: [newPost, ...state.posts],
      }));

      // if postData.quoteId => find a (post) with post.postId == postData.quoteId and store the postId under quote[]
      if (postData?.quoteId) {
        set((state) => ({
          posts: state.posts.map((p) =>
            p.postId === postData.quoteId
              ? { ...p, quote: [...p.quote, postId] }
              : p,
          ),
        }));
      }

      // if postData.replyId => find a (post) with post.postId == postData.replyId and store the postId under comments[]
      if (postData?.replyId) {
        set((state) => ({
          posts: state.posts.map((p) =>
            p.postId === postData.replyId
              ? { ...p, comments: [...p.comments, postId] }
              : p,
          ),
        }));
      }
    },
    name: "post-storage",

    repost: (postId) => {
      const { user, posts } = get();

      const updatedPosts = posts.map((post) => {
        if (post.postId !== postId) return post;

        const hasReposted = post.repost.includes(user.userId);
        if (hasReposted) {
          return {
            ...post,
            repost: post.repost.filter((id) => id !== user.userId),
          };
        }

        return {
          ...post,
          repost: [...post.repost, user.userId],
        };
      });

      set({ posts: updatedPosts });
    },

    likePost: (postId) => {
      const { user, posts } = get();
      const updatedPosts = posts.map((post) => {
        if (post.postId !== postId) return post;

        const hasLiked = post.likes.includes(user.userId);
        if (hasLiked) {
          return {
            ...post,
            likes: post.likes.filter((id) => id !== user.userId),
          };
        }
        return {
          ...post,
          likes: [...post.likes, user.userId],
        };
      });

      set({ posts: updatedPosts });
    },
  })),
);
