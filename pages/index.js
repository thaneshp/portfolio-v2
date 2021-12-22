import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <div className={styles.wrapperMasthead}>
        <div className={styles.container}>
          <header className={styles.masthead}>
            <div class={styles.siteInfo}>
              <h1 className={styles.siteName}>
                <a href="http://blog.thanesh.io">Thanesh Pannirselvam</a>
              </h1>
              <p class={styles.siteDescription}>
                <a href="http://blog.thanesh.io">
                  Site Reliability Engineer from Melbourne
                </a>
              </p>
            </div>
          </header>
        </div>
      </div>
  );
}
