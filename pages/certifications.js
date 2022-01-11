import Header from "../components/header";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

const Certifications = () => (
  <>
    <Header />
    <div className={styles.container}>
      <h1>Certifications</h1>
      <ul className={styles.certifications}>
        <li>
          <FontAwesomeIcon icon={faGoogle} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGoogle} className={styles.googleIcon} size="2x"/>
          <label>GCP Professional Cloud DevOps Engineer (2021)</label>
        </li>
        <li>
          <FontAwesomeIcon icon={faGoogle} className={styles.googleIcon} size="2x"/>
          <label>GCP Associate Cloud Engineer (2021)</label>
        </li>
        <li>
          <FontAwesomeIcon icon={faAws} className={styles.awsIcon} size="2x"/>
          <label>AWS Cloud Practioner Certificate (2020)</label>
        </li>
      </ul>
    </div>
  </>
);

export default Certifications;
