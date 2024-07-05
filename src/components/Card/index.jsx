import styles from './Card.module.css'


function Card ({ product, onClick }) {
    return (
        <section className={styles.card} onClick={onClick}>

            <div className={styles.product}>
                <img className={styles.product_pic} src={product.product_img} alt="" />
            </div>

            <div className={styles.content}>
                <div className={styles.text}>
                    <h3 className={styles.name}>{product.name}</h3>
                </div>
                <div className={styles.restaurant}>
                    <h2 className={styles.price}>R$ {product.price}</h2>
                    <img className={styles.restaurant_pic} src={product.restaurant.profile_pic} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Card