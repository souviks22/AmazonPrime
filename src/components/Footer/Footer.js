import useGet from '../../hooks/useGet'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './Footer.module.css'

const Footer = () => {
    const [footer, isLoading] = useGet('footer')
    const { img, links, copyright } = footer

    return (<div className={styles.footer__box}>
        {isLoading ? <LoadingSpinner />
            : links != null &&
            <div className={styles.footer}>
                <img src={`/images/${img}.png`} alt={footer.img} />
                <section className={styles.links}>
                    {links.map(link => <a key={link} href='/'>{link}</a>)}
                </section>
                <p>{copyright}</p>
            </div>
        }
    </div >
    )
}

export default Footer