import { FC } from "react";
import styles from "./contact.module.scss";
import { IconScrollMouse } from "~/components/icons";
import SectionTitle from "../section-title";
import { Send } from "react-feather";
import { useTranslation } from "~/app/i18n";

interface ContactProps {
  lng: string;
}
 
const Contact: FC<ContactProps> = async ({
  lng,
}) => {

  const { t } = await useTranslation(lng, 'landing');

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <SectionTitle text={t('contact.title')} className={styles.title} />
        <p className={styles.description}>
          {t('contact.description')}
        </p>
        <h3 className={styles.ctaTitle}>{t('contact.ctaTitle')}</h3>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <fieldset className={styles.fieldset}>
              <label htmlFor="name" className={styles.label}>
                {t('contact.form.nameLabel')}
              </label>
              <div className={styles.inputBox}>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label htmlFor="email" className={styles.label}>
                {t('contact.form.emailLabel')}
              </label>
              <div className={styles.inputBox}>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
            </fieldset>
          </div>
          <div className={styles.formGroup}>
            <fieldset className={styles.fieldset}>
              <label htmlFor="message" className={styles.label}>
                {t('contact.form.messageLabel')}
              </label>
              <div className={styles.inputBox}>
                <textarea
                  id="message"
                  className={styles.input}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
            </fieldset>
          </div>
          <button className={styles.cta}>
            {t('contact.form.cta')}
            <Send className={styles.icon} />
          </button>
        </form>
      </div>
    </section>
  );
}
 
export default Contact;