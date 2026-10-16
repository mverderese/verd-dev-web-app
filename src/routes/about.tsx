import type { Route } from "./+types/about";
import { Container } from "~/components/Container/Container";
import { Label } from "~/components/Label/Label";
import { photos, timeline } from "~/content/profile";
import { pageMeta } from "~/lib/meta";
import { site } from "~/lib/site";
import styles from "./about.module.css";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: "About",
    description: `${site.name} is an engineering leader in ${site.location}, building products from hackathon apps to AI platforms at HubSpot scale.`,
    path: "/about",
  });

export default function About() {
  return (
    <>
      <Container as="header" className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>
            Hey, I&apos;m Mike<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lead}>
            I&apos;m an engineering leader based in {site.location}. I&apos;ve spent more than a decade building
            products at every stage, from a hackathon app to AI platforms at HubSpot scale.
          </p>
        </div>
        <img className={styles.portrait} src="/images/headshot.jpg" alt={site.name} width={720} height={720} />
      </Container>

      <Container className={styles.story}>
        <div className={styles.storyText}>
          <p>
            It started at Rutgers, when a friend and I built Shots iGot at the Princeton Hackathon. Nearly 10,000 people
            used it in three months, and I was hooked on building things people want. After graduating I co-founded Tag,
            raised from investors including Tim Draper, Eduardo Saverin and Mark Cuban, and sold it to Mark Cuban
            Companies.
          </p>
          <p>
            Since then I&apos;ve rebuilt the Starbucks online store as a consultant, built the API and DevOps platform
            at Renew, co-founded Odin and bootstrapped it to $1M in its first year, and led engineering at the agency
            Red Krypton.
          </p>
          <p>
            In 2024 I joined HubSpot to work on Breeze Assistant. Today I lead the team behind the platform that backs
            nearly all of HubSpot&apos;s customer-facing AI agents.
          </p>
        </div>
        <aside className={styles.timeline} aria-labelledby="timeline-label">
          <Label as="h2" id="timeline-label">
            Timeline
          </Label>
          <ol>
            {timeline.map(({ name, years }) => (
              <li key={name} className={styles.timelineItem}>
                <span>{name}</span>
                <Label as="span">{years}</Label>
              </li>
            ))}
          </ol>
        </aside>
      </Container>

      <section className={styles.lifeBand} aria-labelledby="life-heading">
        <Container className={styles.lifeInner}>
          <div className={styles.lifeHead}>
            <h2 id="life-heading" className={styles.lifeTitle}>
              Off the clock
            </h2>
            <p className={styles.secondary}>
              You&apos;ll usually find me with my wife, Michelle, and our Goldendoodle, Zoey. I like hiking, skiing,
              drumming and Magic: The Gathering, which is how I ended up volunteering on 17Lands.
            </p>
          </div>
          <ul className={styles.photos}>
            {photos.map(({ src, alt, caption }) => (
              <li key={src}>
                <figure className={styles.photo}>
                  <img src={src} alt={alt} width={800} height={800} loading="lazy" decoding="async" />
                  <figcaption>{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
