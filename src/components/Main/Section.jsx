import styles from "./Section.module.css";
import Figure from "./Figure";

const Section = ({
  date,
  company,
  role,
  link,
  img1,
  img2,
  paragraph1,
  paragraph2,
}) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.dash}></div>
        <div>
          <h3 className={styles.date}>{date}</h3>
          <h2 className={styles.company}>{company}</h2>
          <p className={styles.role}>{role}</p>
          <a className={styles.btnView} href={link} target="_blank">
            View
          </a>
        </div>
      </header>
      <div className={styles.content}>
        <Figure src={img1} caption={paragraph1} />
        <Figure src={img2} caption={paragraph2} />
      </div>
    </section>
  );
};

export default Section;
