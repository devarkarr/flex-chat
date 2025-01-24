import AuthWrapper from "@/components/auth/auth-wrapper";
import GuestWrapper from "@/components/guest-wrapper";
import React from "react";

const EmailVerificationPage = () => {
  return (
    <GuestWrapper>
      <AuthWrapper
        headerTitle="Join to"
        bottomHref="/register"
        bottomLabel="Don't have an account?"
        bottomTitle="Sign up"
      >
        <h1>email verification</h1>
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default EmailVerificationPage;
