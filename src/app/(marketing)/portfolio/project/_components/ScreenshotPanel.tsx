import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import classNames from "classnames";

export type ScreenshotPanelProps = {
  children: React.ReactNode;
  image: string;
  reverse?: boolean;
  narrowTop?: boolean;
  narrowBottom?: boolean;
  mobile?: boolean;
};
export default function ScreenshotPanel({
  children,
  image,
  reverse,
  narrowTop,
  narrowBottom,
  mobile,
}: ScreenshotPanelProps) {
  return (
    <Section narrowTop={narrowTop} narrowBottom={narrowBottom}>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "items-center",
          { "lg:flex-row": !reverse },
          { "lg:flex-row-reverse": reverse },
          { "lg:flex-wrap": !reverse },
          { "lg:flex-wrap-reverse": reverse },
        )}
      >
        <div
          className={classNames(
            { "lg:basis-2/3": !mobile },
            { "lg:basis-1/3": mobile },
            "pb-6",
            "lg:pb-0",
            "lg:pt-3",
            "lg:pr-6",
            "lg:align-top",
          )}
        >
          <Image src={image} alt="Screenshot" height={500} width={800} />
        </div>
        <div className={classNames({ "lg:basis-2/3": mobile }, { "lg:basis-1/3": !mobile })}>{children}</div>
      </div>
    </Section>
  );
}
