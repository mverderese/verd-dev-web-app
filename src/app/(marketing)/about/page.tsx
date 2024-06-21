import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";
import H4 from "@/app/_components/marketing/H4";
import PortfolioGrid from "@/app/_components/marketing/PortfolioGrid";
import TextLink from "@/app/_components/marketing/TextLink";

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="flex flex-wrap">
          <div className="basis-full lg:basis-1/3 pb-6 lg:pb-0 lg:pt-3 lg:pr-6 ">
            <Image src="/mike-headshot-2.jpg" alt="Image" height={500} width={500} />
          </div>
          <div className="basis-full lg:basis-2/3 ">
            <H1>Hey, I&apos;m Mike</H1>
            <BodyText>
              <BodyParagraph>
                I’m a Jersey-born Software Engineering Leader currently living in Philadelphia. I’m extremely passionate
                about using my skills to develop products that can improve the overall well-being of our world. I’ve
                done work in many different industries, including healthcare, construction, ecommerce, and social. I
                pride myself on my ability to lead on every phase of a product from ideation to architecture,
                development, deployment, and growth. My strong communication skills allow me to work with engineers,
                designers, product managers, stakeholders, and customers, while bridging the frequent gaps between these
                groups.
              </BodyParagraph>
            </BodyText>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap-reverse lg:flex-wrap">
          <div className="basis-full lg:basis-2/3 ">
            <H2>Rutgers University</H2>
            <H4>Bachelor of Science, Computer Science</H4>
            <BodyText>
              <BodyParagraph>
                From a young age, I always had a fascination with computers and engineering. I built my first computer
                with my dad in middle school, which only made me more intrigued with them. From there I started buying
                robotics kits, which is how I got my first taste of experimenting with hardware and software, while
                learning some very basic coding – literally learning basic. When I took my first programming class in
                high school, I immediately fell in love with it. I could build anything I wanted to without having to
                buy any parts or worrying about permanently messing anything up, although I had my fair share of
                reformatting hosted Windows OS’s from my tinkering.
              </BodyParagraph>
              <BodyParagraph>
                Rutgers was always at the top of my list of colleges because of its top-notch Computer Science
                department, big school feel, and affordable cost (you’re welcome mom and dad!). There were different
                areas you could focus on in the CS major, and I realized very quickly that I wanted to pursue software
                engineering. I made sure to take every class that would contribute to my ability to create products,
                including Software Methodology, Internet Technology, Introduction to Databases along with all the usual
                algorithm and math classes that come with a CS degree.
              </BodyParagraph>
            </BodyText>
          </div>
          <div className="basis-full lg:basis-1/3 pb-6 lg:pb-0 lg:pt-3 lg:pr-6 ">
            <Image src="/icons/rutgers-logo.png" alt="Image" height={500} width={500} />
          </div>
        </div>
      </Section>
      <Section narrowTop narrowBottom>
        <div className="">
          <H2>Catching the Entrepreneurial Bug</H2>
          <BodyText>
            <BodyParagraph>
              During my senior year, my friend Josh reached out to me with an idea for an iPhone app that he had been
              working on for a year or so. He had been sending out surveys to people all over school asking them how
              many shots were in different sized water bottles, and realized people were grossly misestimating how much
              alcohol they were consuming. The app would allow people to virtually fill up water bottles with alcohol,
              so that they could get an accurate look at how much they were drinking in a night. We took the idea to the
              Princeton Hackathon and won the Crowd-Favorite Project award with{" "}
              <TextLink link="/portfolio/projects/shots-igot">Shots iGot</TextLink>. With nothing other than a backpack
              full of flyers that we printed out in the library with our school printing credit and exciting
              word-of-mouth, we were able to gain nearly 10,000 users and were covered in multiple media outlets,
              including the Huffington Post.
            </BodyParagraph>
            <BodyParagraph>
              Once I got a taste of building a whole product and company from scratch, I was hooked. I realized I wanted
              to go into the startup world right out of college, and I was going to do everything I could to make that
              happen. Josh and I leveraged the momentum we gained from Shots iGot and started attending founder
              networking events. At one of these events, we met Aneel, who was looking to build a social location
              sharing app. We brought in my other friend Doug, who was also pursuing a CS degree, and the four of us
              created a company that went on to become <TextLink link="/portfolio/projects/tag">Tag</TextLink>. We
              started with Aneel’s idea, rented an apartment in New York, built out an MVP, and raised funding from
              investors, including Tim Draper, Eduardo Saverin, and Mark Cuban. From there we expanded our team, created
              a campus ambassador program, grew to tens of thousands of users within months, and were eventually
              acquired by Mark Cuban Companies.
            </BodyParagraph>
          </BodyText>
        </div>
      </Section>
      <Section narrowTop narrowBottom>
        <div className="">
          <H2>Nurturing My Skills for Over 10 Years</H2>
          <BodyText>
            <BodyParagraph>
              I brought this passion for product, scrappiness, and hard work ethic to every place I’ve worked since
              those early days of building companies out of dorm rooms and apartments. For the last ten years, I’ve done
              work for companies of all different sizes, from pre-seed startups to multi-billion dollar corporations. I
              was contracted to rebuild the entire{" "}
              <TextLink link="/portfolio/projects/starbucks">Starbucks Ecommerce Store</TextLink> with a team of four
              engineers in three months, helping them generate over $100 million in revenue during the holiday season.
              From there, I joined Renew as their first software engineer, building the API and DevOps process for the
              Medicare Plan Finder and Customer Success platforms while leading and mentoring other engineers on the
              team.
            </BodyParagraph>
            <BodyParagraph>
              In 2020, I decided to get back in the founder seat. Doug reached out to me and said he was starting a
              construction tech company that would improve site safety and compliance and needed a technical co-founder,
              as he would be taking the CEO role. Our colleague, Dawn – formerly the Head of Product at Renew – joined
              the founding team, and we set out to create <TextLink link="/portfolio/projects/odin">Odin</TextLink>, a
              best-in-class workforce management and visibility platform for construction. Even through the challenges
              of a global pandemic, economic downturn, and a slowdown in construction, we raised funding from top VCs,
              including First Round and Fifth Wall, grew a team, and landed dozens of construction projects. Today, Odin
              manages over 20,000 workers across 700 contractors around the country. I have since stepped down from my
              full-time CTO role at Odin, but I’m extremely proud of what we built together and the increased safety we
              brought to one of the most dangerous professions in the world.
            </BodyParagraph>
            <BodyParagraph>
              I am currently working as the Head of Engineering of Red Krypton, a design, development, and marketing
              agency, helping companies of all sizes build and scale their technology offerings, grow their audience,
              and improve their profitability. <TextLink link="/portfolio/projects/great-many">Great Many</TextLink> is
              a hair restoration company that we had the opportunity to work with from their founding. I was responsible
              for working with their team to develop a custom booking flow for their flagship PRP service and a seamless
              telehealth experience for prescription products. I look forward to seeing how every one of Red Krypton’s
              clients grow their businesses.
            </BodyParagraph>
          </BodyText>
        </div>
      </Section>
      <Section narrowTop narrowBottom>
        <H2>Life is an Ongoing Adventure</H2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Image src="/hiking.jpeg" alt="Hiking" height={500} width={500} />
          <Image src="/zoey2.png" alt="Zoey" height={500} width={500} />
          <Image src="/drumming.jpeg" alt="Drumming" height={500} width={500} />
        </div>
        <BodyText>
          <BodyParagraph>
            While I am extremely proud of my professional accomplishments, I get the most joy in my life from my
            incredible wife, Michelle, and my precious Goldendoodle, Zoey. When we’re not exploring coffee shops and
            vegan restaurants in Philadelphia, I love traveling, hiking, skiing, drumming and playing Magic: The
            Gathering. Magic actually led me to a fun passion project I volunteer on, called{" "}
            <TextLink link="/portfolio/projects/17-lands">17Lands</TextLink>.
          </BodyParagraph>
          <BodyParagraph>
            While life is an adventure of the unknown, based on my experiences so far, I’m sure of one thing: whatever
            the next chapter of life brings in my personal and professional world, it’s going to be exciting!
          </BodyParagraph>
        </BodyText>
      </Section>
      <Section>
        <H2>Want to see some of my work?</H2>
        <PortfolioGrid onlyHighlighted />
      </Section>
    </>
  );
}
