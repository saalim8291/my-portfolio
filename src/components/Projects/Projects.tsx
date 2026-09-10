import Image from "next/image";
import styles from "./Projects.module.scss";

type Project = {
  title: string;
  description: string;
  link?: string;
  tags: string[];
  role?: string;
  thumbnail?: string;
  hasThumbnail?: boolean;
  actions: { label: string; href: string; outline?: boolean }[];
};

const PROJECTS: Project[] = [
  {
    title: "Samsung.com",
    description: "Samsung is a leading technology company known for consumer electronics, mobile devices, and innovation across multiple industries.",
    link: "https://www.samsung.com/us",
    tags: ["HTML", "CSS", "Javascript", "JQuery", "React", "AEM"],
    role: "Software Developer",
    thumbnail: "/samsung.jpg",
    hasThumbnail: true,
    actions: [
      { label: "View", href: "#" },
      { label: "Source", href: "#", outline: true },
    ],
  },
  {
    title: "Abbvie",
    description: "AbbVie is a biopharmaceutical company focused on developing innovative medicines and therapies to address serious health conditions.",
    link: "https://www.abbvie.com/",
    tags: ["HTML", "SCSS", "Javascript", "JQuery", "AEM"],
    thumbnail: "/abbvie.avif",
    hasThumbnail: true,
    actions: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__inner}>
        <div className={styles.projects__header}>
          <h2 className={styles.projects__title}>Recent Projects</h2>
          {/* <p className={styles.projects__subtitle}>Featured work that demonstrates front-end architecture, performance, and UX.</p> */}
        </div>

        <div className={styles.projects__grid}>
          {PROJECTS.map((project) => (
            <article key={project.title} className={styles.projects__card}>
              {project.hasThumbnail && project.thumbnail && (
                <div className={styles.projects__thumbnail}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.projects__thumbnailImage}
                    />
                  </a>
                </div>
              )}

              <div className={styles.projects__cardBody}>
                <div className={styles.projects__cardHead}>
                  <h3 className={styles.projects__cardTitle}>{project.title}</h3>
                </div>

                <p className={styles.projects__cardDescription}>{project.description}</p>

                <ul className={styles.projects__cardTags}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.projects__cardTag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* {(project.role || project.actions.length > 0) && (
                  <div className={styles.projects__cardFooter}>
                    {project.role && <span className={styles.projects__cardRole}>{project.role}</span>}
                    {project.actions.length > 0 && (
                      <div className={styles.projects__cardActions}>
                        {project.actions.map((action) => (
                          <a key={action.label} href={action.href} className={`${styles.projects__cardAction} ${action.outline ? styles["projects__cardAction--outline"] : ""}`}>
                            {action.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )} */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
