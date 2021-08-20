import styles from'../../styles/Navbar.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h2>My Portfolio</h2>
      <a href="https://github.com/Fastsetter?tab=repositories"><GitHubIcon/></a>
    </div>
  )
}

export default Navbar
