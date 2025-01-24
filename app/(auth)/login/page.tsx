import AuthWrapper from "@/components/auth/auth-wrapper";
import LoginForm from "@/components/auth/login-form";
import GuestWrapper from "@/components/guest-wrapper";
import React from "react";

const LoginPage = () => {
  return (
    <GuestWrapper>
      <AuthWrapper
        headerTitle="Join to"
        bottomHref="/register"
        bottomLabel="Don't have an account?"
        bottomTitle="Sign up"
        social
      >
        <LoginForm />
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default LoginPage;
