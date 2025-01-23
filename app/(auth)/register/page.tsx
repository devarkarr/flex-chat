import AuthWrapper from "@/components/auth/auth-wrapper";
import GuestWrapper from "@/components/guest-wrapper";
import React from "react";

const RegisterPage = () => {
  return (
    <GuestWrapper>
      <AuthWrapper
        headerTitle="Create account for"
        bottomHref="/login"
        bottomLabel="Already have an account?"
        bottomTitle="Sign in"
      >
        <h1 className=" text-primary">RegisterPage</h1>
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default RegisterPage;
