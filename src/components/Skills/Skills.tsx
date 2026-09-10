import styles from "./Skills.module.scss";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JAVASCRIPT", "React", "Next.js", "TypeScript", "SCSS", "TailwindCSS", "GraphQL"],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "MongoDB", "SQL"] },
  { title: "Tools", items: ["Git", "Docker", "Jest"] },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skills__inner}>
        <h2 className={styles.skills__title}>Skills</h2>

        <div className={styles.skills__grid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className={styles.skills__card}>
              <h3 className={styles.skills__cardTitle}>{group.title}</h3>
              <ul className={styles.skills__list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.skills__tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
