import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import SlidebarLink from "./SidebarLink";
import { useSession, signOut } from 'next-auth/react';

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className='="space-y-2.5 mt-4 m-2.5 xl:ml-24'>
        <SlidebarLink text="首頁" Icon={HomeIcon} active />
        <SlidebarLink text="搜尋" Icon={HashtagIcon} active />
        <SlidebarLink text="提醒" Icon={BellIcon} active />
        <SlidebarLink text="Messenger" Icon={InboxIcon} active />
        <SlidebarLink text="朋友" Icon={BookmarkIcon} active />
        <SlidebarLink text="社團" Icon={ClipboardListIcon} active />
        <SlidebarLink text="個人檔案" Icon={UserIcon} active />
        <SlidebarLink text="更多" Icon={DotsCircleHorizontalIcon} active />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full 
      w-56 h-[52px] text-log font-bold shadow-md hover:bg-[#1a8cd8]">貼文</button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl-mr-5 mt-auto"
      onClick={signOut}>
          <img src={session.user.image} alt="Profile Picture"
          className="h-10 w-10 rounded-full xl-mr-2.5" />
          <div className="hidden ml-1 xl:inline leading-5">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-[#6e767d]">{session.user.tag}</p>
          </div>
          <DotsCircleHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}
