import Category from './Category'
import { useSelector } from 'react-redux'
import styles from './TopCategories.module.css'

const TopCategories = () => {
    const topCategories = useSelector(state => state.catg.topCategories)
    const links = ['/prime-shows', '/originals', '/movies', '/tv', '/kids']
    let i = 0;

    return (<div className={styles.top__categories}>
        <h6>Top categories</h6>
        <section className={styles.category__list}>
            {topCategories.map(catg => <Category key={catg} title={catg} link={links[i++]} />)}
        </section>
    </div>)
}

export default TopCategories