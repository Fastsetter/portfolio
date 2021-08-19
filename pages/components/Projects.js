import React from 'react'
import projects from '../../public/projects'
import styles from '../../styles/Projects.module.css'
const Projects = () => {
  return (
    <div className={styles.container}>
      {projects.map(project=>(
        <a className={styles.project} href={'/projects/'+project.id} key={project.id}>
          {console.log(project.id)}
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  )
}

export default Projects
