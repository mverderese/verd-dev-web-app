import type { Route } from "./+types/consulting";
import { ButtonGroup, ButtonLink } from "~/components/ButtonLink/ButtonLink";
import { Container } from "~/components/Container/Container";
import { Label } from "~/components/Label/Label";
import { Mark } from "~/components/Mark/Mark";
import { clients, process, services } from "~/content/profile";
import { pageMeta } from "~/lib/meta";
import { site } from "~/lib/site";
import styles from "./consulting.module.css";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: "Consulting",
    description:
      "Through Verderese Development, Mike Verderese helps teams plan, build and scale AI products: fixed-scope audits, advisory and hands-on builds.",
    path: "/consulting",
  });

export default function Consulting() {
  return (
    <>
      <Container as="header" className={styles.hero}>
        <p className={styles.company}>
          <Mark size="md" />
          <span className={styles.companyText}>
            <span className={styles.companyName}>{site.companyShort}</span>
            <Label as="span">LLC · {site.location}</Label>
          </span>
        </p>
        <h1 className={styles.title}>Advice from someone who ships AI in production.</h1>
        <p className={styles.lead}>
          Through {site.companyShort}, I help teams plan, build and scale AI products. My day job is running an AI
          platform at HubSpot, so the advice comes from production, not slides.
        </p>
      </Container>

      <Container as="section" className={styles.services} aria-labelledby="services-label">
        <Label as="h2" id="services-label">
          01 / Ways to work together
        </Label>
        <ul className={styles.serviceList}>
          {services.map(({ label, title, body }) => (
            <li key={title} className={styles.service}>
              <Label tone="accent">{label}</Label>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.secondary}>{body}</p>
            </li>
          ))}
        </ul>
      </Container>

      <section className={styles.processBand} aria-labelledby="process-label">
        <Container className={styles.processInner}>
          <Label as="h2" id="process-label">
            02 / How it works
          </Label>
          <ol className={styles.processList}>
            {process.map(({ title, body }, index) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.secondary}>{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container as="section" className={styles.clients} aria-labelledby="clients-label">
        <Label as="h2" id="clients-label" className={styles.clientsLabel}>
          03 / Selected clients
        </Label>
        <ul className={styles.clientList}>
          {clients.map(({ name, body }) => (
            <li key={name} className={styles.client}>
              <span className={styles.clientName}>{name}</span>
              <span className={styles.secondary}>{body}</span>
            </li>
          ))}
        </ul>
      </Container>

      <section className={styles.contact} aria-labelledby="contact-heading">
        <Container className={styles.contactInner}>
          <div className={styles.contactCopy}>
            <h2 id="contact-heading" className={styles.contactTitle}>
              If it sounds like a fit, get in touch.
            </h2>
            <p className={styles.secondary}>I take on a small number of engagements at a time.</p>
          </div>
          <ButtonGroup>
            <ButtonLink href={site.links.bookCall} fullWidthOnMobile>
              Book a call
            </ButtonLink>
          </ButtonGroup>
        </Container>
      </section>
    </>
  );
}
