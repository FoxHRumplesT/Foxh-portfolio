import { FC } from "react";
import styles from "./landing.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";

export interface LandingProps {};

const Landing: FC<LandingProps> = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  );
};

export default Landing;
