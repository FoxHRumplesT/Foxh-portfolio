import { FC } from "react";
import styles from "./landing.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export interface LandingProps {};

const Landing: FC<LandingProps> = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Landing;
