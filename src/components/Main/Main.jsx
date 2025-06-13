import styles from "./Main.module.css";
import Section from "./Section";

const Main = () => {
  return (
    <main className={styles.main}>
      <Section
        date="Feb 2024 - Present"
        company="Martinez Accounting Services (MAS) + AccoFLOW!"
        role="Software Engineer"
        link="https://accoflow.com/"
      />
      <Section
        date="Apr 2023 - Sep 2023"
        company="Vadai"
        role="Software Developer"
        link="#"
      />
      <Section
        date="Ene 2023 - Apr 2023"
        company="Citelis"
        role="IT Help Desk"
        link="#"
      />
    </main>
  );
};

export default Main;
