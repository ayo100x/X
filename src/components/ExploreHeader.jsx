import { Search, Settings } from "lucide-react";

const ExploreHeader = () => {
  return (
    <div className="flex items-center m-3 gap-6 ">
      {/* searchbar */}
      <div className="flex gap-3 items-center px-4 w-125 h-13 rounded-full border border-white/10 text-sm text-white placeholder:text-white/40 focus-within:border-white/40  focus-within:ring-white/30 focus-within:ring-1 bg-black ">
        <Search className="size-4.5 text-white/40" />
        <input
          placeholder="Search..."
          className="border-none outline-none w-full"
        />
      </div>

      <button className="size-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
        <Settings size={20} className="text-white" />
      </button>
    </div>
  );

  
};

export default ExploreHeader;
