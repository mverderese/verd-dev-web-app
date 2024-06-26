import React from "react";

export type MenuItemProps = { title: string; link: string; newTab?: boolean };

export default function MenuItem({ title, link, newTab }: MenuItemProps) {
  return (
    <a className="font-medium text-white hover:text-gray-300 sm:py-6" href={link} target={newTab ? "_blank" : ""}>
      {title}
    </a>
  );
}
