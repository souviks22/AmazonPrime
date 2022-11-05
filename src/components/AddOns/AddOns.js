import useGet from '../../hooks/useGet'
import AddOn from './AddOn'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './AddOns.module.css'

const AddOns = () => {
    const [addOns, isLoading] = useGet('addOns')
    const { title, description, channels } = addOns

    return (<section className={`row ${isLoading ? styles.spinner__box : styles.addons}`}>
        <div className={`col-6 ${styles.tagline}`}>
            <p className='display-5'>{title}</p>
            <h4>{description}</h4>
        </div>
        <div className={`col-6 ${styles.tabs}`}>
            {isLoading
                ? <LoadingSpinner />
                : channels != null && channels.map(addOn => <AddOn key={addOn} platform={addOn} />)
            }
        </div>

    </section>)
}

export default AddOns