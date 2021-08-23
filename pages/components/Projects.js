import React from 'react'
import projects from '../../public/projects'
import styles from '../../styles/Projects.module.css'
const Projects = () => {
  return (
    <div className={styles.container}>
      {projects.map(project=>(
        <div className={styles.project} key={project.id}>

          <img src={project.image} alt="" className={styles.projectImage}/>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className={styles.buttons}>
            <button>Source Code</button>
            <button>Demo</button>
          </div>
        </div>
      ))}
      {/* <div className={`${styles.spacer} ${styles.curveBack}`}></div> */}

    </div>
  )
}

export default Projects
