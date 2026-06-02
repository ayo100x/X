import { Search, BadgeCheck } from "lucide-react";


const SearchResults = ({ query = "" }) => {
  const relatedSearches = ["react hooks", "react router", "react query"];

  const users = [
    {
      name: "Dan Abramov",
      username: "dan_abramov",
      verified: true,
    },
    {
      name: "Kent Dodds",
      username: "kentcdodds",
      verified: true,
    },
    {
      name: "Dan Abramov",
      username: "dan_abramov",
      verified: true,
    },
    {
      name: "Kent Dodds",
      username: "kentcdodds",
      verified: true,
    },
    {
      name: "Dan Abramov",
      username: "dan_abramov",
      verified: true,
    },
    {
      name: "Kent Dodds",
      username: "kentcdodds",
      verified: true,
    },
    {
      name: "Dan Abramov",
      username: "dan_abramov",
      verified: true,
    },
    {
      name: "Kent Dodds",
      username: "kentcdodds",
      verified: true,
    },
    {
      name: "Dan Abramov",
      username: "dan_abramov",
      verified: true,
    },
    {
      name: "Kent Dodds",
      username: "kentcdodds",
      verified: true,
    },
  ];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black text-white">
      {/* SECTION 1 */}
      <div className="border-b border-white/10">
        {!relatedSearches.length > 0 ? (
          relatedSearches.slice(0, 3).map((item, i) => (
            <button
              key={i}
              className="flex w-full items-center gap-3 px-4 py-3 hover:bg-white/[0.03] transition"
            >
              <Search size={16} className="text-white/40" />

              <span className="text-sm text-white/90">{item}</span>
            </button>
          ))
        ) : (
          <button className="w-full px-4 py-4 text-left hover:bg-white/[0.03] transition">
            <span className="text-sm text-white/70">Search for "</span>

            <span className="text-sm font-medium text-white">{query}</span>

            <span className="text-sm text-white/70">"</span>
          </button>
        )}
      </div>

      {/* SECTION 2 */}
      {users.length > 0 && (
        <div className="border-b border-white/10">
          {users.map((user) => (
            <button
              key={user.username}
              className="flex w-full items-center gap-3 px-4 py-3 hover:bg-white/[0.03] transition"
            >
              {/* Avatar */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                {user.name.charAt(0)}
              </div>

              {/* User Info */}
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-1">
                  <span className="truncate text-sm font-medium">
                    {user.name}
                  </span>

                  {user.verified && (
                    <BadgeCheck size={14} className="text-white/70" />
                  )}
                </div>

                <p className="truncate text-xs text-white/40">
                  @{user.username}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* SECTION 3 */}
      <button className="w-full px-4 py-4 text-left text-sm text-white/70 hover:bg-white/[0.03] transition">
        Go to "{query}"
      </button>
    </div>
  );
};

export default SearchResults;
