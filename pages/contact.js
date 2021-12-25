import Header from "../components/header";
import styles from "../styles/Home.module.css";

const Contact = () => (
  <>
    <Header />
    <div className={styles.container}>
        <h3>Linkedin</h3>
        <a href="https://www.linkedin.com/in/thanesh-pannirselvam/">in/thanesh-pannirselvam</a>
        <h3>Email</h3>
        <a href="mailto:thanesh.pannirselvam@gmail.com">thanesh.pannirselvam@gmail.com</a>
        <h3>Social</h3>
    </div>
  </>
);

export default Contact;