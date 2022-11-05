import useGet from '../../hooks/useGet'
import Gists from '../../components/Gists/Gists'
import AddOns from '../../components/AddOns/AddOns'
import styles from './PrimeHome.module.css'

const PrimeHome = () => {
    const [gists, isLoading] = useGet('gists')
    const topGists = gists.slice(0, 3), bottomGists = gists.slice(3, 5);

    return (<div className={`container-fluid ${styles.prime__home}`}>
        <Gists list={topGists} isFetching={isLoading} />
        <AddOns />
        <Gists list={bottomGists} isFetching={isLoading} />
    </div>)
}

export default PrimeHome