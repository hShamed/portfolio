import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const containerRect = containerRef.current.getBoundingClientRect();

      const x = e.clientX - containerRect.left + 50;
      const y = e.clientY - containerRect.top - 30;

      setPosition({ x, y });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header className={styles.header} ref={containerRef}>
      <div
        className={styles.circle}
        style={{ left: position.x, top: position.y }}
      />
      <div className={styles.marquee_container}>
        <p className={styles.marquee_text}>
          <span>Software Engineer</span>
          <span>Full Stack Developer</span>
          <span>Web Developer</span>
          <span>PHP Developer</span>
          <span>Laravel Developer</span>
          <span>Software Developer</span>
        </p>
      </div>
      <h1 className={styles.title}>Hey, this is Hiram Ambriz.</h1>
      <div className={styles.subtitle}>
        <p>
          Currently → <b>Software Engineer</b>
        </p>
        <p>
          Experience → <b>2.1 years</b>
        </p>
      </div>
    </header>
  );
};

export default Header;
