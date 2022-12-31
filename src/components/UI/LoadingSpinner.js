import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
    return (<div className={`spinner-border ${styles.spinner}`} role="status"></div>)
}

export default LoadingSpinner