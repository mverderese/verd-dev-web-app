import { useEffect, useId, useState } from "react";
import { Link, NavLink } from "react-router";
import { Container } from "~/components/Container/Container";
import { Mark } from "~/components/Mark/Mark";
import { SmartLink } from "~/components/SmartLink/SmartLink";
import { site } from "~/lib/site";
import styles from "./SiteHeader.module.css";

export const primaryNav = [
  { label: "Work", to: "/work" },
  { label: "Consulting", to: "/consulting" },
  { label: "About", to: "/about" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <Mark />
          {site.name}
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMenuOpen((open) => !open);
          }}
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 17h18" />}
          </svg>
        </button>
        <nav id={menuId} aria-label="Primary" className={styles.nav} data-open={menuOpen}>
          <ul className={styles.list}>
            {primaryNav.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <SmartLink href={site.links.resume} className={`${styles.link} ${styles.outlined}`}>
                Resume <span aria-hidden="true">↗</span>
                <span className="visually-hidden">(PDF, opens in a new tab)</span>
              </SmartLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
