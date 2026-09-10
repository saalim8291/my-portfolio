import styles from "./Stats.module.scss";

const STATS = [
  { value: "48", label: "Projects Completed" },
  { value: "86", label: "Open Source Commits" },
  { value: "27", label: "Satisfied Clients" },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__inner}>
        <div className={styles.stats__grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stats__card}>
              <span className={styles.stats__value}>{stat.value}</span>
              <span className={styles.stats__label}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.stats__illustration} aria-hidden="true">
          <div className={styles.stats__illustrationMonitor}>
            <div className={styles.stats__illustrationScreen} />
          </div>
          <div className={styles.stats__illustrationStand} />
        </div>
      </div>
    </section>
  );
}
