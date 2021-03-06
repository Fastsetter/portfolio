import React from 'react'
import styles from '../../styles/Showcase.module.css'
const Showcase = () => {
  return (
    <div className={styles.showcase}>
      
      <div className={styles.showcaseImg}>
      <p>Any fool can write code that computer can understand! But only a good programmer can write a code that human can understand</p>


      </div>
      <h4 className={styles.paragraph}>
          I am a Student and I am learning how to Code
      </h4>
      <p className={styles.quote}>“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”</p>

    </div>
  )
}

export default Showcase
