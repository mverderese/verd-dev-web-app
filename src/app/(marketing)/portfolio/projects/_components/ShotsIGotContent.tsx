import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import H2 from "@/app/(marketing)/_components/H2";
import TextLink from "@/app/(marketing)/_components/TextLink";

export default function ShotsIGotContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/shots-igot-sample-usage.png"}>
        <BodyText>
          <BodyParagraph>
            During my senior year, a friend approached me with an idea for an iPhone app he had been developing for
            about a year called Shots iGot. The app aimed to help users accurately gauge their alcohol consumption by
            virtually filling up water bottles, a commonly used container for drinking on-the-go in college. We brought
            this concept to the Princeton Hackathon, built the initial prototype in 48 hours, and presented the demo to
            an enthusiastic audience, winning the Crowd-Favorite Project award.
          </BodyParagraph>
          <BodyParagraph>
            In my spare time while pursuing my Computer Science degree, I continued developing my first app. I learned
            how to create a user-friendly experience, gather feedback from users and iterate, manage data effectively,
            implement a freemium model, and deploy to the App Store.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <ScreenshotPanel image={"/screenshots/shots-igot-news.jpg"} reverse darkBg>
        <H2>A Viral Sensation Across Campuses</H2>
        <BodyText>
          <BodyParagraph>
            Based on the feedback from friends, we knew we had an extremely compelling product, but we had no money for
            marketing, so we created fliers in Photoshop and printed as many as we could at the library.We filled our
            backpacks with these fliers and walked around campus, slipping them under hundreds of dorm room doors.
          </BodyParagraph>
          <BodyParagraph>
            We immediately saw a huge influx of downloads. People were shocked when they realized how much alcohol they
            had been drinking every night and started using the app every time they went out to ensure they didn&apos;t
            over-consume. In the first two weeks, we had over a thousand downloads, with over 10% of users converting
            from the free version to the paid version, which offered dozens of bottles, including water bottles, soda,
            and sports drinks. Eventually, the excitement around Shots iGot took on a life of its own, with users coming
            from schools all over the country. In just a few months, we gained nearly ten thousand users and were
            featured in various media outlets, including the{" "}
            <TextLink link="https://www.huffpost.com/entry/shots-igot-app-liquor-alcohol_n_2728298" newTab>
              Huffington Post
            </TextLink>
            . Watching this growth was incredibly exciting and made me realize that I could actually chase the
            entrepreneurial dream.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
