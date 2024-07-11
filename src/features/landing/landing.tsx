import { FC } from "react";
import styles from "./landing.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";

export interface LandingProps {};

const Landing: FC<LandingProps> = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
    </main>
  );
};

export default Landing;
