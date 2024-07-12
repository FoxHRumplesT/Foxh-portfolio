import { FC } from "react";
import styles from "./footer.module.scss";

interface FooterProps {
  lng: string;
}
 
const Footer: FC<FooterProps> = ({
  lng,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.rights}>© 2024 Julian Rojas. All rights reserved.</div>
        <div className={styles.socials}></div>
      </div>
    </footer>
  );
}
 
export default Footer;