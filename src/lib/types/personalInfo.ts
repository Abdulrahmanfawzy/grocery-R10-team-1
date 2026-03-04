export interface notificationsSection {
  title: string;
  items: notificationItem[];
}

export interface notificationItem {
  label: string;
  checked: boolean;
}
