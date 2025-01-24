import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  message: string | null;
};

const AuthSuccess = ({ message }: Props) => {
  return (
    <div
      className={cn(
        message ? "block" : "hidden",
        "text-center bg-green-100/60 text-green-500 rounded-md p-2"
      )}
    >
      <p>{message}</p>
    </div>
  );
};

export default AuthSuccess;
