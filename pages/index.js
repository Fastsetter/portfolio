import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <Navbar />
      <Intro></Intro>
      <Projects></Projects>
    </div>
  );
}
