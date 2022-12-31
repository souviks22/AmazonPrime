import styles from './Tag.module.css'

const Tag = (props) => {
    return (
        <img className={`img-fluid ${styles.tag}`} src={`/images/${props.img}.png`} alt={props.img} />
    )
}

export default Tag