import Image from "next/image";
import React from "react";


const RecentUserCard = () => {
  return (
    <figure className="h-full w-28  rounded-lg overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/35">
      <Image
        width={100}
        height={100}
        className="w-full h-full rounded-md"
        src="https://i.pinimg.com/474x/d2/c9/6a/d2c96ac30d42e9157e313fe4e2cee952.jpg"
        alt=""
      />
      <div className=" absolute font-semibold text-white bottom-2.5 w-full text-center ">
        <h4 className="text-sm">John Doe</h4>
      </div>
    </figure>
  );
};

export default RecentUserCard;
