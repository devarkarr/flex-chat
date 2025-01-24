import AuthWrapper from "@/components/auth/auth-wrapper";
import RegisterForm from "@/components/auth/register-form";
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
        social
      >
        <RegisterForm />
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default RegisterPage;
