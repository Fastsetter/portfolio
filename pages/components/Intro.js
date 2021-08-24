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
              <span className={styles.span}>Developer</span>
            </li>
          </ul>

          
        </div>
        {/*<div className={styles.image}>*/}
        {/*  <Image src={svg1} height={200} width={250}/>*/}
        {/*</div>*/}
        
        <p className={styles.quote}>“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”</p>
      </div>
      
    </div>
  );
};

export default Intro;
