import { SITE } from '@/config/site';

export default function AnnouncementBar() {
  return <div className="bg-leaf-900 px-4 py-2 text-center text-sm text-white">{SITE.announcement}</div>;
}
