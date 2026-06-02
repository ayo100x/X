import { MoreHorizontal } from "lucide-react";

const TrendingCard = () => {
  const trends = [
    "Bitcoin Surges Above $120K",
    "React Conf 2026",
    "Lagos Tech Week",
  ];

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-black text-white">
      
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10">
        <span className="text-sm font-semibold">
          What's happening
        </span>
      </div>

      {/* Trends */}
      <div>
        {trends.map((trend, i) => (
          <button
            key={i}
            className="w-full px-4 py-3 hover:bg-white/[0.03] transition text-left"
          >
            <div className="flex items-center justify-between">
              
              <span className="text-xs text-white/50">
                Trending in Nigeria
              </span>

              <MoreHorizontal
                size={16}
                className="text-white/40"
              />
            </div>

            <div className="mt-1">
              <span className="text-sm font-semibold text-white">
                {trend}
              </span>
            </div>
          </button>
        ))}
      </div>

    </div>
  );
};

export default TrendingCard;