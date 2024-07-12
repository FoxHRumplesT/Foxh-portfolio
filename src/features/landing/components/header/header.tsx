import { FC } from "react";
import Link from "next/link";
import { Instagram, Linkedin } from "react-feather";
import { useTranslation } from "~/app/i18n";
import styles from "./header.module.scss";
import UiTag from "~/components/ui-tag";

interface HeaderProps {
  lng: string;
}
 
const Header: FC<HeaderProps> = async ({
  lng,
}) => {

  const { i18n } = await useTranslation(lng, 'landing');
  
  return (
    <header className={styles.wrapper}>
      <div className={styles.mainLogo}>
        <UiTag className={styles.logo} isClosed>J </UiTag>
        <h2 className={styles.title}>JulianRojas</h2>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#main" className={styles.link}>
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a href="#about" className={styles.link}>
              About
            </a>
          </li>
          <li className={styles.li}>
            <a href="#experience" className={styles.link}>
              Experience
            </a>
          </li>
        </ul>
      </nav>
      <section className={styles.socials}>
        <a
          className={styles.social}
          href="https://www.linkedin.com/in/julian-rojas"
          target="_blank"
          rel="noreferrer">
          <Linkedin className={styles.icon} />LinkedIn
        </a>
        <a
          className={styles.social}
          href="https://www.linkedin.com/in/julian-rojas"
          target="_blank"
          rel="noreferrer">
          <Instagram className={styles.icon} />Instagram
        </a>
      </section>
      <div className={styles.languages}>
        <Link
          href={`/es`}
          className={`${styles.language} ${i18n.language === 'es' && styles.active}`}>
          ES
        </Link>
        <Link
          href={`/en`}
          className={`${styles.language} ${i18n.language === 'en' && styles.active}`}>
          EN
        </Link>
      </div>
    </header>
  );
}
 
export default Header;