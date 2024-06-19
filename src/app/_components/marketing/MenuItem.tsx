import React from "react";

export type MenuItemProps = { title: string; link: string };

export default function MenuItem({ title, link }: MenuItemProps) {
  return (
    <a className="font-medium text-white hover:text-gray-300 sm:py-6" href={link}>
      {title}
    </a>
  );
}
