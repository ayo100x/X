import { ArrowLeft } from "lucide-react";
import PostCard from "../components/postCard";
import { Link } from "react-router-dom";
import PostDetailsCard from "../components/postDetailsCard";
import ThreadView from "../components/threadView";

const PostPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex gap-15 text-xl font-semibold h-15 ml-5 mt-2">
        <Link to={"/"} > < ArrowLeft className="size-6"/> </Link>
        <span>Post</span>
      </div>
      <div className="overflow-y-auto hide-scrollbar ">
        {/* <PostDetailsCard /> */}
        <ThreadView />
      </div>
    </div>
  );
};

export default PostPage;
