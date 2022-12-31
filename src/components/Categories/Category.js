import { Link } from 'react-router-dom'
import { navActions } from '../../store/navSlice'
import { useDispatch } from 'react-redux'
import styles from './Category.module.css'

const Category = (props) => {
    const dispatch = useDispatch()
    const categoryClickHandler = () => {
        dispatch(navActions.liftCategory())
    }

    return (<Link to={props.link} className={styles.category} onClick={categoryClickHandler}>
        <p>{props.title}</p>
    </Link>)
}

export default Category