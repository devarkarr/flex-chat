import AuthWrapper from "@/components/auth/auth-wrapper";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import GuestWrapper from "@/components/guest-wrapper";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <GuestWrapper>
      <AuthWrapper
        headerTitle="Forgot password to"
        bottomHref="/login"
        bottomLabel="Already have an account?"
        bottomTitle="Sign in"
      >
        <ForgotPasswordForm />
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default ForgotPasswordPage;
