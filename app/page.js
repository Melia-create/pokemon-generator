import Image from "next/image";
import styles from "./page.module.css";
import Card from "./Components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <Card />
    </main>
  );
}
