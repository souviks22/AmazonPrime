import { useSelector, useDispatch } from "react-redux"
import { navActions } from "../store/navSlice"

const useApp = () => {
    const isSearchBarExpanded = useSelector(state => state.nav.isSearchBarExpanded)
    const isCategoryDropped = useSelector(state => state.nav.isCategoryDropped)
    const isWebLangDropped = useSelector(state => state.nav.isWebLangDropped)
    const isAuthStatusDropped = useSelector(state => state.nav.isAuthStatusDropped)
    const dispatch = useDispatch()

    return () => {
        if (isSearchBarExpanded) {
            dispatch(navActions.shrinkSearchBar())
        }
        if (isCategoryDropped) {
            dispatch(navActions.liftCategory())
            dispatch(navActions.unholdCategory())
        }
        if (isWebLangDropped) {
            dispatch(navActions.liftWebLang())
        }
        if (isAuthStatusDropped) {
            dispatch(navActions.liftAuthStatus())
        }
    }
}

export default useApp