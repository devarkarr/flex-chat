import AuthWrapper from "@/components/auth/auth-wrapper";
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
      >
        <h1 className=" text-primary">LoginPage</h1>
      </AuthWrapper>
    </GuestWrapper>
  );
};

export default LoginPage;
