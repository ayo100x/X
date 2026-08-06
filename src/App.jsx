import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./components/sideBar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Notifications from "./pages/notifications";
import Bookmarks from "./pages/bookmarks";
import Explore from "./pages/explore";
import ChatPage from "./pages/chatPage";
import RightPanel from "./components/rightPanel";
import PostPage from "./pages/postPage";
import { MessageCircle } from "lucide-react";
import FloatingButtons from "./components/floatingButtons";
import AiMiniChat from "./components/aiMiniChat";
import ChatMini from "./components/chatMini";
import { useRef } from "react";
import { useCommentComposerStore } from "./stores/useCommentComposerStore";
import CommentComposer from "./components/commentComposer";
import { usePostStore } from "./stores/post.store";
import QuoteComposer from "./components/quoteComposer";
import { useQuoteComposerStore } from "./stores/useQuoteComposerStore";
import { useNewMessageModalStore } from "./stores/useNewMessageModalStore";
import NewMessageModal from "./components/newMessageModal";

function App() {
  const scrollRef = useRef(null);
  const showCommentComposer = useCommentComposerStore(
    (state) => state.showCommentComposer,
  );
  const closeCommentComposer = useCommentComposerStore(
    (state) => state.closeCommentComposer,
  );
  const activeReplyPost = useCommentComposerStore((state) => state.activePost);

  const showQuoteComposer = useQuoteComposerStore(
    (state) => state.showQuoteComposer,
  );
  const closeQuoteComposer = useQuoteComposerStore(
    (state) => state.closeQuoteComposer,
  );
  const activeQuotePost = useQuoteComposerStore((state) => state.activePost);

  const location = useLocation();

  const isChatPage = location.pathname.startsWith("/chatPage");

  return (
    <div className="bg-black relative">
      <div
        className={`flex h-screen overflow-hidden ${
          isChatPage
            ? "w-full max-w-[1800px] mx-auto px-25"
            : "max-w-fit mx-auto"
        }`}
      >
        <SideBar scrollRef={scrollRef} isChatPage={isChatPage} />

        {/* Main Content Area */}
        <div className="flex flex-1 min-w-0">
          {/* Page */}
          <div
            className={`text-white border-r border-white/10 ${
              isChatPage ? "flex-1" : "w-150"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home scrollRef={scrollRef} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/chatPage" element={<ChatPage />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Routes>
          </div>

          {/* Right Panel */}
          {!isChatPage && <RightPanel />}
        </div>
      </div>

      {!isChatPage && <FloatingButtons />}
      {showCommentComposer && activeReplyPost && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center py-12">
          <CommentComposer post={activeReplyPost} />
        </div>
      )}
      {showQuoteComposer && activeQuotePost && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center py-12">
          <QuoteComposer post={activeQuotePost} />
        </div>
      )}

    </div>
  );
}

export default App;
