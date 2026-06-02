import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  Bookmark,
  User,
  MoreHorizontal,
  PenSquare,
  LogOut,
  MessageCircle,
} from "lucide-react";

const links = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Chat",
    icon: MessageCircle,
    path: "/chat",
  },
  {
    label: "Explore",
    icon: Search,
    path: "/explore",
  },
  {
    label: "Notifications",
    icon: Bell,
    path: "/notifications",
  },
  {
    label: "Bookmarks",
    icon: Bookmark,
    path: "/bookmarks",
  },
  {
    label: "Profile",
    icon: User,
    path: "/profile",
  },
];

function SideBar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="h-screen bg-black border-r border-white/10 flex flex-col text-white w-30 lg:w-80 transition-all duration-300">
      
      {/* Logo */}
      <div className="h-16 flex items-center justify-center lg:justify-start px-4 lg:px-6">
        <Link
          to="/"
          className="w-10 h-10 rounded-2xl text-white flex items-center justify-center font-black text-xl"
        >
          x.
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 lg:px-4 py-4 flex flex-col items-center lg:items-stretch">
        <nav className="space-y-4 w-full flex flex-col items-center lg:items-stretch">

          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-3 py-3 transition-all duration-300
                  ${isActive ? "text-white" : "text-white/45 hover:text-white/80"}
                  justify-center lg:justify-start lg:gap-4 w-full`
                }
              >
                <Icon size={20} />
                <span className="hidden lg:inline font-medium">
                  {link.label}
                </span>
              </NavLink>
            );
          })}

          {/* More Button */}
          <button
            className="flex items-center rounded-xl px-3 py-3 text-white/60 hover:text-white transition-all
            justify-center lg:justify-start lg:gap-4 w-full"
          >
            <MoreHorizontal size={20} />
            <span className="hidden lg:inline font-medium">More</span>
          </button>

          {/* Post Button */}
          <button
            className="mx-auto mt-4 bg-white text-black font-semibold transition-all duration-300 hover:brightness-95
            w-12 h-12 lg:w-[92%] lg:h-auto lg:py-3 rounded-full flex items-center justify-center"
          >
            <PenSquare size={18} />
            <span className="hidden lg:inline ml-2">Post</span>
          </button>
        </nav>
      </div>

      {/* Profile */}
      <div className="p-3 relative flex flex-col items-center lg:items-stretch">

        <div className="flex items-center justify-center lg:justify-between w-full">

          <div className="flex items-center gap-3 justify-center lg:justify-start">

            <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
              A
            </div>

            <div className="hidden lg:block">
              <h4 className="font-medium text-sm">Ayo</h4>
              <p className="text-xs text-white/50">@ayomide</p>
            </div>

          </div>

          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="hidden lg:block p-2 rounded-xl hover:bg-white/5 transition"
          >
            <MoreHorizontal size={18} />
          </button>

        </div>

        {/* Logout Modal */}
        {showProfileMenu && (
          <div className="absolute bottom-16 right-4 w-48 bg-[#0f0f0f] border border-white/10 rounded-2xl p-2 shadow-2xl hidden lg:block">
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-white/5 transition">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default SideBar;
