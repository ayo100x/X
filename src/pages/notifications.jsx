import { Settings } from "lucide-react";
import NotificationHeader from "../components/notificationHeader";
import NotificationCard from "../components/notificationCard";
import { useNotificationStore } from "../stores/useNotificationStore";

const Notifications = () => {
  const { notifications } = useNotificationStore();
  return (
    <div className="h-screen flex flex-col bg-black text-white border-r border-white/10">
      <div className="flex items-center justify-between px-5 py-4 bg-black">
        <span className="text-[22px] font-bold tracking-tight text-white">
          Notifications
        </span>

        <button
          className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors duration-200"
          aria-label="Notification settings"
        >
          <Settings size={20} className="text-white" />
        </button>
      </div>
      <NotificationHeader />
      <div className="overflow-y-auto custom-scrollbar">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.notificationId}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
