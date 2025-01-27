import RecentUserCard from "@/components/recent-user-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { RiSearch2Line } from "react-icons/ri";
import React from "react";
import UserMessageCard from "@/components/user-message-card";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdWebStories } from "react-icons/md";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen flex ">
      <section className="w-full md:w-[30%]  h-full flex flex-col">
        <div className="p-5 md:p-6 px-5 md:px-8 w-full">
          <div>
            <h4 className="font-bold text-xl md:text-2xl">Flex Chat</h4>
            <p>Chat from your friends 😘</p>
          </div>
          <ScrollArea className="w-full my-5 md:my-6 whitespace-nowrap ">
            <div className="flex w-full space-x-4 pb-4">
              <RecentUserCard />
              <RecentUserCard />
              <RecentUserCard />
              <RecentUserCard />
              <RecentUserCard />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="flex justify-between">
            <div>
              <h4 className="font-bold text-xl md:text-2xl">Chat</h4>
              <p className="">Start New Conversation</p>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">
              <RiSearch2Line size={20} />
            </div>
          </div>
        </div>

        <div className="my-3 md:my-6 space-y-0.5">
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
        </div>

        <div className="max-md:flex hidden fixed bottom-0 py-3 mt-auto h-16 w-full bg-white  items-center justify-around">
          <div className="space-y-0.5">
            <BiSolidMessageRounded size={33} color="#8a5cff" />
            <p className="text-sm">Chats</p>
          </div>
          <div className="space-y-0.5">
            <MdWebStories size={33} color="#8a5cff" />
            <p className="text-sm">Stories</p>
          </div>
        </div>
      </section>
      <section className="w-full max-md:hidden block h-full bg-[#8a5cff1f] p-3 md:p-7">
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
