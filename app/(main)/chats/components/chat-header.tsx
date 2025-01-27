import React from "react";
import { FaPhone, FaVideo } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ChatHeader = () => {
  return (
    <nav className="w-full h-20 py-2.5 flex items-center justify-between px-5 bg-white rounded-2xl">
      <div className="flex gap-4 ">
        <Image
          width={100}
          height={100}
          className="w-14 h-14 rounded-full"
          src="https://i.pinimg.com/474x/9d/86/da/9d86dab574fcfa56f9fe33cb3d3245a4.jpg"
          alt=""
        />
        <div className="space-y-1">
          <h4 className="font-semibold ">Josephin water</h4>
          <Badge className=" rounded-2xl bg-green-500 text-xs">Active</Badge>
        </div>
      </div>
      <div className="flex gap-3 items-center ">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100">
          <FaPhone size={18} />
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100">
          <FaVideo size={18} />
        </div>
        <div>
          <BsThreeDotsVertical size={18} />
        </div>
      </div>
    </nav>
  );
};

export default ChatHeader;
