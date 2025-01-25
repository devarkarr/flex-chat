"use client";

import React, { startTransition } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { socialLogin } from "@/actions/social.action";

const Social = () => {
  const login = (provider: "facebook" | "google") => {
    startTransition(async () => {
      await socialLogin(provider);
    });
  };
  return (
    <div className="my-5 w-full flex gap-3">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => login("google")}
      >
        <FcGoogle />
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => login("facebook")}
      >
        <FaFacebook />
      </Button>
    </div>
  );
};

export default Social;
