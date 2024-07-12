import Image from "next/image";
import { FC } from "react";
import { IconScrollMouse } from "~/components/icons";
import UiTag from "~/components/ui-tag";
import aboutImage from "~/assets/img/about-image.png";
import bgImage from "~/assets/img/about-bg.png";
import styles from "./about.module.scss";

interface AboutProps {
  lng: string;
}
 
const About: FC<AboutProps> = ({
  lng,
}) => {
  return (
    <section className={styles.wrapper}>
      <Image className={styles.bgImage} src={bgImage} alt="About me descriptive image" />
      <IconScrollMouse className={styles.scrollIcon} />
      <div className={styles.content}>
        <div className={styles.about}>
          <h3 className={styles.title}>About me</h3>
          <div className={styles.textBox}>
            <UiTag className={styles.tag}>p</UiTag>
            <p className={styles.text}>
              Hello!
              My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
              I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
              When I’m not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
              I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </p>
            <UiTag className={styles.tag} isClosed>p</UiTag>
          </div>
        </div>
        <figure className={styles.figure}>
          <Image src={aboutImage} alt="About me descriptive image" className={styles.image} />
        </figure>
      </div>
    </section>
  );
}
 
export default About;