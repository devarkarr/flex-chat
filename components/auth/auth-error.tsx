import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  message: string | null;
};

const AuthError = ({ message }: Props) => {
  return (
    <div
      className={cn(
        message ? "block" : "hidden",
        "text-center bg-red-100/60 text-red-500 rounded-md p-2"
      )}
    >
      <p>{message}</p>
    </div>
  );
};

export default AuthError;
