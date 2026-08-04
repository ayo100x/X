import { useState } from "react";

const NotificationHeader = () => {
  const [activeTab, setActiveTab] = useState("A");

  const switchTabOnclickA = () => {
    setActiveTab("A");
  };

  const switchTabOnclickB = () => {
    setActiveTab("B");
  };

 return (
  <div className="border-b border-white/10">
    <div className="flex items-center">
      
      {/* Tab A */}
      <button
        onClick={switchTabOnclickA}
        className={`relative flex-1 py-5 text-sm font-medium transition-all duration-300 ${
          activeTab === "A"
            ? "text-white"
            : "text-white/40 hover:text-white/75"
        }`}
      >
        <span className="relative z-10">All</span>

        {activeTab === "A" && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] w-14 rounded-full bg-white" />
        )}
      </button>

      {/* Tab B */}
      <button
        onClick={switchTabOnclickB}
        className={`relative flex-1 py-5 text-sm font-medium transition-all duration-300 ${
          activeTab === "B"
            ? "text-white"
            : "text-white/40 hover:text-white/75"
        }`}
      >
        <span className="relative z-10">Mentions</span>

        {activeTab === "B" && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] w-14 rounded-full bg-white" />
        )}
      </button>

    </div>
  </div>
);
};

export default NotificationHeader;