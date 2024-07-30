import { FC } from "react";
import styles from "./experience.module.scss";
import { IconScrollMouse } from "~/components/icons";
import SectionTitle from "../section-title";
import { Calendar, MapPin } from "react-feather";
import { useTranslation } from "~/app/i18n";

interface ExperienceProps {
  lng: string;
}
 
const Experience: FC<ExperienceProps> = async ({
  lng,
}) => {

  const { t } = await useTranslation(lng, 'landing');

  return (
    <section className={styles.section} id="experience">
      <div className={styles.wrapper}>
        <IconScrollMouse className={styles.scrollIcon} />
        <SectionTitle text={t('experience.title')} className={styles.title} />
        <p className={styles.description}>
          {t('experience.description')}
        </p>
        <div className={styles.experiences}>
          {new Array(6).fill(0).map((_, index) => (
            <div
              key={index}
              className={styles.experience}>
              <div className={styles.info}>
                <div className={styles.companyRole}>
                  <h4 className={styles.role}>{t(`experience.experiences.${index}.role`)}</h4>
                  <p className={styles.company}>{t(`experience.experiences.${index}.company`)}</p>
                </div>
                <div className={styles.dates}>
                  <Calendar className={styles.icon} />
                  <span className={styles.date}>{t(`experience.experiences.${index}.date`)}</span>
                </div>
              </div>
              <div className={styles.location}>
                <MapPin className={styles.icon} />
                <p className={styles.locationName}>
                  {t(`experience.experiences.${index}.location`)}
                </p>
              </div>
              <div className={styles.jobDescription}>{t(`experience.experiences.${index}.description`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Experience;