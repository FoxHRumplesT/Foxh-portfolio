'use client';
import { FC } from "react";
import { useFormik } from "formik";
import { Send } from "react-feather";
import styles from "./contact.module.scss";
import SectionTitle from "../section-title";
import { useTranslation } from "~/app/i18n/client";

interface ContactProps {
  lng: string;
}
 
const Contact: FC<ContactProps> = ({
  lng,
}) => {

  const { t } = useTranslation(lng, 'landing');

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async (values) => {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => {
        if (response.ok) {
          form.resetForm();
          alert(t('contact.success'));
        } else {
          alert(t('contact.error'));
        }
      });
    },
  });

  return (
    <section className={styles.section} id="contact">
      <div className={styles.wrapper}>
        <SectionTitle text={t('contact.title')} className={styles.title} />
        <p className={styles.description}>
          {t('contact.description')}
        </p>
        <h3 className={styles.ctaTitle}>{t('contact.ctaTitle')}</h3>
        <form className={styles.form} onSubmit={form.handleSubmit}>
          <div className={styles.formGroup}>
            <fieldset className={styles.fieldset}>
              <label htmlFor="name" className={styles.label}>
                {t('contact.form.nameLabel')}
              </label>
              <div className={styles.inputBox}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  value={form.values.name}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
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
                  name="email"
                  type="text"
                  className={styles.input}
                  value={form.values.email}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
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
                  name="message"
                  className={styles.input}
                  value={form.values.message}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
            </fieldset>
          </div>
          <button className={styles.cta} type="submit" disabled={!form.isValid || form.isSubmitting}>
            {t('contact.form.cta')}
            <Send className={styles.icon} />
          </button>
        </form>
      </div>
    </section>
  );
}
 
export default Contact;