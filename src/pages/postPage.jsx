import { ArrowLeft } from "lucide-react";
import PostCard from "../components/postCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostDetailsCard from "../components/postDetailsCard";
import PostDetailsCard2 from "../components/PostDetailsCard2";
import CommentCard from "../components/commentCard";
import { useEffect, useState } from "react";
import { get_post_comment, get_post_detail } from "../../services/post.services";
import { usePostStore } from "../stores/post.store";

// POST PAGE - SHOWS A POST DETAILS AND REPLIES/COMMENT OF THE POST.
// USERS CAN ALSO CREATE COMMENT

const PostPage = () => {
  const { id } = useParams();
  const postId = Number(id);

  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  const posts = usePostStore((state) => state.posts)

  const getComments = async () => {

    const response = await get_post_comment(postId);
    // console.log(response);  
    setComments(response);
  };

  // console.log(comments);

  const getPost = async () => {
    const response = await get_post_detail(postId);
    
    setPost(response);
  };

  useEffect(() => {
    getPost();
    getComments();
  }, [postId, posts]);
  
  return (
    <div className="h-full flex flex-col ">
      <div className="flex gap-15 text-xl font-semibold h-10 ml-6 mt-2">
        
        <button onClick={() => {navigate(-1)}}>
          <ArrowLeft className="size-6" />
        </button>
        <span>Post</span>
      </div>
      <div className="overflow-y-auto hide-scrollbar h-screen">
        
        {post?.replyId && <PostDetailsCard2 post={post} /> || post && <PostDetailsCard post={post} /> }

        {comments.map((comment) => {

          return <PostCard key={comment.postId} post={comment}/>
        })}
      </div>
    </div>
  );
};

export default PostPage;
