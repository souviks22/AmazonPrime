import { useSelector } from 'react-redux'
import styles from './AudioLanguages.module.css'

const AudioLanguages = () => {
    const audioLanguages = useSelector(state => state.catg.audioLanguages)
    return (<section className={styles.audio__languages}>
        <h6>Audio languages</h6>
        <div className={styles.language__list}>
            {audioLanguages.map(lang => <p key={lang} className={styles.lang}>{lang}</p>)}
        </div>
    </section>)
}

export default AudioLanguages