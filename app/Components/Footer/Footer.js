import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <a href="https://github.com/Melia-create">Amelia</a>,{" "}
        {new Date().getFullYear()}
      </p>
      <p>
        Icons &amp; Colors from{" "}
        <a href="https://github.com/duiker101/pokemon-type-svg-icons">
          Pokemon Type SVG Icons
        </a>
      </p>
    </footer>
  );
};

export default Footer;
