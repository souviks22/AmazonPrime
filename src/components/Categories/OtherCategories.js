import { useSelector } from 'react-redux'
import styles from './OtherCategories.module.css'

const OtherCategories = () => {
    const otherCategories = useSelector(state => state.catg.otherCategories)
    return (<section className={styles.other__categories}>
        <h6>Other Categories</h6>
        <div className={styles.others__list}>
            {otherCategories.map(catg => <p key={catg} className={styles.catg}>{catg}</p>)}
        </div>
    </section>)
}

export default OtherCategories