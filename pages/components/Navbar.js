import styles from'../../styles/Navbar.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h2>My Portfolio</h2>
      <a href="#"><GitHubIcon/></a>
    </div>
  )
}

export default Navbar
