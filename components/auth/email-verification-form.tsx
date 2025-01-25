"use client";

import React, { startTransition, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import AuthError from "./auth-error";
import { EmailVerificationAction } from "@/actions/email-verification.action";
import { useSearchParams } from "next/navigation";
import AuthSuccess from "./auth-success.";

const EmailVerificationForm = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [isPending, setPending] = React.useState<boolean>(true);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const handler = () => {
    startTransition(async () => {
      const response = await EmailVerificationAction(token!);
      if (response.error) {
        setError(response.error);
      }
      if (response.success) {
        setSuccess(response.success);
      }
      setPending(false);
    });
  };

  useEffect(() => {
    handler();
  }, [handler]);
  return (
    <div className="w-full flex justify-center py-2">
      {isPending ? (
        <BeatLoader color="#8a5cff" />
      ) : (
        <>
          <AuthError message={error} />
          <AuthSuccess message={success} />
        </>
      )}
    </div>
  );
};

export default EmailVerificationForm;
