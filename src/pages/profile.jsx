import PostCard from "../components/postCard";
import ProfileHeader from "../components/profileHeader";
import { usePostStore } from "../stores/post.store";
import ProfileHero from "./profileHero";
import ProfileTabs from "./profileTabs";
import { user } from "../stores/user.store";
import { useState } from "react";
import EditProfile from "../components/editProfile";

const Profile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const { posts } = usePostStore();
  

  return (
    <div
      className="h-full relative flex flex-col "
    >
      <ProfileHeader user={user} />
      <div className="overflow-y-auto custom-scrollbar">
        <ProfileHero user={user} setShowEditProfile={setShowEditProfile} />
        <ProfileTabs user={user} />
        {posts
          .filter((post) => post.replyId === null)
          .map((post) => (
            <PostCard key={post.postId} post={post} />
          ))}
      </div>
      {showEditProfile && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center py-12">
          <EditProfile user={user} setShowEditProfile={setShowEditProfile}/>
        </div>
      )}
    </div>
  );
};

export default Profile;
