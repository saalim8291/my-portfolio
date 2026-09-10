import { FreelancerIcon, GithubIcon, LeetCodeIcon, LinkedinIcon } from "@/components/icons/Icons";
import styles from "./Hero.module.scss";

const TAGS = ["· Open Source", "· TypeScript", "React"];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          {/* <ul className={styles.hero__tags}>
            <li key="Full-Stack Developer" className={styles.hero__tag}>
              Full-Stack Developer
            </li>
          </ul>
          <ul className={styles.hero__tags}>
            {TAGS.map((tag) => (
              <li key={tag} className={styles.hero__tag}>
                {tag}
              </li>
            ))}
          </ul> */}

          <h1 className={styles.hero__title}>
            Hello,
            <br /> I&rsquo;m Saalim Bhatkar
            <br /> Building delightful web experiences
          </h1>

          <p className={styles.hero__description}>
            I design and build performant web applications and developer tools. My focus is on clear architecture, delightful interfaces, and measurable impact. Currently helping
            teams scale frontend systems and shipping open-source libraries.
          </p>

          <div className={styles.hero__cta}>
            <a href="#projects" className={styles.hero__button}>
              See Projects
            </a>
            <a href="./Saalim-Bhatkar-Resume.pdf" className={`${styles.hero__button} ${styles["hero__button--outline"]}`} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
          </div>

          <div className={styles.hero__socials}>
            <a href="https://www.linkedin.com/in/saalim-bhatkar-4b9b2b1a9/" className={styles.hero__socialLink} target="_blank" rel="noreferrer">
              <LinkedinIcon className={styles.hero__socialIcon} />
              LinkedIn
            </a>
            <a href="https://www.freelancer.in/u/saalim8291" className={styles.hero__socialLink} target="_blank" rel="noreferrer">
              <FreelancerIcon className={styles.hero__socialIcon} />
              Freelancer
            </a>
            <a href="https://github.com/saalim8291" className={styles.hero__socialLink} target="_blank" rel="noreferrer">
              <GithubIcon className={styles.hero__socialIcon} />
              GitHub
            </a>
            <a href="https://www.freelancer.in/u/saalim8291" className={styles.hero__socialLink} target="_blank" rel="noreferrer">
              <LeetCodeIcon className={styles.hero__socialIcon} />
              LeetCode
            </a>
          </div>
        </div>

        <div className={styles.hero__media}>
          <div className={styles.hero__portrait} role="img" aria-label="Saalim Bhatkar working at a desk with multiple monitors">
            <div className={styles.hero__portraitDesk}>
              <div className={styles.hero__portraitScreen} />
              <div className={styles.hero__portraitScreen} />
              <div className={styles.hero__portraitKeyboard} />
            </div>
            <div className={styles.hero__portraitGlow} />
          </div>
        </div>
      </div>
    </section>
  );
}
