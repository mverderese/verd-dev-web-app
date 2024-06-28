import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import TextLink from "@/app/(marketing)/_components/TextLink";

export default function SeventeenLandsContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/17lands-draft-log.png"} narrowBottom>
        <BodyText>
          <BodyParagraph>
            I&apos;ve been playing the card game Magic: The Gathering, both on paper and online, for over 20 years. In
            2021, a team of volunteer developers and data scientists released{" "}
            <TextLink link="https://17lands.com" newTab>
              17Lands
            </TextLink>
            , a tool that analyzes gameplay for Magic Arena, providing performance data on every card across the player
            base.
          </BodyParagraph>
          <BodyParagraph>
            In April 2023, I joined this volunteer team with a cohort of eight others, more than doubling the number of
            contributors. I immediately took the lead in organizing and refactoring the codebase, introducing formatting
            and linting tools, and ensuring smooth local development for new contributors by cleaning up the Docker
            setup and creating contribution guidelines and processes.
          </BodyParagraph>
          <BodyParagraph>
            Once the team was set up for success, we quickly added long-requested features, leading to the launch of a
            Patreon to help fund AWS costs for running the site. I continue to contribute to this project whenever
            possible and love seeing the community&apos;s excitement with each new improvement we release.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
