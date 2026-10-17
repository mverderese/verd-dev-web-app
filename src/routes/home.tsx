import { Link } from "react-router";
import type { Route } from "./+types/home";
import { ButtonGroup, ButtonLink } from "~/components/ButtonLink/ButtonLink";
import { Container } from "~/components/Container/Container";
import { CtaBand } from "~/components/CtaBand/CtaBand";
import { Label } from "~/components/Label/Label";
import { ProjectCardGrid } from "~/components/ProjectCard/ProjectCard";
import { highlightedCaseStudies } from "~/content/caseStudies";
import { strengths } from "~/content/profile";
import { pageMeta } from "~/lib/meta";
import { site } from "~/lib/site";
import styles from "./home.module.css";

export const meta: Route.MetaFunction = () => pageMeta({ path: "/" });

export default function Home() {
  return (
    <>
      <Container>
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <h1 id="hero-heading" className={styles.heroTitle}>
              {site.tagline}
            </h1>
            <p className={styles.lead}>
              I lead the Breeze AI Platform team at HubSpot, the platform behind nearly all of its customer-facing AI
              agents. Through {site.companyShort}, I occasionally advise and build alongside other teams.
            </p>
            <ButtonGroup>
              <ButtonLink href={site.links.bookCall} fullWidthOnMobile>
                Book a call
              </ButtonLink>
              <ButtonLink href="/consulting" variant="secondary" fullWidthOnMobile>
                Consulting
              </ButtonLink>
            </ButtonGroup>
          </div>
          <figure className={styles.portrait}>
            <img src="/images/headshot.jpg" alt={site.name} width={720} height={720} fetchPriority="high" />
            <figcaption>
              <span>{site.location}</span>
              <span>Remote</span>
            </figcaption>
          </figure>
        </section>

        <section className={styles.now} aria-labelledby="now-label">
          <Label as="h2" id="now-label" className={styles.fullRow}>
            01 / Now
          </Label>
          <article className={styles.nowItem}>
            <Label tone="accent">HubSpot · 2024 –</Label>
            <h3 className={styles.nowTitle}>Staff Engineering Manager, Breeze AI Platform</h3>
            <p className={styles.secondary}>
              I lead the team behind the platform that backs nearly all of HubSpot&apos;s customer-facing AI agents,
              including Breeze Assistant.
            </p>
          </article>
          <article className={styles.nowItem}>
            <Label tone="accent">{site.companyShort}</Label>
            <h3 className={styles.nowTitle}>
              <Link to="/consulting">Advice from someone who builds it.</Link>
            </h3>
            <p className={styles.secondary}>
              Selective audits, advisory and hands-on builds for teams putting AI into production.
            </p>
          </article>
        </section>

        <section className={styles.work} aria-labelledby="work-label">
          <div className={styles.sectionHead}>
            <Label as="h2" id="work-label">
              02 / Selected work
            </Label>
            <Link to="/work" className={styles.allLink}>
              All work <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ProjectCardGrid studies={highlightedCaseStudies} />
        </section>

        <section className={styles.strengths} aria-labelledby="strengths-label">
          <Label as="h2" id="strengths-label">
            03 / What I&apos;m good at
          </Label>
          <ul className={styles.strengthList}>
            {strengths.map(({ title, body }) => (
              <li key={title} className={styles.strength}>
                <h3 className={styles.strengthTitle}>{title}</h3>
                <p className={styles.secondary}>{body}</p>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <CtaBand
        eyebrow={site.companyShort}
        heading="Have an AI problem worth solving? Let's talk."
        actions={
          <ButtonGroup>
            <ButtonLink href={site.links.bookCall} variant="inverse" fullWidthOnMobile>
              Book a call
            </ButtonLink>
          </ButtonGroup>
        }
      />
    </>
  );
}
