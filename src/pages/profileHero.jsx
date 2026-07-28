import {
  CalendarDays,
  MapPin,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";

const ProfileHero = ({user}) => {
  return (
    <div>
      {/* Cover */}
      <div className="relative h-52">
        <img
          src={user.coverPhoto}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Avatar */}
        <div className="absolute -bottom-18 left-5">
          <div className="size-36 rounded-full overflow-hidden border-4 border-black">
            <img
              src={user.userIcon}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-3">
          <button className="h-10 px-6 rounded-full font-semibold border border-white/20 hover:bg-white/10  transition">
            Edit profile
          </button>
        </div>

        {/* Avatar spacing */}
        <div className="mt-8 flex flex-col gap-2">
          {/* Name */}
          <span className="text-[22px] font-bold text-white">{user.name}</span>

          {/* Username */}
          <span className="text-[15px] text-white/50">@{user.userName}</span>

          {/* Bio */}
          <div className="mt-3 flex flex-col leading-6">
            <span className="text-white text-[15px]">
              Building beautiful software experiences.
            </span>

            <span className="text-white text-[15px]">
              {user.about}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 mt-3">
            <div className="flex items-center gap-2 text-white/50">
              <MapPin size={17} />
              <span className="text-[15px]">{user.location}</span>
            </div>

            <div className="flex items-center gap-2 text-white/50">
              <CalendarDays size={17} />
              <span className="text-[15px]">{user.dateJoined}</span>
            </div>
          </div>

          {/* Followers */}
          <div className="flex gap-6 mt-2">
            <div className="flex gap-1">
              <span className="font-semibold text-white">{user.following}</span>
              <span className="text-white/50">Following</span>
            </div>

            <div className="flex gap-1">
              <span className="font-semibold text-white">{user.followers}</span>
              <span className="text-white/50">Followers</span>
            </div>
          </div>

          {/* Mutual Followers */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt=""
                className="size-6 rounded-full border-2 border-black"
              />

              <img
                src="https://i.pravatar.cc/100?img=7"
                alt=""
                className="size-6 rounded-full border-2 border-black"
              />

              <img
                src="https://i.pravatar.cc/100?img=15"
                alt=""
                className="size-6 rounded-full border-2 border-black"
              />
            </div>

            <span className="text-[14px] text-white/50">
              Followed by <span className="font-medium text-white">John</span>,{" "}
              <span className="font-medium text-white">Emma</span> and{" "}
              <span className="font-medium text-white">
                10 others you follow
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
