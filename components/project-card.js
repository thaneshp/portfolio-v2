import styles from "../styles/Home.module.css";

const ProjectCard = ({ key, title, description, links }) => (
  <div key={key} className={styles.card}>
    <div className={styles.cardBody}>
      <h2>
        <b>{title}</b>
      </h2>
      <p>
        {description}
        <br />
        <br />
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer">
            {link.label} →
          </a>
        ))}
      </p>
    </div>
  </div>
);

export default ProjectCard;
