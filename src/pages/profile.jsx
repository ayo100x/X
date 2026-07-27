import PostCard from "../components/postCard";
import ProfileHeader from "../components/profileHeader";
import { usePostStore } from "../stores/post.store";
import ProfileHero from "./profileHero";
import ProfileTabs from "./profileTabs";
import { user } from "../stores/user.store";


const Profile = () => {
  const {posts} = usePostStore();
  return (
    <div className="h-full flex flex-col ">
      <ProfileHeader user={user}/>
      <div className="overflow-y-auto custom-scrollbar">
        <ProfileHero user={user} />
        <ProfileTabs user={user} />
        {posts
          .filter((post) => post.replyId === null)
          .map((post) => (
            <PostCard key={post.postId} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Profile;
