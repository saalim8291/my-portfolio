import styles from "./Contact.module.scss";

const QUICK_FACTS = ["Remote-first with flexible overlap hours", "Available for travel up to 2 weeks per quarter", "Prefer TypeScript and component-driven workflows"];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__inner}>
        <div className={styles.contact__form}>
          <h2 className={styles.contact__title}>Let&rsquo;s build something great</h2>
          <p className={styles.contact__subtitle}>Available for freelance and full-time roles. Tell me about your project and timeline.</p>

          <form className={styles.contact__fields}>
            <div className={styles.contact__row}>
              <input type="text" name="name" placeholder="Your name" className={styles.contact__input} />
              <input type="email" name="email" placeholder="Email address" className={styles.contact__input} />
            </div>

            <textarea name="message" placeholder="Briefly describe your project" rows={4} className={styles.contact__textarea} />

            <div className={styles.contact__footer}>
              <p className={styles.contact__direct}>
                Or reach me directly at{" "}
                <a href="mailto:saalim2056@gmail.com" className={styles.contact__email}>
                  saalim2056@gmail.com
                </a>
              </p>
              <button type="submit" className={styles.contact__submit}>
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* <aside className={styles.contact__sidebar}>
          <h3 className={styles.contact__sidebarTitle}>Availability &amp; Rates</h3>
          <p className={styles.contact__sidebarText}>Open to short contracts and long-term engagements. Typical project engagements start at $5,000 for MVPs.</p>

          <div className={styles.contact__rate}>
            <span className={styles.contact__rateLabel}>Hourly rate</span>
            <span className={styles.contact__rateValue}>$95 / hr</span>
          </div>

          <div className={styles.contact__facts}>
            <h4 className={styles.contact__factsTitle}>Quick facts</h4>
            <ul className={styles.contact__factsList}>
              {QUICK_FACTS.map((fact) => (
                <li key={fact} className={styles.contact__factsItem}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </aside> */}
      </div>
    </section>
  );
}
