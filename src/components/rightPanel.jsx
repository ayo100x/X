import { Search } from "lucide-react";
import SearchResults from "./searchResults";
import { useEffect, useRef, useState } from "react";
import FollowSuggestions from "./followSuggestions";
import Subscribe from "./subscribe";
import NewsCard from "./newsCard";
import TrendingCard from "./trendingCard";

const RightPanel = () => {
  const [searchResultOpen, setSearchResultOpen] = useState(false);

  return (
    <div className="hidden lg:flex w-[320px] xl:w-[400px] text-white px-4 relative h-full  flex-col ">
      {/* search bar */}
      <div className="bg-black  pt-3">
        <div
        className="
            flex gap-3   items-center px-4  w-full 
            h-11
            rounded-full
            border
            border-white/10
            text-sm
            text-white
            placeholder:text-white/40
            focus-within:border-white/40
              focus-within:ring-1
            focus-within:ring-white/30
            
            bg-black
            
          "
      >
        <Search className="size-4.5 text-white/40" />{" "}
        <input
          onFocus={() => setSearchResultOpen(true)}
          onBlur={() => setSearchResultOpen(false)}
          type="text"
          placeholder="Search..."
          className="border-none outline-none w-full"
        />
        </div>
      </div>

      <div className="overflow-y-auto hide-scrollbar flex-1">
        <div className="mt-4">
        <Subscribe />
      </div>
      <div className="mt-4">
        <NewsCard />
      </div>
      <div className="mt-4">
        <TrendingCard />
      </div>
      <div className="mt-4">
        <FollowSuggestions />
      </div>
      <div className="px-4 py-3 text-xs text-white/40 flex flex-wrap gap-x-2 gap-y-1">
        <span className="hover:text-white/60 cursor-pointer">
          Terms of Service
        </span>
        <span>|</span>

        <span className="hover:text-white/60 cursor-pointer">
          Privacy Policy
        </span>
        <span>|</span>

        <span className="hover:text-white/60 cursor-pointer">
          Cookie Policy
        </span>
        <span>|</span>

        <span className="hover:text-white/60 cursor-pointer">
          Accessibility
        </span>
        <span>|</span>

        <span className="hover:text-white/60 cursor-pointer">Ads info</span>
        <span>|</span>

        <span className="hover:text-white/60 cursor-pointer">More</span>

        <span className="w-full mt-1">© 2026 X Corp.</span>
      </div>

      </div>
      {/* Search result */}
      {searchResultOpen && (
        <div className="absolute w- top-[56px] left-4 right-4  max-h-[70%] overflow-y-auto custom-scrollbar">
          <SearchResults />
        </div>
      )}
    </div>
  );
};
export default RightPanel;
