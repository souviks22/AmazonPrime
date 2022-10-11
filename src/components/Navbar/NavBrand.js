import { NavLink } from 'react-router-dom'
import style from './NavBrand.module.css'

const NavBrand = () => {
    return (<div className={style.navbar__brand}>
        <NavLink to='/'>
            <img className='img-fluid' src="/images/prime.png" alt="prime.png" />
        </NavLink>
    </div>)
}

export default NavBrand