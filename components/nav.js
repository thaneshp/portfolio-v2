import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => (
  <nav>
    <ul className={styles.navUl}>
      <li>
        <Link href="/">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="https://blog.thanesh.io">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: flex-start;
      }
      nav > ul {
        padding: 4px 0px;
      }
      li {
        display: flex;
        padding: 6px 0px;
        padding-right: 1rem;
      }
      li:not(:first-child) {
        padding: 6px 1rem;
      }
      a {
        font-size: 1.25rem;
      }
    `}</style>
  </nav>
);

export default Nav;
