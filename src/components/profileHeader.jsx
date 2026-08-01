import { ArrowLeft, Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ user }) => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="h-14 px-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            onClick={handleBackButton}
            className="size-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>

          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-white leading-none">
              {user.name}
            </span>

            <span className="text-[13px] text-white/50 mt-1">10K Posts</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="size-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Sparkles size={20} className="text-white" />
          </button>

          <button className="size-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Search size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
