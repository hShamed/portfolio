import styles from "./Navbar.module.css";
import ThemeSwitcher from "../Buttons/ThemeSwitcher";

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
          <a href="/me" className={styles.navbarLink}>
            Me
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/projects" className={styles.navbarLink}>
            Projects
          </a>
        </li>
      </ul>

      <ul className={styles.navbarIcons}>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
