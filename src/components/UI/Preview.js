import useGet from '../../hooks/useGet'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import styles from './Preview.module.css'

const Preview = (props) => {
    const [slides, isLoading] = useGet(props.src)
    let i = 0, j = 0;

    return (<div className={styles.preview}>
        {isLoading ? <LoadingSpinner /> :
            <div className={`${styles.slides} carousel slide`} id='shows' data-bs-ride='carousel'>
                <section className='carousel-indicators'>
                    {slides.map(slide => <button key={slide} data-bs-target='#shows' className={i === 0 ? 'active' : ''} data-bs-slide-to={i++} />)}
                </section>
                <section className='carousel-inner'>
                    {slides.map(slide => <div key={slide} className={`carousel-item ${!j++ && 'active'}`}><img className='img-fluid' src={`/images/${slide}.png`} alt={slide} /></div>)}
                </section>
                <section className={styles.controls}>
                    <button className='carousel-control-prev' type='button' data-bs-target='#shows' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon'></span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#shows' data-bs-slide='next'>
                        <span className='carousel-control-next-icon'></span>
                    </button>
                </section>
            </div>
        }
    </div>)
}

export default Preview