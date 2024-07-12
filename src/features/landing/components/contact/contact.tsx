import { FC } from "react";
import styles from "./contact.module.scss";
import { IconScrollMouse } from "~/components/icons";
import SectionTitle from "../section-title";
import { Send } from "react-feather";

interface ContactProps {
  lng: string;
}
 
const Contact: FC<ContactProps> = ({
  lng,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <IconScrollMouse className={styles.scrollIcon} />
        <SectionTitle text="Contact" className={styles.title} />
        <p className={styles.description}>
          I am always open to new opportunities and collaborations.{'\n'}Feel free to reach out.
        </p>
        <h3 className={styles.ctaTitle}>Send me a message</h3>
        <form action="" className={styles.form}>
          <div className={styles.formGroup}>
            <fieldset className={styles.fieldset}>
              <label htmlFor="name" className={styles.label}>
                Your name*
              </label>
              <div className={styles.inputBox}>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your name"
                />
              </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label htmlFor="email" className={styles.label}>
                Your email*
              </label>
              <div className={styles.inputBox}>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your email"
                />
              </div>
            </fieldset>
          </div>
          <div className={styles.formGroup}>
            <fieldset className={styles.fieldset}>
              <label htmlFor="message" className={styles.label}>
                Your message*
              </label>
              <div className={styles.inputBox}>
                <textarea
                  id="message"
                  className={styles.input}
                  placeholder="Enter your message"
                />
              </div>
            </fieldset>
          </div>
          <button className={styles.cta}>
            Send Message
            <Send className={styles.icon} />
          </button>
        </form>
      </div>
    </section>
  );
}
 
export default Contact;