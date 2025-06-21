import styles from "./Article.module.css";
import meImage from "../../assets/images/me.webp";

const Article = () => {
  return (
    <article className={styles.article}>
      <img src={meImage} alt="Profile Picture" />
      <div className={styles.content}>
        <h3 className={styles.title}>More about me</h3>
        <p>
          Hey there! I'm Hiram, a engineer who is a mix of a{" "}
          <b className={styles.keywords}>tech enthusiast</b>,{" "}
          <b className={styles.keywords}>creative mind</b> and someone with a{" "}
          <b className={styles.keywords}>keen eye for detail ツ</b>.
        </p>
        <p>
          Currently, I'm working as a Software Engineer at a startup company.
          Based in Mexico where I was born and raised. But my second home is
          Minnesota, where I spent all the summers of my childhood.
        </p>
        <p>
          Graduated from the Universidad Interamericana para el Desarrollo with
          a degree in Software Engineering in 2023.
        </p>
        <p>Want to know more about me?</p>
        <a href="mailto:h.shamed.ar@gmail.com" className={styles.btnSendEmail}>
          Say Hi!
        </a>
      </div>
    </article>
  );
};

export default Article;
