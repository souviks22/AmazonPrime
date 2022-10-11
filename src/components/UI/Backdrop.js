import ReactDOM from 'react-dom'
import styles from './Backdrop.module.css'

const Backdrop = () => {
    return (<>
        {ReactDOM.createPortal(<div className={styles.backdrop}></div>, document.getElementById('backdrop'))}
    </>)
}

export default Backdrop