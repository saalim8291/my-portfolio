import { CodeIcon, DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/Icons";
import styles from "./Footer.module.scss";

const QUICK_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "GitHub", href: "https://github.com/aidenmarshall", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/aidenmarshall", icon: LinkedinIcon },
  { label: "Dribbble", href: "https://dribbble.com", icon: DribbbleIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__brand}>
          <a href="#home" className={styles.footer__logo}>
            <CodeIcon className={styles.footer__logoIcon} />
            <span>Saalim Bhatkar</span>
          </a>
          <p className={styles.footer__location}>Mumbai, India — Available for remote work worldwide</p>
          <p className={styles.footer__contactLine}>
            Email:{" "}
            <a href="mailto:saalim2056@gmail.com" className={styles.footer__link}>
              saalim2056@gmail.com
            </a>
          </p>
          <a className={styles.footer__contactLine} href="tel:+91829169579">
            +91 829169579
          </a>
        </div>

        <div className={styles.footer__column}>
          <h3 className={styles.footer__heading}>Quick Links</h3>
          <ul className={styles.footer__list}>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.footer__link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h3 className={styles.footer__heading}>Follow</h3>
          <div className={styles.footer__socials}>
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer" className={styles.footer__socialLink}>
                <social.icon className={styles.footer__socialIcon} />
              </a>
            ))}
          </div>
          <p className={styles.footer__copyright}>© {year} Saalim Bhatkar — Building modern web products</p>
        </div>
      </div>
    </footer>
  );
}
