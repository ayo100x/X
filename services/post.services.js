import { usePostStore } from "../src/stores/post.store";

export const get_following_post = () => {
  return usePostStore.getState().posts;
};

export const get_post_detail = (postId) => {
  return usePostStore.getState().posts.find((post) => post.postId === Number(postId));    
};

export const get_post_comment = (postId) => {

  const {posts} = usePostStore.getState();
  const comments = posts.filter((post) => post.replyId === postId);
  return comments;

};