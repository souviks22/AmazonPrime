import { useSelector } from 'react-redux'
import styles from './AuthStatus.module.css'

const AuthStatus = () => {
    const authStuff = useSelector(state => state.box.authStatus)
    const leftColumn = authStuff.slice(0, 4)
    const leftBottom = authStuff[4]
    const rightTop = [
        {
            text: authStuff[5],
            icon: '/images/kids.png'
        },
        {
            text: authStuff[6],
            icon: '/images/add.png'
        }
    ]
    const rightColumn = authStuff.slice(7, 9)

    return (<div className={styles.auth__status}
        onClick={event => { event.stopPropagation() }}>
        <section className={styles.left__col}>
            {leftColumn.map(tab => <div key={tab} className={styles.tab}>{tab}</div>)}
            <div className={styles.tab}>Not Souvik? {leftBottom}</div>
        </section>
        <section className={styles.right__col}>
            {rightTop.map(tab =>
                <div key={tab.text} className={styles.icon__tab}>
                    <img className={`${styles.tab__icon} img-fluid`} src={tab.icon} alt={tab.text} />
                    <span>{tab.text}</span>
                </div>
            )}
            {rightColumn.map(tab => <div key={tab} className={styles.tab}>{tab}</div>)}
        </section>
    </div>)
}

export default AuthStatus