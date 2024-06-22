import { ReactNode } from "react";
import BodyText from "@/app/_components/marketing/BodyText";
import H4 from "@/app/_components/marketing/H4";
import Image from "next/image";

export type CardProps = {
  image: string;
  title: string;
  children: ReactNode;
  link?: string;
  newTab?: boolean;
};
export default function Card({ image, title, children, link, newTab }: CardProps) {
  return (
    <a href={link} target={newTab ? "_blank" : ""}>
      <div className="bg-gray-50 px-8 py-10 rounded-md hover:bg-gray-100 text-left">
        <div className="w-20 flex justify-center mb-8">
          <Image src={image} height={100} width={100} alt={`Card icon for ${title}`} />
        </div>
        <H4>{title}</H4>
        <BodyText additionalClassNames="text-lg md:text-lg">{children}</BodyText>
      </div>
    </a>
  );
}
