const Subscribe = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-black text-white p-4 space-y-3 border border-white/10 rounded-2xl">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">
          Subscribe to Premium
        </span>

        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-md">
          50% off
        </span>
      </div>

      {/* Description */}
      <div className="text-sm text-white/70 leading-relaxed">
        <span>
          Get rid of ads, see your analytics, boost your replies and unlock 20+ features.
        </span>
      </div>

      {/* Button */}
      <button className="w-[100px] bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-semibold py-2.5 rounded-full">
        <span>Subscribe</span>
      </button>
    </div>
  );
};

export default Subscribe;