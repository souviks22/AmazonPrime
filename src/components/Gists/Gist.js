import Background from "../UI/Background"
import PrimeButton from "../UI/PrimeButton"
import styles from './Gist.module.css'

const Gist = (props) => {
    return (<div className={`${styles.gist} row ${props.reverse
        ? props.shade
            ? styles.gist__reverse__shade
            : styles.gist__reverse
        : props.shade && styles.gist__shade
        }`}>
        <Background id={props.id} image={props.img} reverse={props.reverse} shade={props.shade} />
        <div className={styles.tagline}>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            {props.buttons.map(button =>
                <div className={styles.button__group} key={button.id}>
                    <PrimeButton>{button.action}</PrimeButton>
                    <p>{button.detail}</p>
                </div>
            )}
        </div>
    </div>)
}

export default Gist