import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import AboutMe from "../components/about-me.js";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
    </>
  );
}
