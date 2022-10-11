import { useSelector } from 'react-redux'
import styles from './WebLang.module.css'

const WebLang = () => {
    const langs = useSelector(state => state.box.webLang)
    return (<div className={styles.placeholder}>
        <div className={styles.web__lang}
            onClick={event => { event.stopPropagation() }}>
            {langs.map(lang =>
                <div className={styles.lang}>{lang.long}</div>
            )}
        </div>
    </div>)
}

export default WebLang