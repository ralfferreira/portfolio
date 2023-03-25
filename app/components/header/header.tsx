'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !hasBackground) {
        setHasBackground(true);
      } else if (scrollTop === 0 && hasBackground) {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBackground]);

  return (
    <header
      className={`${styles.header} ${
        hasBackground ? styles.blackBackground : ""
      } ${isOpen ? styles.open : ""}`}
    >
      <Link href="/" passHref className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ralf.
      </Link>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <nav
        className={`${styles.nav} ${
          isOpen ? styles.open : ""
        } ${styles.navOpen}`}
      >
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="#about" passHref className={styles.link} onClick={handleLinkClick}>
                About
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#projects" passHref className={styles.link} onClick={handleLinkClick}>
                Projects
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#contact" passHref className={styles.link} onClick={handleLinkClick}>
                Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
