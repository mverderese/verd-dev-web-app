import React from "react";

export default function HeroTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl text-center mx-auto">
      <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{children}</h1>
    </div>
  );
}
