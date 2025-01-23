import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <div className="my-5 w-full flex gap-3">
      <Button variant="outline" className="w-full">
        <FcGoogle />
      </Button>
      <Button variant="outline" className="w-full">
        <FaFacebook />
      </Button>
    </div>
  );
};

export default Social;
