import { MoreHorizontal } from "lucide-react";
import TrendDispleasureList from "./trendDispleasureList";
import { useEffect, useRef, useState } from "react";

const TrendList = () => {
  const trends = [
    "Bitcoin Surges Above $120K",
    "React Conf 2026",
    "Lagos Tech Week",
  ];
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const menuRef = useRef(null);
  const handleMoreButtonOnClick = (trend) => {
    setShowMenu(!showMenu);
    setActiveMenu(trend);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
        setActiveMenu("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-2 border-t border-white/10">
      {trends.map((trend, i) => (
        <div className="relative " key={i}>
          <div className="w-full px-4 py-3 hover:bg-white/[0.03] transition text-left">
            <div className="flex items-center justify-between">
              <span className="text-lg text-white/50">Trending in Nigeria</span>

              <button className="group p-2 rounded-full hover:bg-sky-500/10 hover:scale-105 active:scale-95 transition-all duration-200">
                <MoreHorizontal
                  size={18}
                  className="text-white/50 group-hover:text-sky-500 transition-colors duration-200"
                />
              </button>
            </div>

            <div className="mt-1">
              <span className="text-xl font-semibold text-white">{trend}</span>
            </div>
          </div>

          {showMenu && trend == activeMenu && (
            <div className="absolute inset-0 z-50" ref={menuRef}>
              <TrendDispleasureList />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrendList;
