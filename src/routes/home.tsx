import { Link } from "react-router";
import type { Route } from "./+types/home";
import { ButtonGroup, ButtonLink } from "~/components/ButtonLink/ButtonLink";
import { Container } from "~/components/Container/Container";
import { CtaBand } from "~/components/CtaBand/CtaBand";
import { Label } from "~/components/Label/Label";
import { ProjectCardGrid } from "~/components/ProjectCard/ProjectCard";
import { findCaseStudy, highlightedCaseStudies } from "~/content/caseStudies";
import { strengths } from "~/content/profile";
import { formatYears } from "~/lib/format";
import { pageMeta } from "~/lib/meta";
import { site } from "~/lib/site";
import styles from "./home.module.css";

export const meta: Route.MetaFunction = () => pageMeta({ path: "/" });

const hubspot = findCaseStudy("hubspot");

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
              I lead the Breeze AI Platform team at HubSpot. Through {site.companyShort}, I also take on a few outside
              projects.
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
            <Label tone="accent">HubSpot{hubspot ? ` · ${formatYears(hubspot.years)}` : null}</Label>
            <h3 className={styles.nowTitle}>Staff Engineering Manager, Breeze AI Platform</h3>
            <p className={styles.secondary}>
              Agent harnesses, skills and MCP tooling that HubSpot&apos;s product teams build their agents on, including
              Breeze Assistant.
            </p>
          </article>
          <article className={styles.nowItem}>
            <Label tone="accent">{site.companyShort}</Label>
            <h3 className={styles.nowTitle}>
              <Link to="/consulting">Advice from someone who ships AI in production.</Link>
            </h3>
            <p className={styles.secondary}>
              Audits, advisory and hands-on builds for teams putting AI into production.
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
            03 / Strengths
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
        heading="Building with AI? Let's talk it through."
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
