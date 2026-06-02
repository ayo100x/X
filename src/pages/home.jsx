import { useState } from "react";
import Header from "../components/header";
import PostComposer from "../components/postComposer";
import PostCard from "../components/postCard";

const Home = () => {
  return (
    <div className="h-full flex flex-col bg-black text-white border-r border-white/10">
      <Header />
      <div className="overflow-y-auto hide-scrollbar ">
        <PostComposer />
        {[1, 2, 3, 4, 5].map((post, i) => {
          const hasQuote = i % 2 === 0;

          return <PostCard post={hasQuote ? {quote: { post_id: "ben" }} : {}} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
