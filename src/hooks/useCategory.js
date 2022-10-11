import { useSelector, useDispatch } from 'react-redux'
import { navActions } from '../store/navSlice'

const useCategory = () => {
    const isCategoryHolded = useSelector(state => state.nav.isCategoryHolded)
    const dispatch = useDispatch()

    const dropCategoryHandler = () => {
        dispatch(navActions.dropCategory())
    }
    const liftCategoryHandler = () => {
        if (!isCategoryHolded)
            dispatch(navActions.liftCategory())
    }
    const holdCategoryHandler = event => {
        event.stopPropagation()
        dispatch(navActions.holdCategory())
        dispatch(navActions.dropCategory())
    }

    return { dropCategoryHandler, liftCategoryHandler, holdCategoryHandler }
}

export default useCategory