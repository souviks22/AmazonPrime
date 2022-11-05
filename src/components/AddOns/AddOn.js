import styles from './AddOn.module.css'

const AddOn = (props) => {
    return (<div className={styles.addon}>
        <img className='img-fluid' src={`/images/${props.platform}.png`} alt={`${props.platform}`} />
    </div>)
}

export default AddOn