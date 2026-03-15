import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import DataManagement from "@/components/profile/settings/DataManagement";
import Language from "@/components/profile/settings/Language";
import NotificationPreference from "@/components/profile/settings/NotificationPreference";
import { Switch } from "@/components/ui/switch";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useGetNotifications } from "@/lib/api/profile/personalInfoApi/use-getNotifications";
import type { NotificationsInterface } from "@/types/profile/personalInfo/Notifications";
import { Sun } from "lucide-react";

const Settings = () => {
  const { data, isLoading, isError } = useGetNotifications();
  const { isDark, toggle } = useDarkMode();

  if (isLoading) return <Loading />;
  if (isError) return <Error error={data.message} />;

  const notifications: NotificationsInterface = data?.data;

  return (
    <>
      <>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage app preferences and privacy settings
        </p>
      </>

      {/* Language */}
      <Language />

      {/* Appearance */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-3">Appearance</h2>
        <label htmlFor="mode" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-card-foreground" />
            <div>
              <p className="text-sm font-medium text-card-foreground">
                Dark Mode
              </p>
              <p className="text-xs text-muted-foreground">
                Switch between light and dark theme
              </p>
            </div>
          </div>
          <Switch id="mode" checked={isDark} onCheckedChange={toggle} />
        </label>
      </div>

      {/* Notification Preference */}
      <NotificationPreference notifications={notifications} />

      {/* Data Management */}
      <DataManagement />
    </>
  );
};

export default Settings;
