import styles from "./Figure.module.css";

const Figure = ({ src, alt, caption }) => {
  return (
    <figure className={styles.figure}>
      <img src={src} alt={alt} className={styles.img} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Figure;
