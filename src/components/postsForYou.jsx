import { usePostStore } from "../stores/post.store";
import PostCard from "../components/postCard";

const PostsForYou = () => {
  const { posts } = usePostStore();
  return (
    <div className="flex flex-col border-t border-white/10 ">
      <span className="text-[23px] font-medium text-white m-3">
        Posts for you
      </span>
      {posts
        .filter((post) => post.replyId === null)
        .map((post) => (
          <PostCard key={post.postId} post={post} />
        ))}
    </div>
  );
};

export default PostsForYou;
