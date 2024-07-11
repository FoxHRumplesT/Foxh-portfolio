import { FC } from "react";
import styles from "./ui-tag.module.scss";

interface UiTagProps {
  children: string;
  isClosed?: boolean;
  className?: string;
}
 
const UiTag: FC<UiTagProps> = ({
  children,
  isClosed,
  className,
}) => {
  return (
    <span className={`${styles.tag} ${className}`}>
      &lt;{children}{ isClosed ? '/' : ''}&gt;
    </span>
  );
}
 
export default UiTag;