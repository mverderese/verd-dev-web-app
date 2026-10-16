import type { Route } from "./+types/work";
import { Container } from "~/components/Container/Container";
import { Label } from "~/components/Label/Label";
import { ProjectRowList } from "~/components/ProjectRow/ProjectRow";
import { SmartLink } from "~/components/SmartLink/SmartLink";
import { caseStudies } from "~/content/caseStudies";
import { earlierWork } from "~/content/earlierWork";
import { formatYears } from "~/lib/format";
import { pageMeta } from "~/lib/meta";
import styles from "./work.module.css";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: "Work",
    description: "Case studies from HubSpot, Odin, Great Many, Renew and Starbucks, plus earlier projects.",
    path: "/work",
  });

export default function Work() {
  return (
    <Container className={styles.page}>
      <header className={styles.intro}>
        <h1 className={styles.title}>
          Work<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.lead}>
          More than a decade of building products: two startups I co-founded, consulting for brands like Starbucks, and
          now AI platforms at HubSpot scale.
        </p>
      </header>

      <section aria-label="Case studies">
        <ProjectRowList studies={caseStudies} />
      </section>

      <section className={styles.earlier} aria-labelledby="earlier-label">
        <Label as="h2" id="earlier-label" className={styles.earlierLabel}>
          Earlier
        </Label>
        <ul className={styles.earlierList}>
          {earlierWork.map((item) => (
            <li key={item.name} className={styles.earlierItem}>
              <span className={styles.earlierName}>{item.name}</span>
              <span className={styles.earlierBody}>
                {item.description}
                {item.href && item.linkLabel ? (
                  <>
                    {" "}
                    <SmartLink href={item.href}>{item.linkLabel}</SmartLink>
                  </>
                ) : null}
              </span>
              <Label as="span">{formatYears(item.years)}</Label>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
