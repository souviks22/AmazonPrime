import styles from './DropDownButton.module.css'

const DropDownButton = (props) => {
    return (
        <div className={`${styles.dropdown__button} ${props.rotate && styles.rotate__button}`}>
            <i className="fa-solid fa-caret-down"></i>
        </div>
    )
}

export default DropDownButton