import Tag from './Tag'
import styles from './Tab.module.css'

const Tab = (props) => {
    return (<div className={styles.tab}>
        <Tag img={props.tag} />
        <img className='img-fluid' src={`/images/${props.img}.png`} alt={props.img} />
    </div>)
}

export default Tab