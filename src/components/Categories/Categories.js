import { useSelector, useDispatch } from 'react-redux'
import { navActions } from '../../store/navSlice'
import TopCategories from './TopCategories'
import AudioLanguages from './AudioLanguages'
import OtherCategories from './OtherCategories'
import styles from './Categories.module.css'

const Categories = () => {
    const isCategoryHolded = useSelector(state => state.nav.isCategoryHolded)
    const dispatch = useDispatch()
    const holdDroppedCategoryHandler = () => {
        dispatch(navActions.dropCategory())
    }
    const liftCategoryHandler = () => {
        if (!isCategoryHolded)
            dispatch(navActions.liftCategory())
    }

    return (<div className={styles.categories}
        onClick={event => { event.stopPropagation() }}
        onMouseEnter={holdDroppedCategoryHandler}
        onMouseLeave={liftCategoryHandler}>
        <TopCategories />
        <div className={`${styles.divider} vr`}></div>
        <div className={styles.additional}>
            <AudioLanguages />
            <OtherCategories />
        </div>
    </div>)
}

export default Categories