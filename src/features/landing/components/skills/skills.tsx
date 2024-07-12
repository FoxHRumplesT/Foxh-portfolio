import { FC } from "react";
import styles from "./skills.module.scss";
import { IconScrollMouse } from "~/components/icons";
import SectionTitle from "../section-title";
import { Monitor, Smartphone } from "react-feather";
import { useTranslation } from "~/app/i18n";

interface SkillsProps {
  lng: string;
}
 
const Skills: FC<SkillsProps> = async ({
  lng,
}) => {

  const { t } = await useTranslation(lng, 'landing');

  const skills = [
    {
      name: 'Html',
      icon: <Monitor className={styles.icon} />,
      color: '#E54F26',
    },
    {
      name: 'Css',
      icon: <Monitor className={styles.icon} />,
      color: '#0C73B8',
    },
    {
      name: 'Js',
      icon: <Monitor className={styles.icon} />,
      color: '#E7A020',
    },
    {
      name: 'React',
      icon: <Monitor className={styles.icon} />,
      color: '#28A9E0',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <IconScrollMouse className={styles.scrollIcon} />
        <SectionTitle text={t('skills.title')} className={styles.title} />
        <p className={styles.description}>
          {t('skills.description')}
        </p>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <Monitor className={styles.icon} />
            <h6 className={styles.name}>{t('skills.skillWeb')}</h6>
            <p className={styles.text}>
              Html - Css - Js{'\n'}React - Vue
            </p>
          </div>
          <div className={styles.skill}>
            <Smartphone className={styles.icon} />
            <h6 className={styles.name}>{t('skills.skillApp')}</h6>
            <p className={styles.text}>
              Flutter - React Native
            </p>
          </div>
        </div>
        <div className={styles.technologies}>
          {skills.map(_ => (
            <div
              key={_.name}
              className={styles.item}>
              <div className={styles.iconCircle} style={{ backgroundColor: _.color }}>
                {_.icon}
              </div>
              <p className={styles.name} style={{ color: _.color }}>{_.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Skills;