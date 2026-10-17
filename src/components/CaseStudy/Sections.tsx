import type { CaseStudySection } from "~/content/schema";
import styles from "./CaseStudy.module.css";

export function CaseStudySections({ sections }: { sections: readonly CaseStudySection[] }) {
  return (
    <div className={styles.sections}>
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
}

function Section({ section }: { section: CaseStudySection }) {
  switch (section.type) {
    case "prose":
      return (
        <section className={styles.block}>
          <h2 className={styles.heading}>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.prose}>
              {paragraph}
            </p>
          ))}
        </section>
      );
    case "list":
      return (
        <section className={styles.block}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <ul className={styles.list}>
            {section.items.map((item, index) => (
              <li key={item.body} className={styles.listItem}>
                {section.style === "numbered" ? (
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <span>
                  {item.title ? <strong className={styles.itemTitle}>{item.title}</strong> : null}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </section>
      );
    case "metrics":
      return (
        <section className={styles.block}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <dl className={styles.metrics}>
            {section.items.map(({ value, label }) => (
              <div key={label} className={styles.metric}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "figure":
      return (
        <figure className={styles.figure}>
          <img
            src={section.src}
            alt={section.alt}
            width={section.width}
            height={section.height}
            loading="lazy"
            decoding="async"
          />
          {section.caption ? <figcaption>{section.caption}</figcaption> : null}
        </figure>
      );
    case "video":
      return (
        <div className={styles.video}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${section.youtubeId}`}
            title={section.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      );
  }
}
