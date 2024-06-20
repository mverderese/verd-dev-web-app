import { ReactNode } from "react";
import BodyText from "@/app/_components/marketing/BodyText";
import H4 from "@/app/_components/marketing/H4";
import Image from "next/image";

export type CardProps = {
  icon: string;
  title: string;
  children: ReactNode;
  link?: string;
};
export default function Card({ icon, title, children, link }: CardProps) {
  return (
    <a href={link}>
      <div className="bg-gray-50 px-8 py-10 rounded-md hover:bg-gray-100">
        <div className="w-20 py-6 flex justify-center mb-4">
          <Image src={icon} height={100} width={100} alt={`Card icon for ${title}`} />
        </div>

        <H4>{title}</H4>

        <BodyText>{children}</BodyText>
      </div>
    </a>
  );
}
