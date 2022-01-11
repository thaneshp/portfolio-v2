import Header from "../components/header";
import styles from "../styles/Home.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => (
  <>
    <Header />
    <div className={`${styles.container} ${styles.contact}`}>
      <h3>Linkedin</h3>
      <a href="https://www.linkedin.com/in/thanesh-pannirselvam/">
        in/thanesh-pannirselvam
      </a>
      <h3>Email</h3>
      <a href="mailto:thanesh.pannirselvam@gmail.com">
        thanesh.pannirselvam@gmail.com
      </a>
      <h3>Social</h3>
      <ul className={styles.icons}>
        <li>
          <a href="https://github.com/thaneshp">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thanesh-pannirselvam/">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCJ_cbUrXmIx-C9jqIWVGfhQ">
            <FontAwesomeIcon icon={faYoutube} size="2x"/>
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default Contact;
