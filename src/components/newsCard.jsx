const NewsCard = () => {
  const news = [
    {
      headline: "New AI model changes how developers build apps",
      time: "10h ago",
      category: "Technology",
      posts: "39.4K posts",
    },
    {
      headline: "Global markets react to recent economic shifts",
      time: "5h ago",
      category: "Finance",
      posts: "21.1K posts",
    },
    {
      headline: "Entertainment industry sees record streaming growth",
      time: "2h ago",
      category: "Entertainment",
      posts: "58.2K posts",
    },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl bg-black text-white border border-white/10 overflow-hidden">
      
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10">
        <span className="text-sm font-semibold">
          Today's News
        </span>
      </div>

      {/* List */}
      <div>
        {news.map((item, i) => (
          <div
            key={i}
            className="px-4 py-3 space-y-2 hover:bg-white/3 transition"
          >
            
            {/* Headline */}
            <span className="text-sm font-medium leading-snug block">
              {item.headline}
            </span>

            {/* Meta Row */}
            <div className="flex items-center justify-between text-xs text-white/50">
              
              {/* Left group */}
              <div className="flex items-center gap-2">
                
                {/* Overlapping avatars */}
                <div className="flex -space-x-2">
                  <span className="h-5 w-5 rounded-full bg-white/20 border border-black" />
                  <span className="h-5 w-5 rounded-full bg-white/30 border border-black" />
                  <span className="h-5 w-5 rounded-full bg-white/10 border border-black" />
                </div>

                <span>{item.time}</span>

                <span className="text-white/30">•</span>

                <span>{item.category}</span>
              </div>

              {/* Right */}
              <span className="text-white/40">
                {item.posts}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;