import { Link } from 'react-router-dom'
import styles from './RestaurantCard.module.css'
import bk from '/bk.png'

function RestaurantCard ({restaurant}) {
    return (
        <Link to={`/restaurants/${restaurant.id}`}>
        <section className={styles.RestaurantCard}>
            <div className={styles.logo_area}>
                <img src={restaurant.profile_pic} alt="" />
            </div>
            <div className={styles.content}>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.adress}</p>
                    <p>{restaurant.openning_hours}</p>
                </div>
        </section>
        </Link>
    )
}

export default RestaurantCard
