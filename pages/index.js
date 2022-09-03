import Header from "../components/header";
import styles from "../styles/Home.module.css";
import React from "react";
import ProjectCard from "../components/project-card";

let projects = [
  {
    title: "Appointment Checker",
    description:
      "A web scraper designed to find available appointments on a particular website.",
    links: [
      {
        label: "Blog",
        url: "https://blog.thanesh.io/Writing-an-Appointment-Checker/",
      },
      {
        label: "Github",
        url: "https://github.com/thaneshp/appointment-checker",
      }
    ],
  },
  {
    title: "Scrumblr-Enhancement",
    description:
      "Volunteer project involving a team of members from the Dev(){CoP} community. This project involves migrating the existing Scrumblr platform to AWS and adding persistent storage in it.",
    links: [
      {
        label: "Github",
        url: "https://github.com/zainafzal88/scrumblr-enhancement",
      }
    ],
  },
  {
    title: "Debatable",
    description:
      "A social media application aimed at fostering rational debate on the internet. It was built with the intention of enabling both sides of a topic to be heard.",
    links: [
      {
        label: "Github",
        url: "https://github.com/thaneshp/debatable",
      },
    ],
  },
];

const Projects = () => (
  <>
    <Header />
    <div className={styles.container}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          links={project.links}
        />
      ))}
    </div>
  </>
);

export default Projects;
