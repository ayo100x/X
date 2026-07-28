import {
  X,
  Sparkles,
  Camera,
  ChevronRight,
  Image,
  ImagePlus,
} from "lucide-react";
import { useState } from "react";

const EditProfile = ({ user, setShowEditProfile }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  const MAX_BIO = 160;

  const handleBioOnChange = (e) => {
    if (e.target.value.length <= MAX_BIO) {
      setBio(e.target.value);
    }
  };

  // incomplete save function
  const handleSave = () => {
    setShowEditProfile(false)
  }

  return (
    <div className="w-full max-w-170 h-fit max-h-[90vh] flex flex-col bg-[rgb(20,20,20)] text-white rounded-2xl border-[#2f3336] shadow-2xl overflow-hidden m-3 ">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex gap-3 text-white items-center">
          <button
            onClick={() => {
              setShowEditProfile(false);
            }}
            className="size-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
          <span className="text-[22px] font-semibold tracking-tight text-white">
            Edit Profile
          </span>
        </div>
        <button
          onClick={handleSave}
          className="bg-white text-black flex justify-center items-center rounded-full w-20 font-semibold py-1.5"
        >
          <span>Save</span>
        </button>
      </div>
      {/* Body */}
      <div className="overflow-y-auto custom-scrollbar">
        {/* Cover Photo */}
        <div className="relative h-52">
          <img
            src={user.coverPhoto}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Cover Edit */}
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <button className="size-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/75 transition flex items-center justify-center">
              <Camera size={22} className="text-white" />
            </button>

            <button className="size-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/75 transition flex items-center justify-center">
              <ImagePlus size={22} className="text-white" />
            </button>

            <button className="size-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/75 transition flex items-center justify-center">
              <X size={22} className="text-white" />
            </button>
          </div>

          {/* Avatar */}
          <div className="absolute -bottom-25 left-5">
            <div className="relative size-36 rounded-full overflow-hidden border-4 border-black">
              <img
                src={user.userIcon}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Avatar Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Avatar Edit */}
              <button className="absolute inset-0 m-auto size-12 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/75 transition flex items-center justify-center">
                <Camera size={22} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end m-3">
          <div className="flex items-center justify-between gap-30 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            {/* Left */}
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold text-[15px]">
                Edit your photo with Imagine
              </span>

              <span className="text-white/50 text-[14px]">
                Customize yourself in seconds
              </span>
            </div>

            {/* Right */}
            <button className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 hover:bg-white/30 transition-colors">
              <Image size={17} className="text-white" />

              <span className="text-white text-[14px] font-medium">
                Edit photo
              </span>
            </button>
          </div>
        </div>

        {/* TEXT-Areas */}
        <div className="flex flex-col w-full">
          {/* name text-area */}
          <div className="m-3 rounded-2xl border border-white/10 px-4 py-3 focus-within:border-[#1d9bf0] transition-colors">
            <span className="text-[13px] text-white/50">Name</span>

            <textarea
              rows={1}
              defaultValue=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full resize-none overflow-hidden bg-transparent text-[17px] text-white outline-none"
            />
          </div>
          <div className="m-3 rounded-2xl border border-white/10 px-4 py-3 focus-within:border-[#1d9bf0] transition-colors">
            <div className="flex justify-between">
              <span className="text-[13px] text-white/50">Bio</span>
              <span className="text-[13px] text-white/50">
                {bio.length}/{MAX_BIO}
              </span>
            </div>

            <textarea
              rows={3}
              defaultValue=""
              value={bio}
              onChange={handleBioOnChange}
              className="mt-1 w-full resize-none overflow-y-auto custom-scrollbar bg-transparent text-[17px] text-white outline-none"
            />
          </div>
          <div className="m-3 rounded-2xl border border-white/10 px-4 py-3 focus-within:border-[#1d9bf0] transition-colors">
            <span className="text-[13px] text-white/50">Location</span>

            <textarea
              rows={1}
              defaultValue=""
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 w-full resize-none overflow-hidden bg-transparent text-[17px] text-white outline-none"
            />
          </div>
          <div className="m-3 rounded-2xl border border-white/10 px-4 py-3 focus-within:border-[#1d9bf0] transition-colors">
            <span className="text-[13px] text-white/50">Website</span>

            <textarea
              rows={1}
              defaultValue=""
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="mt-1 w-full resize-none overflow-hidden bg-transparent text-[17px] text-white outline-none"
            />
          </div>
        </div>

        {/* add date of birth */}
        <div className="px-4 py-3 flex justify-between items-center hover:bg-white/15">
          <div className="flex flex-col gap-1">
            <span className="text-white font-semibold text-[15px]">
              Birth date
            </span>

            <span className="text-white/50 text-[14px]">
              Add your date of birth
            </span>
          </div>
          <ChevronRight size={25} className="text-white/50" />
        </div>
        {/* switch to professional */}
        <div className="px-4 py-3 flex justify-between items-center hover:bg-white/15">
          <span className="text-white font-semibold text-[20px]">
            Switch to professional
          </span>

          <ChevronRight size={25} className="text-white/50" />
        </div>
        <div className="h-15" />
      </div>
    </div>
  );
};

export default EditProfile;
