import styles from './Banner.module.css'

function Banner ({ background_img }) {
    return (
        <section className={styles.banner}>
            <img src="https://1000logos.net/wp-content/uploads/2023/12/Five-Guys-Logo-1986.png" alt="foto do reataurante" />
        </section>
    )
}

export default Banner