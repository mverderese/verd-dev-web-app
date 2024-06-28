import { ReactNode } from "react";
import BodyText from "@/app/(marketing)/_components/BodyText";
import H4 from "@/app/(marketing)/_components/H4";
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
      <div className="bg-white px-8 py-10 rounded-md hover:bg-gray-100 text-left">
        <div className="w-20 flex justify-center mb-8">
          <Image src={image} height={100} width={100} alt={`Card icon for ${title}`} />
        </div>
        <H4 additionalClassNames="font-dm-sans-semibold">{title}</H4>
        <BodyText additionalClassNames="text-lg md:text-lg">{children}</BodyText>
      </div>
    </a>
  );
}
