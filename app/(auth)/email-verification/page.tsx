import AuthWrapper from "@/components/auth/auth-wrapper";
import EmailVerificationForm from "@/components/auth/email-verification-form";
import GuestWrapper from "@/components/guest-wrapper";
import React from "react";

const EmailVerificationPage = () => {
  return (
    <GuestWrapper>
      <AuthWrapper
        headerTitle="Email verify to"
        bottomHref="/login"
        bottomLabel="Back to"
        bottomTitle="Login"
      >
        <EmailVerificationForm />
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default EmailVerificationPage;
