import Header from "../components/header";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Certifications = () => (
  <>
    <Header />
    <div className={styles.container}>
      <h1>Certifications</h1>
      <table className={styles.certificationsTable}>
        <tr>
          <td>
            <img alt="unimelb-logo" src="/unimelb-logo.png" width="48" height="40" />
          </td>
          <td>BSc in Computing and Software Systems (2017 - 2020)</td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon
              icon={faGoogle}
              className={`${styles.icon} ${styles.googleIcon}`}
              size="3x"
            />
          </td>
          <td>GCP Professional Cloud DevOps Engineer (2021)</td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon
              icon={faGoogle}
              className={`${styles.icon} ${styles.googleIcon}`}
              size="3x"
            />
          </td>
          <td>GCP Associate Cloud Engineer (2021)</td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon
              icon={faAws}
              className={`${styles.icon} ${styles.awsIcon}`}
              size="3x"
            />
          </td>
          <td>AWS Cloud Practioner Certificate (2020)</td>
        </tr>
      </table>

      {/* <ul className={styles.certifications}> */}
        {/* <li>
          <Image src="/unimelb-logo.png" width="48" height="40" />
          <label className={styles.certLabel}>
            BSc in Computing and Software Systems (2017 - 2020)
          </label>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faGoogle}
            className={`${styles.icon} ${styles.googleIcon}`}
            size="3x"
          />
          <label>GCP Professional Cloud DevOps Engineer (2021)</label>
        </li> */}
        {/* <li>
          <FontAwesomeIcon
            icon={faGoogle}
            className={`${styles.icon} ${styles.googleIcon}`}
            size="3x"
          />
          <label>GCP Associate Cloud Engineer (2021)</label>
        </li> */}
        {/* <li>
          <FontAwesomeIcon
            icon={faAws}
            className={`${styles.icon} ${styles.awsIcon}`}
            size="3x"
          />
          <label>AWS Cloud Practioner Certificate (2020)</label>
        </li> */}
      {/* </ul> */}
    </div>
  </>
);

export default Certifications;
