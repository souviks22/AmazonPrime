import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navActions } from '../../store/navSlice'
import { boxActions } from '../../store/boxSlice'
import useGet from '../../hooks/useGet'
import DropDownButton from '../UI/DropDownButton'
import styles from './NavAuth.module.css'

const NavAuth = () => {
    const isAuthStatusDropped = useSelector(state => state.nav.isAuthStatusDropped)
    const dispatch = useDispatch()
    const dropAuthStatusHandler = () => {
        dispatch(navActions.dropAuthStatus())
    }
    const [authStatus] = useGet('authStatus')
    useEffect(() => {
        dispatch(boxActions.fetchAuthStatus(authStatus))
    }, [authStatus, dispatch])

    return (<div className={styles.navbar__auth} onClick={dropAuthStatusHandler}>
        <img className='img-fluid' src="/images/user.png" alt="user.png" />
        <span style={{ color: isAuthStatusDropped && 'whitesmoke' }}>Souvik</span>
        <DropDownButton rotate={isAuthStatusDropped ? true : false} />
    </div>)
}

export default NavAuth