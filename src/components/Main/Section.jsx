import styles from "./Section.module.css";

const Section = ({ date, company, role, description, link }) => {
  return (
    <section className={styles.section}>
      <header>
        <h3>{date}</h3>
        <h2>{company}</h2>
        <p>{role}</p>
        <p>{description}</p>
        <a href={link}>View</a>
      </header>
      <div>
        <figure>
          <img
            src="https://static.wixstatic.com/media/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png/v1/fill/w_696,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png"
            alt="Image description"
          />
          <figcaption>Caption</figcaption>
        </figure>
        <figure>
          <img
            src="https://static.wixstatic.com/media/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png/v1/fill/w_696,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png"
            alt="Image description"
          />
          <figcaption>Caption</figcaption>
        </figure>
        <figure>
          <img
            src="https://static.wixstatic.com/media/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png/v1/fill/w_696,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c2a35_bbb310ef91da4fd29d8eb522e3f94ead~mv2.png"
            alt="Image description"
          />
          <figcaption>Caption</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Section;
