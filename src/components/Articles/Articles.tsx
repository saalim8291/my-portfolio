import { ArrowRightIcon } from "@/components/icons/Icons";
import styles from "./Articles.module.scss";

const ARTICLES = [
  {
    title: "Optimizing React Rendering in Large Lists",
    date: "March 12, 2025",
    author: "Saalim Bhatkar",
    excerpt: "Techniques to minimize re-renders, choose the right keys, and leverage virtualization for large data sets.",
  },
  {
    title: "Design Systems That Scale with Teams",
    date: "January 22, 2025",
    author: "Saalim Bhatkar",
    excerpt: "Patterns for tokens, theming and component APIs that keep the product moving fast without breaking consistency.",
  },
  {
    title: "From Monolith to Modular Services",
    date: "October 8, 2024",
    author: "Saalim Bhatkar",
    excerpt: "Experience migrating a legacy monolith into modular services with improved deploy cadence and reliability.",
  },
];

export default function Articles() {
  return (
    <section id="articles" className={styles.articles}>
      <div className={styles.articles__inner}>
        <div className={styles.articles__header}>
          <h2 className={styles.articles__title}>Latest Articles</h2>
          <p className={styles.articles__subtitle}>Thoughts on performance, architecture and team processes.</p>
        </div>

        <div className={styles.articles__grid}>
          {ARTICLES.map((article) => (
            <article key={article.title} className={styles.articles__card}>
              <div className={styles.articles__meta}>
                {article.date} — {article.author}
              </div>
              <h3 className={styles.articles__cardTitle}>{article.title}</h3>
              <p className={styles.articles__excerpt}>{article.excerpt}</p>
              <a href="#" className={styles.articles__link}>
                Read article
                <ArrowRightIcon className={styles.articles__linkIcon} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
