import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Notifications from "./pages/notifications";
import Bookmarks from "./pages/bookmarks";
import Explore from "./pages/explore";
import Chat from "./pages/chat";
import RightPanel from "./components/rightPanel";
import PostPage from "./pages/postPage";
import { MessageCircle } from "lucide-react";
import FloatingButtons from "./components/floatingButtons";
import AiMiniChat from "./components/aiMiniChat";
import ChatMini from "./components/chatMini";

function App() {
  return (
    <div className="bg-black relative">
      <div className="flex h-screen max-w-fit mx-35  overflow-hidden">
        <SideBar />

        {/* Main Content Area */}
        <div className="flex flex-1 min-w-0">
          {/* Page */}
          <div className="w-ful w-[600px]  text-white border-r border-white/10">
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/postPage" element={<PostPage/>} />
            </Routes>
          </div>

          {/* Right Panel */}
          <RightPanel />
        </div>
      </div>


      <FloatingButtons />
      
    </div>
  );
}

export default App;
