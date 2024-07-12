import { FC } from "react";
import { ArrowLeft, Briefcase, Download, Link, Mail, MapPin } from "react-feather";
import styles from "./hero.module.scss";
import UiTag from "~/components/ui-tag";

interface HeroProps {
  lng: string;
}
 
const Hero: FC<HeroProps> = ({
  lng,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.mainName}>Developer</div>
        <div className={styles.card}>
          <div className={styles.presentationCard}>
            <div className={styles.img}></div>
            <div className={styles.name}>Julian</div>
            <div className={styles.job}>Full-stack Developer</div>
            <ul className={styles.info}>
              <li className={styles.item}>
                <Mail className={styles.icon} />Jfrojas251@gmail.com
              </li>
              <li className={styles.item}>
                <MapPin className={styles.icon} />Bogotá, Colombia
              </li>
              <li className={styles.item}>
                <Briefcase className={styles.icon} />Full time / Freelance
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
              Download CV <Download className={styles.icon} />
            </button>
          </div>
        </div>
        <div className={styles.mainInfo}>
          <UiTag className={styles.tag}>h1</UiTag>
          <h1 className={styles.mainText}>
            Hey{`\n`}
            I’m <span className={styles.name}>Julian</span>,{`\n`}
            Full-stack developer
          </h1>
          <UiTag className={styles.tag} isClosed>h1</UiTag>
          <UiTag className={`${styles.tag} ${styles.p}`}>p</UiTag>
          <p className={styles.resume}>
            I help business grow by crafting amazing web experiences.{`\n`}
            If you’re looking for a developer that likes to get stuff done.
          </p>
          <UiTag className={styles.tag} isClosed>p</UiTag>
          <button className={styles.mainCta}>
            let’s talk
            <span className={styles.circle}>
              <Mail className={styles.icon} />
            </span>
            <ArrowLeft className={styles.arrow} />
          </button>
        </div>
        <div className={styles.topSkills}>
          <div className={styles.skill}>
            <span className={styles.value}>5</span>
            <span className={styles.name}>Programming{`\n`}Languages</span>
          </div>
          <div className={styles.skill}>
            <span className={styles.value}>4</span>
            <span className={styles.name}>Development{`\n`}Tools</span>
          </div>
          <div className={styles.skill}>
            <span className={styles.value}>6</span>
            <span className={styles.name}>Years of{`\n`}Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;