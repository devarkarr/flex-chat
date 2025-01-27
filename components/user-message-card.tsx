import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMessageCard = () => {
  return (
    <>
      <Link href="/chats/arkarlin">
        <div className="py-2.5 px-8 relative before:absolute before:w-1 before:h-full before:top-0 before:left-0 before:bg-primary before:rounded-xl  bg-[#8a5cff2b] flex w-full h-20 gap-4">
          <div className="w-16 h-full">
            <Image
              width={100}
              height={100}
              className="w-full h-full rounded-xl"
              src="https://i.pinimg.com/474x/bc/7b/7b/bc7b7b242ae42d467ca2dbe8ea83545f.jpg"
              alt=""
            />
          </div>
          <div className="w-full  flex items-center ">
            <div className="w-full">
              <h5 className="font-semibold">John Doe</h5>
              <p className="text-sm">Hello, How are you?</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">22/10/2023</p>
              <p className="text-sm font-semibold text-primary">Seen</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserMessageCard;
