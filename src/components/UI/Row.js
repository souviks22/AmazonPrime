import useGet from '../../hooks/useGet'
import Tab from './Tab'
import styles from './Row.module.css'

const Row = (props) => {
    const [tabs, isLoading] = useGet(props.src)

    return (<div className={styles.row}>
        <section className={styles.title}>
            <p>{props.title}</p>
            {props.more && <span>See more</span>}
        </section>
        <section className={styles.tabs}>
            {!isLoading && tabs.map(tab => <Tab img={tab} tag='primeTag' />)}
        </section>
    </div>)
}

export default Row