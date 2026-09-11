"use client";

import { useEffect, useRef } from "react";
import { CodeIcon, DownloadIcon, ResumeIcon } from "@/components/icons/Icons";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  // { label: "Blog", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
    };

    syncHeaderHeight();

    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.header__inner}>
        <a href="#home" className={styles.header__logo}>
          <CodeIcon className={styles.header__logoIcon} />
          <span>Saalim Bhatkar</span>
        </a>

        <nav className={styles.header__nav} aria-label="Primary">
          <ul className={styles.header__navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={styles.header__navItem}>
                <a href={link.href} className={styles.header__navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header__actions}>
          <a href="#contact" className={styles.header__button}>
            Hire Me
          </a>
          <a href="./Saalim-Bhatkar-Resume.pdf" className={`${styles.header__button} ${styles["header__button--outline"]}`} download>
            <ResumeIcon />
            <div>Resume</div>
            <DownloadIcon className={styles.header__downloadIcon} />
          </a>
        </div>
      </div>
    </header>
  );
}
