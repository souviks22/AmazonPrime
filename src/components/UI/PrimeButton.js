import styles from './PrimeButton.module.css'

const PrimeButton = (props) => {
    return (<button className={`${styles.prime__button} ${props.className}`}>
        {props.children}
    </button>)
}

export default PrimeButton