import styles from './Background.module.css'

const Background = (props) => {
    return (<div className={`${styles.background} ${props.reverse && styles.background__reverse}`}>
        {props.image.scaledown
            ? <div className={props.shade ? styles.shaded__container : styles.image__container}>
                <img
                    className={`img-fluid`}
                    src={`images/${props.image.url}.png`}
                    alt={props.id}
                />
            </div>
            : <img
                className={`img-fluid ${styles.img}`}
                src={`images/${props.image.url}.png`}
                alt={props.id}
            />
        }
        {!props.reverse && !props.shade && <div className={styles.overlay}></div>}
    </div>)
}

export default Background