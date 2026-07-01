import { useRef, useState } from "react";
import { user } from "../stores/user.store";

import {
  Image,
  Gift,
  Wand2,
  SlidersHorizontal,
  Smile,
  CalendarClock,
  MapPin,
  Flag,
  Globe,
} from "lucide-react";
import { usePostStore } from "../stores/post.store";

const PostComposer = () => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleInput = (e) => {
    const el = textareaRef.current;

    setText(e.target.value);

    if (!el) return;

    // reset correctly
    el.style.height = "auto";

    const maxHeight = window.innerHeight * 0.8;

    el.style.height = Math.min(el.scrollHeight, maxHeight) + "px";
  };

  const handleMediaSelect = (e) => {
    const files = Array.from(e.target.files);

    const selectedMedia = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }));

    setMedia((prev) => {
      const availableSlots = 4 - prev.length;

      if (availableSlots <= 0) {
        return prev;
      }

      return [...prev, ...selectedMedia.slice(0, availableSlots)];
    });

    e.target.value = "";
  };

  const removeMedia = (id) => {
    setMedia((prev) => {
      const item = prev.find((m) => m.id === id);

      if (item) {
        URL.revokeObjectURL(item.preview);
      }

      return prev.filter((m) => m.id !== id);
    });
  };

  const create_post = usePostStore((state) => state.create_post);

  const createPostOnClick = () => {
    if (!text.trim() && media.length === 0) return;

    //console.log("called");

    create_post({
      postText: text,
      postMedia: media.map((item) => item.preview),
    });

    setText("");
    setMedia([]);

    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
    }

  };

  return (
    <div className="w-full max-w-2xl bg-black border-y border-white/10 p-4 flex flex-col">
      <div className="flex gap-3 min-h-0">
        {/* Profile */}
        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
          <img
            src={user.userIcon}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col min-h-0">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleMediaSelect}
          />

          {/* Textarea Area */}
          <div className="border-b border-white/20 ">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleInput}
              placeholder="What's happening?"
              rows={2}
              className="w-full min-h-10 overflow-y-auto  bg-transparent outline-none resize-none  focus:border-white/60 py-2 text-sm placeholder:text-white/40 overflow-hidden leading-5"
            />

            {media.length > 0 && (
              <div className="mt-2 grid gap-1 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
                {media.map((item) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <img
                      src={item.preview}
                      alt=""
                      className="w-full object-cover"
                    />

                    {/* Top Controls */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {/* Edit */}
                      <button
                        className="
                          h-8
                          px-3
                          rounded-full
                          bg-black/70
                          backdrop-blur-md
                          text-white
                          text-xs
                          font-medium
                          hover:bg-black/85
                          transition
                        "
                      >
                        Edit
                      </button>

                      {/* Remove */}
                      <button
                        onClick={() => removeMedia(item.id)}
                        className="
                        size-8
                        rounded-full
                        bg-black/70
                        backdrop-blur-md
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-black/85
                        transition
                      "
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button className="mt-1 flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-blue-500 pb-3 hover:bg-blue-500/10">
              <Globe size={14} />
              Everyone can reply
            </button>
          </div>

          {/* Toolbar pinned bottom */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-white/70">
              <button onClick={() => fileInputRef.current.click()}>
                <Image className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <Gift className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <Wand2 className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <SlidersHorizontal className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <Smile className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <CalendarClock className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <MapPin className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
              <button>
                <Flag className="w-4 h-4 hover:text-white cursor-pointer" />
              </button>
            </div>
            <button
              onClick={createPostOnClick}
              className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
