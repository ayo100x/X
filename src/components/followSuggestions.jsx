import { useState } from "react";

const FollowSuggestions = () => {
  const [following, setFollowing] = useState({});

  const users = [
    { name: "Elon Musk", username: "elonmusk" },
    { name: "Sara Chen", username: "sarachen" },
    { name: "David Kim", username: "davidkim" },
  ];

  const toggleFollow = (username) => {
    setFollowing((prev) => ({
      ...prev,
      [username]: !prev[username],
    }));
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black text-white overflow-hidden">
      
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10">
        <h2 className="text-sm font-semibold text-white">
          You might like
        </h2>
      </div>

      {/* List */}
      <div>
        {users.map((user) => (
          <div
            key={user.username}
            className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition"
          >
            
            {/* Left */}
            <div className="flex items-center gap-3">
              
              {/* Avatar */}
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                {user.name.charAt(0)}
              </div>

              {/* Name + Username */}
              <div className="leading-tight">
                <p className="text-sm font-medium text-white">
                  {user.name}
                </p>
                <p className="text-xs text-white/40">
                  @{user.username}
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <button
              onClick={() => toggleFollow(user.username)}
              className={`
                text-xs px-4 py-1.5 rounded-full border transition
                ${
                  following[user.username]
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white hover:border-white/40"
                }
              `}
            >
              {following[user.username] ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        <button className="text-sm text-blue-400 hover:text-blue-300 transition">
          Show more
        </button>
      </div>
    </div>
  );
};

export default FollowSuggestions;