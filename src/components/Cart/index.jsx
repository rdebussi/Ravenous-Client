// Cart.jsx
import React from 'react';
import styles from './Cart.module.css';

function Cart({ items, onClose, totalPrice, restaurantName }) {
  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cart}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        <h2>Carrinho</h2>
        <h3>Restaurante: {restaurantName}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Quantidade: {item.quantity}</p>
                <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total: R$ {totalPrice}</h3>
      </div>
    </div>
  );
}

export default Cart;
