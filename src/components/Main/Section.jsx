import styles from "./Section.module.css";
import Figure from "./Figure";

const Section = ({ date, company, role, link }) => {
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
        <Figure
          src="https://static.wixstatic.com/media/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png/v1/fill/w_696,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png"
          alt="Image description"
          caption="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
      </div>
    </section>
  );
};

export default Section;
