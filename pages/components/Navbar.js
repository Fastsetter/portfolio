import styles from'../../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1>Navbar Heading</h1>
      <a href="/about">About Us</a>
    </div>
  )
}

export default Navbar
