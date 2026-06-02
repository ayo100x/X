import {
  CircleOff,
  Ban,
  ShieldAlert,
  EyeOff,
  Copy,
  AlertTriangle,
} from "lucide-react";

const reasons = [
  {
    icon: CircleOff,
    text: "The associated content is not relevant",
  },
  {
    icon: Ban,
    text: "This trend is spam",
  },
  {
    icon: ShieldAlert,
    text: "This trend is abusive or harmful",
  },
  {
    icon: EyeOff,
    text: "Not interested in this",
  },
  {
    icon: Copy,
    text: "This trend is a duplicate",
  },
  {
    icon: AlertTriangle,
    text: "This trend is harmful or spammy",
  },
];

const TrendDispleasureList = () => {
  return (
    <div className="w-full max-w-md rounded-2xl overflow-hidden bg-[rgb(20,20,20)] border border-white/10">
      {reasons.map(({ icon: Icon, text }, index) => (
        <button
          key={index}
          className="w-full flex items-center gap-4 px-5 py-4 hover:bg-white/[0.04] transition-colors text-left border-b border-white/5 last:border-b-0"
        >
          <Icon
            size={18}
            className="text-white/70 flex-shrink-0"
          />

          <span className="text-[15px] text-white font-medium">
            {text}
          </span>
        </button>
      ))}
    </div>
  );
}

export default TrendDispleasureList