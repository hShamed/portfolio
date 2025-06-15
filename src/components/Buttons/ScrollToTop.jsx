import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.show : ""}`}
      onClick={scroll}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUpIcon className={styles.icon} />
    </button>
  );
}

export default ScrollToTop;
