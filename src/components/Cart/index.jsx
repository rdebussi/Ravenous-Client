// Cart.jsx
import React from 'react';
import styles from './Cart.module.css';
import hb from '/hamburguer.webp'
import { FaStore } from "react-icons/fa";

function Cart({ items, onClose, totalPrice, restaurantName }) {
  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cart}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        <div className={styles.content}>
          <div className={styles.restaurant}>
            <h2>Carrinho</h2>
            <h3><FaStore/> {restaurantName}</h3>
          </div>
          <div className={styles.products}>
              {items.map((item, index) => (
                <div className={styles.product} key={index}>
                  <img className={styles.product_img} src={item.product_img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantidade: {item.quantity}</p>
                    <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.price_area}>
          <div className={styles.price}>
            <h3>Total: </h3>
            <h3>R$ {totalPrice}</h3>
          </div>
          <button>Fazer Pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
