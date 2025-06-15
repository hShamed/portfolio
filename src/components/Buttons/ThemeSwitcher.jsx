import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./ThemeSwitcher.module.css";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isChecked = theme === "dark";

  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.checkbox}
        checked={isChecked}
        onChange={toggleTheme}
        aria-label={`Toggle ${isChecked ? "light" : "dark"} mode`}
        role="switch"
      />
      <label htmlFor="theme-toggle" className={styles.label}>
        <span className={styles.ball}></span>{" "}
      </label>
      <span className={styles.themeIcon}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </span>
    </div>
  );
}

export default ThemeSwitcher;
