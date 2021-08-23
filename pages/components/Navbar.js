import styles from'../../styles/Navbar.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import InstagramIcon from '@material-ui/icons/Instagram';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h2>My Portfolio</h2>
        <div className={styles.icon}>
            <a href="#"><GitHubIcon/></a>
            <InstagramIcon/>
            <ComputerIcon/>
        </div>

    </div>
  )
}

export default Navbar
