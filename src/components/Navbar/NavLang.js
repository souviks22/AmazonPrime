import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGet from '../../hooks/useGet'
import DropDownButton from '../UI/DropDownButton'
import { boxActions } from '../../store/boxSlice'
import { navActions } from '../../store/navSlice'
import styles from './NavLang.module.css'

const NavLang = () => {
    const isWebLangDropped = useSelector(state => state.nav.isWebLangDropped)
    const dispatch = useDispatch()
    const dropWebLangHandler = () => {
        dispatch(navActions.dropWebLang())
    }
    const [langs] = useGet('webLangs')
    useEffect(() => {
        dispatch(boxActions.fetchWebLang(langs))
    }, [langs, dispatch])

    return (<div className={styles.navbar__lang} onClick={dropWebLangHandler}>
        <i className={`fa-solid fa-globe ${styles.globe__icon}`}></i>
        <p style={{ color: isWebLangDropped && 'whitesmoke' }}>EN</p>
        <DropDownButton rotate={isWebLangDropped ? true : false} />
    </div>)
}

export default NavLang