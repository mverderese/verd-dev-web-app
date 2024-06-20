import { MY_NAME, TAGLINE } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";

export default function Home() {
  return (
    <Section>
      <div className="text-center">
        <div className="flex justify-center mb-16">
          <Image src="/mike-headshot.jpg" alt="Image" className="rounded-full" height={200} width={200} />
        </div>

        <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{MY_NAME}</h6>

        <H1>Software Engineering Leader</H1>

        <p className="font-normal text-gray-600 text-md md:text-xl mb-16">{TAGLINE}</p>

        <a
          href="/about"
          className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
        >
          Learn more
        </a>
      </div>
    </Section>
  );
}
