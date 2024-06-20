import { JOB_TITLE, MY_NAME, TAGLINE } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import Card from "@/app/_components/marketing/Card";
import H2 from "@/app/_components/marketing/H2";
import Subtitle from "@/app/_components/marketing/Subtitle";
import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";

export default function Home() {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image src="/mike-headshot.jpg" alt="Image" className="rounded-full" height={200} width={200} />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{MY_NAME}</h6>

          <H1>{JOB_TITLE}</H1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">{TAGLINE}</p>

          <a
            href="/about"
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Learn more
          </a>
        </div>
      </Section>
      <Section darkBg>
        <div className="container max-w-screen-xl mx-auto px-4">
          <H2>Portfolio</H2>
          <Subtitle>These are some of my best projects.</Subtitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects
              .filter((p) => p.highlighted)
              .map((project) => (
                <Card
                  image={project.image}
                  title={project.title}
                  key={project.title}
                  link={`/portfolio/${project.slug}`}
                >
                  {project.description}
                </Card>
              ))}
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center pt-16">
            <a
              href="/portfolio"
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              See all
            </a>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container max-w-screen-xl mx-auto px-4"></div>
      </Section>
    </>
  );
}
