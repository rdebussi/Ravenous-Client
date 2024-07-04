import styles from './Card.module.css'
import hb from '/hamburguer.webp'
import bk from '/bk.png'

function Card ({ name, price, onClick, product_img, restaurant_pic }) {
    return (
        <section className={styles.card} onClick={onClick}>

            <div className={styles.product}>
                <img className={styles.product_pic} src={product_img} alt="" />
            </div>

            <div className={styles.content}>
                <div className={styles.text}>
                    <h3 className={styles.name}>{name}</h3>
                </div>
                <div className={styles.restaurant}>
                    <h2 className={styles.price}>R$ {price}</h2>
                    <img className={styles.restaurant_pic} src={restaurant_pic} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Card