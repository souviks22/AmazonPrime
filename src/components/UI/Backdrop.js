import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { navActions } from '../../store/navSlice'
import styles from './Backdrop.module.css'

const Backdrop = () => {
    const dispatch = useDispatch()
    const backdropClickHandler = () => {
        dispatch(navActions.deactivateBackdrop())
    }

    return (
        ReactDOM.createPortal(<div className={styles.backdrop} onClick={backdropClickHandler}></div>, document.getElementById('backdrop'))
    )
}

export default Backdrop