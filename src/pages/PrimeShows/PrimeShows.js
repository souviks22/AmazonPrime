import Preview from '../../components/UI/Preview'
import Row from '../../components/UI/Row'
import styles from './PrimeShows.module.css'

const PrimeShows = () => {
    return (<div className={styles.shows}>
        <Preview src='primeShows/slides' />
        <Row title='Drama Movies' src='primeShows/drama' more />
    </div>)
}

export default PrimeShows