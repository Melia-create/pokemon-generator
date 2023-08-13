import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>
        <Link href="/">Pokémon Generator</Link>
      </p>
      <ul className={styles.headerLinks}>
        <li>
          <a
            href="https://github.com/colbyfayock/my-pokemon-generator"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
