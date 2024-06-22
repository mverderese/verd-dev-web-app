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
  darkBg?: boolean;
};
export default function ScreenshotPanel({
  children,
  image,
  reverse,
  narrowTop,
  narrowBottom,
  mobile,
  darkBg,
}: ScreenshotPanelProps) {
  return (
    <Section narrowTop={narrowTop} narrowBottom={narrowBottom} darkBg={darkBg}>
      <div
        className={classNames(
          "flex flex-col",
          reverse ? "items-end lg:flex-row-reverse lg:flex-wrap-reverse" : "items-start lg:flex-row lg:flex-wrap",
        )}
      >
        <div
          className={classNames(
            mobile ? "lg:basis-1/3" : "lg:basis-1/2",
            "pb-6 lg:pt-1.5 lg:pb-0 lg:pr-6 lg:align-top mx-auto",
          )}
        >
          <Image className="max-h-[400px] object-contain" src={image} alt="Screenshot" height={400} width={600} />
        </div>
        <div className={classNames(mobile ? "lg:basis-2/3" : "lg:basis-1/2")}>{children}</div>
      </div>
    </Section>
  );
}
