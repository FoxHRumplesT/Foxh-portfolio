import { FC } from "react";
import styles from "./landing.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";

export interface LandingProps {
  lng: string;
};

const Landing: FC<LandingProps> = ({
  lng,
}) => {
  return (
    <main className={styles.main}>
      <Header lng={lng} />  
      <Hero lng={lng} />  
      <About lng={lng} /> 
      <Experience lng={lng} /> 
      <Skills lng={lng} />  
      <Contact lng={lng} />
      <Footer lng={lng} />  
    </main>
  );
};

export default Landing;
