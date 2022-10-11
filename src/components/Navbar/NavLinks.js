import { NavLink } from 'react-router-dom'
import NavDrop from './NavDrop'
import styles from './NavLinks.module.css'

const NavLinks = () => {
    return (<div className={styles.navlinks}>
        <NavLink className={styles.navlink} to='/home'>Home</NavLink>
        <NavLink className={styles.navlink} to='/store'>Store</NavLink>
        <NavLink className={styles.navlink} to='/channels'>Channels</NavLink>
        <NavDrop />
        <NavLink className={styles.navlink} to='/my-stuff'>My Stuff</NavLink>
    </div>)
}

export default NavLinks