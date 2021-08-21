import React from "react";
import styles from "../../styles/Intro.module.css";

// import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.background}></div>
      <div className={styles.intro}>
        <div className={styles.textIntro}>
          <h1>Hi There. I am </h1>
          <ul className={styles.dynamicTxt}>
            <li>
              <span className={styles.span}>Chitransh</span>
            </li>
            <li>
              <span className={styles.span}>Developer</span>
            </li>
          </ul>

          <p className={styles.paragraph}>
            I am a Student and I am learning how to Code
          </p>
        </div>
        <div className={styles.image}>
          <img src="/undraw_Specs_re_546x.svg" alt="" className={styles.svg1} />
        </div>
      </div>
      
    </div>
  );
};

export default Intro;
