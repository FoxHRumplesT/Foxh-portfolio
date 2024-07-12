import { FC } from "react";
import styles from "./footer.module.scss";
import { useTranslation } from "~/app/i18n";

interface FooterProps {
  lng: string;
}
 
const Footer: FC<FooterProps> = async({
  lng,
}) => {

  const { t } = await useTranslation(lng, 'landing');

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.rights}>{t('footer.rights', { year: new Date().getFullYear() })}</div>
        <div className={styles.socials}></div>
      </div>
    </footer>
  );
}
 
export default Footer;