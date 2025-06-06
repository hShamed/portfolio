import styles from "./Main.module.css";
import Section from "./Section";

const Main = () => {
  return (
    <main className={styles.main}>
      <Section
        date="Feb 2024 - Present"
        company="Martinez Accounting Services (MAS) + AccoFLOW!"
        role="Software Engineer"
        description="Info about the company but with a focus on my contributions."
        link="#"
      />
    </main>
  );
};

export default Main;
