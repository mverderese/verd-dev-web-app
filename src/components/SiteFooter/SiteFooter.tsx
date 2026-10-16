import { Container } from "~/components/Container/Container";
import { mailto, site } from "~/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {site.company}
        </p>
        <ul className={styles.links}>
          <li>
            <a href={mailto}>{site.email}</a>
          </li>
          <li>
            <a href={site.links.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
