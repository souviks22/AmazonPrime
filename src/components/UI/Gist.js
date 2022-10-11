import Background from "./Background"
import PrimeButton from "./PrimeButton"
import styles from './Gist.module.css'

const Gist = (props) => {
    return (<div className={`${styles.gist} row ${props.reverse && styles.gist__reverse}`}>
        <Background id={props.id} image={props.img} reverse={props.reverse} />
        <div className={styles.tagline}>
            <h1>{props.title}</h1>
            <h4>{props.subTitle}</h4>
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