import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import H2 from "@/app/(marketing)/_components/H2";
import TextLink from "@/app/(marketing)/_components/TextLink";

export default function TagContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/tag-marketing.jpeg"}>
        <BodyText>
          <BodyParagraph>
            Right after college, I moved to New York to co-found a location-based social app called{" "}
            <TextLink
              link="https://www.forbes.com/sites/alextaub/2014/04/03/new-app-tag-lets-you-privately-share-your-location-with-friends/"
              newTab
            >
              Tag
            </TextLink>{" "}
            with three partners. At the time, sharing locations on Foursquare was a popular trend, but many users
            preferred not to broadcast their whereabouts to their entire following. With Snapchat gaining traction, we
            envisioned an app where users could send a pin of their location along with a picture or video to select
            friends individually. This concept aimed to help friends discover their proximity to each other, encouraging
            spontaneous meetups.
          </BodyParagraph>
          <BodyParagraph>
            In under a year, with a small team of two engineers and a UX designer, we developed a fully-functional
            iPhone and Android app with a Python-based REST API. Our app featured capabilities on par with major social
            media platforms, including doodling on pictures, video, push notifications, social sign-in, and a beautiful,
            user-friendly UI. This swift delivery of a high-quality product enabled us to raise over a million dollars
            in seed funding from renowned angel investors, including Mark Cuban, Tim Draper, and Eduardo Saverin.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <ScreenshotPanel image={"/screenshots/tag-feed.jpg"} reverse twoThirdsText darkBg>
        <H2>Disrupting the Social App Landscape</H2>
        <BodyText>
          <BodyParagraph>
            In 2014, we identified Penn State as the first school for a full campus launch. We packed the car with
            posters, swag, and handouts and headed to Happy Valley to create a grassroots marketing team. Students were
            eager to help, recognizing the value of Tag and wanting their friends to join. We organized a campus
            ambassador program, hosted parties, ran giveaway contests, and generated as much buzz as possible.
            Unbeknownst to us, another social app called CyberDust, backed by Mark Cuban, was attempting to launch
            simultaneously but struggled due to the excitement around Tag. This led Mark Cuban to request an
            introduction to our team, expressing interest in investing in our company.
          </BodyParagraph>
          <BodyParagraph>
            We capitalized on the momentum we gained at Penn State and kicked off a seed funding round. Investors we
            spoke to were extremely excited about the quality of our product and team and were impressed at the success
            we had with our Penn State Campus Ambassador Program. We raised over a million dollars in seed funding from
            renowned angel investors, including Mark Cuban, Tim Draper, and Eduardo Saverin with the goal of replicating
            our campus launch at schools across the country.
          </BodyParagraph>
          <BodyParagraph>
            Over the next year, we recreated the Penn State excitement at various campuses, including the University of
            Texas and USC. We formed partnerships with celebrities and professional sports teams, including the{" "}
            <TextLink link="https://www.nba.com/kings/blog/kings-now-testing-tag/" newTab>
              Sacramento Kings
            </TextLink>
            . Despite the excitement surrounding Tag, we had to continuously innovate to stay competitive in the social
            app space. Our major addition was “Journeys,” allowing users to temporarily share their location with their
            entire friend list, similar to a Snapchat story, but with the option to share a general region instead of a
            specific location.
          </BodyParagraph>
          <BodyParagraph>
            In 2015, our journey with Tag came to an end. Despite our best efforts and significant traction, we couldn’t
            surpass the dominance of major players like Snapchat. Nonetheless, we built an incredible product that I’m
            extremely proud of, and our investors recognized its value. We sold the app to Mark Cuban Companies,
            enabling the integration of our technology into their portfolio. During my three years at Tag, I acquired
            skills that I carry with me to every new endeavor: scrappiness, self-sufficiency, perseverance, and
            determination.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
