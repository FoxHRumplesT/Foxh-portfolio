import { FC } from "react";
import styles from "./footer.module.scss";

interface FooterProps {
  
}
 
const Footer: FC<FooterProps> = () => {
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