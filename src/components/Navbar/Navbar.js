import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import NavSearch from './NavSearch'
import NavLang from './NavLang'
import NavAuth from './NavAuth'
import Categories from '../Categories/Categories'
import WebLang from '../NavBox/WebLang'
import AuthStatus from '../NavBox/AuthStatus'
import Backdrop from '../UI/Backdrop'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.css'

const Navbar = () => {
    const isCategoryDropped = useSelector(state => state.nav.isCategoryDropped)
    const isWebLangDropped = useSelector(state => state.nav.isWebLangDropped)
    const isAuthStatusDropped = useSelector(state => state.nav.isAuthStatusDropped)
    return (<div className='sticky-top'>
        <div className={styles.navbar}>
            <div className={styles.navbar__left}>
                <NavBrand />
                <NavLinks />
            </div>
            <div className={styles.navbar__right}>
                <NavSearch />
                <NavLang />
                <NavAuth />
            </div>
        </div>
        {isCategoryDropped && <Categories />}
        {(isWebLangDropped || isAuthStatusDropped) && <Backdrop />}
        {isWebLangDropped && <WebLang />}
        {isAuthStatusDropped && <AuthStatus />}
    </div>)
}

export default Navbar