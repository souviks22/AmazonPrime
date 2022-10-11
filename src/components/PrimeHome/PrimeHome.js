import Gist from "../UI/Gist"
import useGet from '../../hooks/useGet'
import LoadingSpinner from "../UI/LoadingSpinner"
import styles from './PrimeHome.module.css'

const PrimeHome = () => {
    const [gists, isLoading] = useGet('gists')
    return (<div className={`container-fluid ${isLoading ? styles.spinner__box : styles.prime__home}`}>
        {isLoading
            ? <LoadingSpinner />
            : gists.map(gist => <Gist key={gist.id} {...gist} />)
        }
    </div>)
}

export default PrimeHome