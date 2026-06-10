import { posts } from "../src/stores/post.store";
import { user } from "../src/stores/user.store";

export const get_following_post = () => {
  // logic

  return posts;
};

export const get_post_detail = (postId) => {
  const post = posts.find((post) => post.postId == postId);
  return post;
};

export const get_post_comment = (postId) => {
  const comments = posts.filter((post) => post.replyId == postId);
  return comments;
};

// POST DATA
// {
//     postText, // string
//     quoteId, // number?
//     replyId, // number?
// }
export const create_post = (postData) => {
  const auth_user = user; // global user

  if (!postData.postText && !postData.postMedia) {
    // show error toast // Enter a text
    return;
  }

  // generate id
  const postId = 40;

  const newPost = {
    postId: postId,
    postText: postData.postText,
    postMedia: postData.postMedia ?? [],
    quoteId: postData.quoteId,
    repost: [],
    quote: [],
    replyId: postData.replyId,
    likes: 0,
    views: "0",
    comments: [],
    createdAt: new Date().toISOString(),
    user: {
      userId: auth_user.userId,
      name: auth_user.name,
      userName: auth_user.userName,
      userIcon: auth_user.userIcon,
    },
  };

  if (postData.quoteId) {
    const quote_post = posts.findIndex(
      (post) => post.postId === postData.quoteId,
    );
    if (quote_post == -1) {
      return;
    }
  }

  posts.push(newPost);

  // if postData.quoteId => find a (post) with post.postId == postData.quoteId and store the postId under quote[]
  if (postData.quoteId) {
    const quote_post = posts.findIndex(
      (post) => post.postId === postData.quoteId,
    );

    if (quote_post != -1) {
      const old_post = posts[quote_post];
      const old_quote = old_post.quote;
      posts[quote_post] = { ...old_post, quote: [...old_quote, postId] };
    }
  }

  // if postData.replyId => find a (post) with post.postId == postData.replyId and store the postId under comments[]
  if (postData.replyId) {
    const repliedPost = posts.findIndex((post) => {
      post.postId === postData.replyId;
    });
    if (repliedPost != -1) {
      posts[repliedPost] = {
        ...post[repliedPost],
        comments: [...posts[repliedPost].comments, postId],
      };
    }
  }
};

// if postData.repostId => find a (post) with post.postId == postData.repostId and store the userId under repost[]

const repost = (postId) => {
  // get user re posting
  const auth_user = user;

  // check if post exists
  const postToRepost = posts.findIndex((post) => post.postId === postId);

  posts[postToRepost] = {
    ...posts[postToRepost],
    repost: [...posts[postToRepost].repost, auth_user.userId],
  };
};
