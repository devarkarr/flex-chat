import React from "react";
import Social from "./social";
import Link from "next/link";

type Props = {
  headerTitle: string;
  children: React.ReactNode;
  bottomLabel: string;
  bottomHref: string;
  bottomTitle: string;
  social?: boolean;
};

const AuthWrapper = ({
  headerTitle,
  children,
  bottomHref,
  bottomLabel,
  bottomTitle,
  social = false,
}: Props) => {
  return (
    <div className="w-full sm:w-[35%] bg-white shadow-sm p-7 rounded-xl ">
      <div className="text-center space-y-2">
        <div className="text-3xl">🔐</div>
        <h1 className="text-lg">
          {headerTitle}{" "}
          <span className="text-xl font-sans">
            {process.env.NEXT_PUBLIC_NAME}
          </span>
        </h1>
      </div>
      <div className="my-5">{children}</div>

      {social && (
        <>
          <div className=" relative">
            <div className="w-full h-[0.5px] bg-gray-500"></div>
            <p className="text-xs absolute top-[-8px] bg-white px-1 left-[48%]">
              Or
            </p>
          </div>
          <Social />
        </>
      )}
      <div>
        <p className="text-sm text-center">
          {bottomLabel}
          <Link className="text-primary font-semibold ps-2" href={bottomHref}>
            {bottomTitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthWrapper;
