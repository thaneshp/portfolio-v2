import styles from "../styles/Home.module.css";
import Nav from "./nav.js";
import Link from "next/link";

const Header = () => (
  <div className={styles.wrapperMasthead}>
    <div className={styles.container}>
      <header className={`${styles.masthead} ${styles.clearfix}`}>
        <div className={styles.siteInfo}>
          <h1 className={styles.siteName}>
            <Link href="/">Thanesh Pannirselvam</Link>
          </h1>
          <p className={styles.siteDescription}>
            <Link href="/">Engineer from Melbourne</Link>
          </p>
          <Nav />
        </div>
      </header>
    </div>
  </div>
);

export default Header;
