import styles from './RestaurantCard.module.css'
import bk from '/bk.png'

function RestaurantCard ({name, address}) {
    return (
        <section className={styles.RestaurantCard}>
            <div className={styles.logo_area}>
                <img src={bk} alt="" />
            </div>
            <div className={styles.content}>
                <h2>{name}</h2>
                <p>{address}</p>
                <p>32 9999-9999</p>
            </div>
        </section>
    )
}

export default RestaurantCard
