import styles from './Banner.module.css'

function Banner ({ background_img }) {
    return (
        <section className={styles.banner}>
            <img src={background_img} alt="foto do reataurante" />
        </section>
    )
}

export default Banner