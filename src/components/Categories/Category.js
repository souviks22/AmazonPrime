import styles from './Category.module.css'

const Category = (props) => {
    return (<div className={styles.category}>
        <p>{props.title}</p>
    </div>)
}

export default Category