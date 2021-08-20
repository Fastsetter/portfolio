import React from 'react'
import styles from '../../styles/Intro.module.css' 
const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.textIntro}>
        <h1>Hi. I am </h1>
          <ul className={styles.dynamicTxt}>
            <li><span className={styles.span}>Chitransh</span></li>
            <li><span className={styles.span}>Developer</span></li>
          </ul>
        
      </div>
      <img src="/ian-schneider-TamMbr4okv4-unsplash.jpg" alt="" className={styles.showcaseImg}/>
      
      {/* <div className={styles.svgs}>
      <img src="\undraw_programming_2svr.svg" alt="" className={styles.svg1} />
        
      </div> */}

      
    </div>
  )
}

export default Intro