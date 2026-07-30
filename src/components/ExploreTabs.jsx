import { useState } from "react";

const ExploreTabs = () => {
  const [activeTab, setActiveTab] = useState("For You");
  
  const tabs = ["For You", "Trending", "News", "Sports", "Entertainment"];

  return (
    <div className="border-b border-white/10">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative flex-1 h-12 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <span
              className={`text-[15px] font-medium transition-colors ${
                activeTab === tab ? "text-white" : "text-white/50"
              }`}
            >
              {tab}
            </span>

            {activeTab === tab && (
              <div className="absolute bottom-0 w-14 h-1 rounded-full bg-[#1d9bf0]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreTabs;
