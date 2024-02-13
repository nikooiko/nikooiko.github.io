import * as React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full flex flex-col justify-center items-center max-w-xl">
        {children}
      </div>
    </main>
  );
};
