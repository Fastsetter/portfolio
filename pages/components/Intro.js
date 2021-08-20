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

        <p className={styles.paragraph}>I am a Student and I am learning how to Code</p>
        
      </div>
      <img src="/undraw_Specs_re_546x.svg" alt="" className={styles.svg1}/>
      

    </div>
  )
}

export default Intro
