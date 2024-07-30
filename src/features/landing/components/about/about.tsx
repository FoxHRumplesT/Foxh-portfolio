import Image from "next/image";
import { FC } from "react";
import { IconScrollMouse } from "~/components/icons";
import UiTag from "~/components/ui-tag";
import aboutImage from "~/assets/img/about-image.png";
import bgImage from "~/assets/img/about-bg.png";
import styles from "./about.module.scss";
import { useTranslation } from "~/app/i18n";

interface AboutProps {
  lng: string;
}
 
const About: FC<AboutProps> = async ({
  lng,
}) => {

  const { t } = await useTranslation(lng, 'landing');

  return (
    <section className={styles.section} id="about">
      <Image className={styles.bgImage} src={bgImage} alt="About me descriptive image" />
      <div className={styles.wrapper}>
        <IconScrollMouse className={styles.scrollIcon} />
        <div className={styles.content}>
          <div className={styles.about}>
            <h3 className={styles.title}>{t('about.title')}</h3>
            <div className={styles.textBox}>
              <UiTag className={styles.tag}>p</UiTag>
              <p className={styles.text}>
                {t('about.text')}
              </p>
              <UiTag className={styles.tag} isClosed>p</UiTag>
            </div>
          </div>
          <figure className={styles.figure}>
            <Image src={aboutImage} alt="About me descriptive image" className={styles.image} />
          </figure>
        </div>
      </div>
    </section>
  );
}
 
export default About;