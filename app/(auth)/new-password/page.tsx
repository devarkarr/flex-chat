import AuthWrapper from "@/components/auth/auth-wrapper";
import NewPasswordForm from "@/components/auth/new-password-form";
import GuestWrapper from "@/components/guest-wrapper";
import React from "react";

const NewPasswordPage = () => {
  return (
    <GuestWrapper>
      <AuthWrapper
        headerTitle="New password to"
        bottomHref="/login"
        bottomLabel="Already have an account?"
        bottomTitle="Sign in"
      >
        <NewPasswordForm />
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default NewPasswordPage;
