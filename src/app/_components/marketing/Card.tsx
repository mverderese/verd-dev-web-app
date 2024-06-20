import { ReactElement, ReactNode } from "react";
import BodyText from "@/app/_components/marketing/BodyText";
import H4 from "@/app/_components/marketing/H4";
import Image from "next/image";

export type CardProps = {
  image?: string;
  icon?: ReactElement;
  title: string;
  children: ReactNode;
  link?: string;
  newTab?: boolean;
};
export default function Card({ image, title, children, link, newTab, icon }: CardProps) {
  const ImageElement = () => {
    if (icon) {
      return icon;
    } else if (image) {
      return (
        <div className="w-20 flex justify-center mb-8">
          <Image src={image} height={100} width={100} alt={`Card icon for ${title}`} />{" "}
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <a href={link} target={newTab ? "_blank" : ""}>
      <div className="bg-gray-50 px-8 py-10 rounded-md hover:bg-gray-100">
        <ImageElement />
        <H4>{title}</H4>
        <BodyText>{children}</BodyText>
      </div>
    </a>
  );
}
