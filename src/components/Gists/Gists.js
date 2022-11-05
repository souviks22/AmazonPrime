import Gist from './Gist'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './Gists.module.css'

const Gists = (props) => {
    return (<section className={`${props.isFetching && styles.spinner__box}`}>
        {props.isFetching
            ? <LoadingSpinner />
            : props.list.map(gist => <Gist key={gist.id} {...gist} />)
        }
    </section>)
}

export default Gists