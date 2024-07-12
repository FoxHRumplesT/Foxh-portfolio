import { FC } from "react";
import Image from "next/image";
import { ArrowLeft, Briefcase, Download, Link, Mail, MapPin } from "react-feather";
import styles from "./hero.module.scss";
import UiTag from "~/components/ui-tag";
import { useTranslation } from "~/app/i18n";
import mainImage from "~/assets/img/hero-me.jpeg";

interface HeroProps {
  lng: string;
}
 
const Hero: FC<HeroProps> = async ({
  lng,
}) => {

  const { t } = await useTranslation(lng, 'landing');

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.mainName}>{t('hero.mainTitle')}</div>
        <div className={styles.card}>
          <div className={styles.presentationCard}>
            <Image className={styles.img} src={mainImage} alt="Main image" />
            <div className={styles.name}>Julian</div>
            <div className={styles.job}>{t('hero.presentationJob')}</div>
            <ul className={styles.info}>
              <li className={styles.item}>
                <Mail className={styles.icon} />Jfrojas251@gmail.com
              </li>
              <li className={styles.item}>
                <MapPin className={styles.icon} />Bogotá, Colombia
              </li>
              <li className={styles.item}>
                <Briefcase className={styles.icon} />{t('hero.presentationTime')}
              </li>
              <li className={styles.item}>
                <Link className={styles.icon} />Julianrojasdev.com
              </li>
            </ul>
            <ul className={styles.skills}>
              <li className={styles.skill}>
                Html
              </li>
              <li className={styles.skill}>
                Css
              </li>
              <li className={styles.skill}>
                Js
              </li>
              <li className={styles.skill}>
                React
              </li>
            </ul>
            <button className={styles.cta}>
              {t('hero.ctaButton')} <Download className={styles.icon} />
            </button>
          </div>
        </div>
        <div className={styles.mainInfo}>
          <UiTag className={styles.tag}>h1</UiTag>
          <h1 className={styles.mainText} dangerouslySetInnerHTML={{ __html: t('hero.mainText', { name: 'Julián' }) }} />
          <UiTag className={styles.tag} isClosed>h1</UiTag>
          <UiTag className={`${styles.tag} ${styles.p}`}>p</UiTag>
          <p className={styles.resume}>{t('hero.resume')}</p>
          <UiTag className={styles.tag} isClosed>p</UiTag>
          <button className={styles.mainCta}>
            {t('hero.ctaText')}
            <span className={styles.circle}>
              <Mail className={styles.icon} />
            </span>
            <ArrowLeft className={styles.arrow} />
          </button>
        </div>
        <div className={styles.topSkills}>
          <div className={styles.skill}>
            <span className={styles.value}>5</span>
            <span className={styles.name}>{t('hero.topSkillLanguages')}</span>
          </div>
          <div className={styles.skill}>
            <span className={styles.value}>4</span>
            <span className={styles.name}>{t('hero.topSkillTools')}</span>
          </div>
          <div className={styles.skill}>
            <span className={styles.value}>6</span>
            <span className={styles.name}>{t('hero.topSkillYears')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;