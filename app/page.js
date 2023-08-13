import Image from "next/image";
import styles from "./page.module.css";
import Card from "./Components/Card/Card";
import Layout from "./Components/Layout/Layout";

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <h1>Hello World!</h1>
        <Card />
      </Layout>
    </main>
  );
}
