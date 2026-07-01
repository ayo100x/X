import { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import PostComposer from "../components/postComposer";
import PostCard from "../components/postCard";
import { get_following_post } from "../../services/post.services";
import { usePostStore } from "../stores/post.store";
import CommentComposer from "../components/commentComposer";

const Home = ({ scrollRef }) => {
  const posts = usePostStore((state) => state.posts);

  useEffect(() => {
    const saved = sessionStorage.getItem("home-scroll");

    if (!saved) return;

    const el = scrollRef.current;

    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollTop = Number(saved);
    });
  }, [posts]);

  useEffect(() => {
    const el = scrollRef.current;

    const saveScroll = () => {
      sessionStorage.setItem("home-scroll", el.scrollTop);
    };

    el?.addEventListener("scroll", saveScroll);

    return () => {
      el?.removeEventListener("scroll", saveScroll);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-black text-white border-r border-white/10">
      <Header />
      <div ref={scrollRef} className="flex-1 overflow-y-auto hide-scrollbar ">
        <PostComposer />
        {posts
          .filter((post) => post.replyId === null)
          .map((post) => (
            <PostCard key={post.postId} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Home;
