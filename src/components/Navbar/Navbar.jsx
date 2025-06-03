import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarUl}>
        <li className={styles.navbarItem}>
          <a href="/" className={`${styles.navbarTitle} ${styles.navbarLink}`}>
            Hiram Ambriz
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/about" className={styles.navbarLink}>
            About
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/projects" className={styles.navbarLink}>
            Projects
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/resume" className={styles.navbarLink}>
            Resume
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/contact" className={styles.navbarLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
