import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
    return (<div className={`spinner-border ${styles.spinner}`} role="status">
        <span className="sr-only">Loading...</span>
    </div>)
}

export default LoadingSpinner