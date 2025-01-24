import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const GuestWrapper = ({ children }: Props) => {
  return (
    <section className="min-h-screen max-lg:px-3 md:max-w-7xl mx-auto ">
      {/* header */}
      <nav className="h-20 flex items-center justify-between">
        <div>
          <h3 className="text-primary font-bold text-3xl">Flex Chat</h3>
        </div>
      </nav>
      {/* title */}
      <div className="h-[80vh] w-full flex max-sm:flex-col items-center gap-7 sm:justify-center">
        <div className="sm:w-[50%]   font-sans w-full">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-2xl font-semibold">
              Join Our{" "}
              <span className="text-xl sm:text-3xl tracking-wider font-anton font-bold">
                Flex Chat
              </span>
            </h4>

            <p className="text-sm sm:text-lg font-thin">
              {" "}
              The next generation social network & community!
              <br /> Connect with your friends and play with our quests and
              badges gamification system!
            </p>
          </div>
        </div>

        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      </div>
    </section>
  );
};

export default GuestWrapper;
