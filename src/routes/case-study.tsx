import { Link } from "react-router";
import type { Route } from "./+types/case-study";
import { FactList } from "~/components/CaseStudy/FactList";
import { PathList } from "~/components/CaseStudy/PathList";
import { CaseStudySections } from "~/components/CaseStudy/Sections";
import { Container } from "~/components/Container/Container";
import { Label } from "~/components/Label/Label";
import { NotFound } from "~/components/NotFound/NotFound";
import { SmartLink } from "~/components/SmartLink/SmartLink";
import { TagList } from "~/components/TagList/TagList";
import { findCaseStudy, nextCaseStudy } from "~/content/caseStudies";
import { pageMeta } from "~/lib/meta";
import styles from "./case-study.module.css";

// Content is bundled and typed, so the page reads it directly rather than
// through a loader. Unknown slugs render the not-found page on the client.
export const meta: Route.MetaFunction = ({ params }) => {
  const study = findCaseStudy(params.slug);
  return study
    ? pageMeta({ title: study.name, description: study.intro, path: `/work/${study.slug}` })
    : [{ name: "robots", content: "noindex" }];
};

export default function CaseStudyPage({ params }: Route.ComponentProps) {
  const study = findCaseStudy(params.slug);
  if (!study) return <NotFound />;
  const next = nextCaseStudy(study.slug);

  return (
    <article>
      <Container as="header" className={styles.hero}>
        <Link to="/work" className={styles.breadcrumb}>
          <span aria-hidden="true">←</span> Work / {study.name}
        </Link>
        <h1 className={styles.title}>{study.headline}</h1>
        <p className={styles.lead}>{study.intro}</p>
        <FactList facts={study.facts} />
      </Container>

      {study.path ? (
        <section className={styles.pathBand} aria-labelledby="path-label">
          <Container className={styles.pathInner}>
            <Label as="h2" id="path-label">
              Path at {study.name}
            </Label>
            <PathList steps={study.path} />
          </Container>
        </section>
      ) : null}

      <Container className={styles.body}>
        <aside className={styles.aside}>
          <Label as="h2">Themes</Label>
          <TagList tags={study.themes} label={`${study.name} themes`} />
          {study.links.length > 0 ? (
            <>
              <Label as="h2" className={styles.asideHeading}>
                Further reading
              </Label>
              <ul className={styles.links}>
                {study.links.map(({ label, href }) => (
                  <li key={href}>
                    <SmartLink href={href}>
                      {label} <span aria-hidden="true">↗</span>
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </aside>
        <div className={styles.content}>
          <CaseStudySections sections={study.sections} />
        </div>
      </Container>

      <nav aria-label="Next case study" className={styles.nextBand}>
        <Container>
          <Link to={`/work/${next.slug}`} className={styles.next}>
            <Label as="span">Next case study</Label>
            <span className={styles.nextName}>
              {next.name}, {next.role} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </Container>
      </nav>
    </article>
  );
}
