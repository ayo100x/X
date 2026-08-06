import { Search } from "lucide-react";
import BookmarkHeader from "../components/bookmarkHeader";
import { usePostStore } from "../stores/post.store";
import PostCard from "../components/postCard";

const Bookmarks = () => {
  const { posts, user } = usePostStore();

  return (
    <div className="h-full relative flex flex-col">
      <BookmarkHeader />
      {/* body */}
      <div className="h-full overflow-y-auto custom-scrollbar">
        {/* searchbar */}
        <div className="flex gap-3 items-center shrink-0  h-10 m-4 rounded-full border border-white/10 text-sm text-white placeholder:text-white/40 focus-within:border-white/40  focus-within:ring-white/30 focus-within:ring-1 bg-black ">
          <Search className="size-4.5 text-white/40 ml-3" />
          <input
            placeholder="Search Bookmarks"
            className="border-none outline-none w-full"
          />
        </div>
        {posts
          .filter(
            (post) =>
              post.replyId === null && post.bookmarks.includes(user.userId),
          )
          .map((post) => (
            <PostCard key={post.postId} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Bookmarks;
