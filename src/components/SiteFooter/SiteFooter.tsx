import { Container } from "~/components/Container/Container";
import { SmartLink } from "~/components/SmartLink/SmartLink";
import { site } from "~/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>
          © {__BUILD_YEAR__} {site.company}
        </p>
        <ul className={styles.links}>
          <li>
            <SmartLink href={site.links.bookCall}>Book a call</SmartLink>
          </li>
          <li>
            <SmartLink href={site.links.linkedIn}>LinkedIn</SmartLink>
          </li>
          <li>
            <SmartLink href={site.links.github}>GitHub</SmartLink>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
