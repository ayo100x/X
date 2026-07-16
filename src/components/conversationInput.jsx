import { ArrowUp, AudioLines, ImagePlay, Plus, Sticker, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ConversationInput = () => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    const maxHeight = 200;

    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [text, media]);

  const handleFileInputOnClick = () => {
    fileInputRef.current.click();
  };

  const handleMediaSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const media = {
      id: crypto.randomUUID(),
      file: file,
      mediaURL: URL.createObjectURL(file),
    };
    setMedia(media);
  };

  const handleRemoveMediaOnClick = () => {
    if (media?.mediaURL) {
      URL.revokeObjectURL(media.mediaURL);
    }
    setMedia(null);
    fileInputRef.current.value = "";
  };

  return (
    <div className="bg-transparent w-full flex items-end gap-2 pb-4 px-4">
      <div className="flex gap-2">
        {/* + button */}
        <button
          onClick={handleFileInputOnClick}
          className="flex items-center justify-center rounded-full shrink-0 bg-white/10 size-12 hover:hover:bg-white/20 duration-200 transition-colors"
        >
          <Plus size={20} className="text-white" />
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleMediaSelect}
            className="hidden"
          />
        </button>
        {/* GIF button */}
        <button className="flex items-center justify-center rounded-full shrink-0 bg-white/10 hover:hover:bg-white/20 duration-200 size-12">
          <ImagePlay size={20} className="text-white" />
        </button>
        {/* Sticker button*/}
        <button className="flex items-center justify-center rounded-full shrink-0 bg-white/10 hover:hover:bg-white/20 duration-200 size-12">
          <Sticker size={20} className="text-white" />
        </button>
      </div>
      {/* Reply bar */}
      <div className="w-full min-h-12 px-3 py-2 bg-white/10 rounded-3xl">
        {!media && (
          <div className="flex items-end">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={1}
              placeholder="Message"
              className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-white/70 leading-6 max-h-50 px-2 py-1 custom-scrollbar"
            />

            <button
              className={`ml-2 flex items-center justify-center size-8 rounded-full duration-200 shrink-0 ${!text && !media ? "bg-white/20 hover:hover:bg-white/30" : "bg-blue-400 hover:hover:bg-blue-500"} `}
            >
              {!text && !media ? (
                <AudioLines size={20} className="text-white" />
              ) : (
                <ArrowUp size={20} className="text-white" />
              )}
            </button>
          </div>
        )}

        {media && (
          <div>
            <div className="w-80 h-70 shrink-0 rounded-2xl relative overflow-hidden">
              <img
                src={media?.mediaURL}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Top control */}
              <div className="absolute top-3 left-3 right-3 flex justify-end">
                <button
                  onClick={handleRemoveMediaOnClick}
                  className="size-8 rounded-full flex items-center bg-black/70 text-white justify-center backdrop-blur-md hover:bg-black/85 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="border-t border-white/10 my-2" />

            <div className="flex items-end">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={1}
                placeholder="Message"
                className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-white/70 leading-6 max-h-50 px-2 py-1 custom-scrollbar"
              />

              <button
                className={`ml-2 flex items-center justify-center size-8 rounded-full duration-200 shrink-0 ${!text && !media ? "bg-white/20 hover:hover:bg-white/30" : "bg-blue-400 hover:hover:bg-blue-500"} `}
              >
                {!text && !media ? (
                  <AudioLines size={20} className="text-white" />
                ) : (
                  <ArrowUp size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ConversationInput;
