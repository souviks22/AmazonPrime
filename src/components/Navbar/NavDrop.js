import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { catgActions } from '../../store/catgSlice'
import useCategory from '../../hooks/useCategory'
import useGet from '../../hooks/useGet'
import DropDownButton from '../UI/DropDownButton'
import styles from './NavDrop.module.css'

const NavDrop = () => {
    const { dropCategoryHandler, liftCategoryHandler, holdCategoryHandler } = useCategory()

    const [topCategories] = useGet('topCatgs')
    const [audioLanguages] = useGet('audioLangs')
    const [otherCategories] = useGet('otherCatgs')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(catgActions.fetchCategories({
            topCategories, audioLanguages, otherCategories
        }))
    }, [topCategories, audioLanguages, otherCategories, dispatch])


    return (<div className={styles.navbar__dropdown}
        onClick={holdCategoryHandler}
        onMouseEnter={dropCategoryHandler}
        onMouseLeave={liftCategoryHandler}>
        Categories<DropDownButton />
    </div>)
}

export default NavDrop