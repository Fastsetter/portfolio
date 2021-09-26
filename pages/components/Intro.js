import React, { useState } from "react";
import styles from "../../styles/Intro.module.css";

import Image from "next/image";


const Intro = () => {
  
  const [img2,setImg2]=useState({
    position:'absolute',
    left:'0%',
  })

  return (
    <div className={styles.outerContainer}>

      {/*<div className={styles.background}>*/}

      {/*</div>*/}
      <div className={styles.intro}>
        <div className={styles.textIntro}>
          <h1>Hi There. I am </h1>
          <ul className={styles.dynamicTxt}>
            <li>
              <span className={styles.span}>Chitransh</span>
            </li>
            <li>
              <span className={styles.span}>Youtuber</span>
            </li>
            <li>
              <span className={styles.span}>Developer</span>
            </li>
          </ul>

          
        </div>
        <p className={styles.YoutubeChnl}>Have a visit on my <a href="http://www.youtube.com/channel/UCzRu-XnaVZqJWm4EIAy6Veg" className={styles.ytUrl}>Youtube Channel</a></p>
        
      </div>
      
    </div>
  );
};

export default Intro;
