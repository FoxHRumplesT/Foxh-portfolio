import { FC } from "react";
import styles from "./section-title.module.scss";

interface SectionTitleProps {
  text: string;
  className?: string;
}
 
const SectionTitle: FC<SectionTitleProps> = ({
  text,
  className,
}) => {
  return (
    <h2 className={`${styles.title} ${className}`}>
      {text}
      <span className={styles.line} />
    </h2>
  );
}
 
export default SectionTitle;