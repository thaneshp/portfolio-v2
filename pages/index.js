import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav.js";

export default function Home() {
  return (
      <div className={styles.wrapperMasthead}>
        <div className={styles.container}>
          <header className={`${styles.masthead} ${styles.clearfix}`}>
            <div className={styles.siteInfo}>
              <h1 className={styles.siteName}>
                <a href="/">Thanesh Pannirselvam</a>
              </h1>
              <p className={styles.siteDescription}>
                <a href="/">
                  Site Reliability Engineer from Melbourne
                </a>
              </p>
              <Nav />
            </div>
          </header>
        </div>
      </div>
  );
}
