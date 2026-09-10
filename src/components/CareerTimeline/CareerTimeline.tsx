import styles from "./CareerTimeline.module.scss";

const TIMELINE = [
  {
    id: "exp3",
    period: "May 2024 — Present",
    role: "Frontend Web Developer at Solvative",
    description: "Remote",
  },
  {
    id: "exp2",
    period: "Aug 2022 — May 2024",
    role: "Full-stack Web Developer at Coutloot",
    description: "Mumbai, India",
  },
  {
    id: "exp1",
    period: "Sep 2021 — Aug 2022",
    role: "Frontend Web Developer at Tekno Point/DEPT",
    description: "Mumbai, India",
  },
];

export default function CareerTimeline() {
  return (
    <section id="timeline" className={styles.careerTimeline}>
      <div className={styles.careerTimeline__inner}>
        <h2 className={styles.careerTimeline__title}>Career Timeline</h2>

        <ol className={styles.careerTimeline__list}>
          {TIMELINE.map((entry) => (
            <li key={entry.id} className={`${styles.careerTimeline__item} ${styles[`careerTimeline__item--${entry.id}`]}`}>
              <span className={styles.careerTimeline__period}>{entry.period}</span>
              <h3 className={styles.careerTimeline__role}>{entry.role}</h3>
              <p className={styles.careerTimeline__description}>{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
