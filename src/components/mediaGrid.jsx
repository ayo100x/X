const MediaGrid = ({ media = [] }) => {
  if (!media.length) return null;

  const count = Math.min(media.length, 4);
  const items = media.slice(0, 4);

  // 1 image → full width
  if (count === 1) {
    return (
      <div className="mt-3 rounded-xl overflow-hidden">
        <img
          src={items[0]}
          alt="media"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    );
  }

  // 2 images → 2 columns
  if (count === 2) {
    return (
      <div className="mt-3 grid grid-cols-2 gap-1 rounded-xl overflow-hidden">
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="media"
            className="w-full h-64 object-cover"
          />
        ))}
      </div>
    );
  }

  // 3–4 images → 2x2 grid
  return (
    <div className="mt-3 grid grid-cols-2 grid-rows2 gap-1 rounded-xl overflow-hidden">
      {items.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="media"
          className="w-full h-48 object-cover"
        />
      ))}
    </div>
  );
};

export default MediaGrid;