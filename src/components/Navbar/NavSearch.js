import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navActions } from '../../store/navSlice'
import Toggle from '../Animation/Toggle'
import styles from './NavSearch.module.css'

const NavSearch = () => {
    const [hasSearch, setHasSearch] = useState(false)
    const inputRef = useRef()
    const inputChangeHandler = () => {
        if (inputRef.current.value) setHasSearch(true);
        else setHasSearch(false);
    }
    const clearInputHandler = () => {
        inputRef.current.value = ''
        inputRef.current.focus()
        setHasSearch(false)
    }
    const isExpanded = useSelector(state => state.nav.isSearchBarExpanded)
    const dispatch = useDispatch()
    const searchBarExpandHandler = () => {
        dispatch(navActions.expandSearchBar())
    }
    const preventShrinkSearchBar = event => {
        event.stopPropagation()
    }

    const searchIcon = <div><i className={`fa-solid fa-magnifying-glass ${styles.search__icon}`} onClick={searchBarExpandHandler}></i></div>
    const searchBar = <div className={styles.search__bar} onClick={preventShrinkSearchBar}>
        <i className={`fa-solid fa-magnifying-glass ${styles.search__bar__icon}`}></i>
        <input type="text" name='serch' placeholder='Search' ref={inputRef} onChange={inputChangeHandler} autoFocus />
        {hasSearch &&
            <div className={styles.clear__btn} onClick={clearInputHandler}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        }
    </div>

    return (
        <Toggle dependsOn={isExpanded} on={searchBar} off={searchIcon} />
    )
}

export default NavSearch