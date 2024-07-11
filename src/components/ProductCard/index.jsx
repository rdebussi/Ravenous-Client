// ProductCard.js
import React, { useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { FaStore } from "react-icons/fa";
import bk from '/hamburguer.webp'
import { IoCloseSharp } from "react-icons/io5";


function ProductCard({ product, onClose, addToCart }) {

 
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (amount) => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

 
    const totalPrice = product.price * quantity;



  return (
    <section className={styles.ProductCard}>
      <div className={styles.img_area}>
        <img className={styles.product_img} src={product.product_img} alt={product.name} />
      </div>

      <div className={styles.right_session}>
        <div className={styles.content}>
          <h2>{product.name}</h2>
          <h4>R$ {product.price}</h4>
          <p>{product.description}</p>
          <h5>{product.category}</h5>
        </div>

        <div className={styles.restaurant}>
          <h3><FaStore /> {product.restaurant.name}</h3>
          <p>{product.restaurant.adress}</p>
        </div>

        <div className={styles.coment}>
          <h4>Algum comentário?</h4>
          <textarea placeholder='sem cebola, carne ao ponto' name="" id="" cols="60" rows="5" />
        </div>

        <div className={styles.button_area}>
          <div className={styles.qtd_area}>
            <button 
              className={styles.btn_qtd} 
              onClick={() => handleQuantityChange(-1)}
            >-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button 
              className={styles.btn_qtd} 
              onClick={() => handleQuantityChange(1)}
            >+</button>
          </div>
          <button className={styles.btn_buy} 
            onClick={() => { addToCart(product, quantity); onClose(); }}
            >
            Adicionar R$ {totalPrice.toFixed(2)}
          </button>
        </div>
        <button onClick={onClose} className={styles.closeButton}>{<IoCloseSharp/>}</button>
      </div>
    </section>
  );
}

export default ProductCard;




// import styles from './ProductCard.module.css'
// import bk from '/hamburguer.webp'
// import { FaStore } from "react-icons/fa";


// function ProductCard () {
//     return (
//         <section className={styles.ProductCard}>
//             <div className={styles.img_area}>
//                 <img className={styles.product_img} src={bk} alt="" />
//             </div>

//             <div className={styles.rigth_session}>
//                 <div className={styles.content}>
//                     <h2>Triple X-Burguer w/ Bacon</h2>
//                     <h4>R$ 39,90</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi voluptate quaerat libero natus ipsum vero perspiciatis quas nulla exercitatio.</p>
//                     <h5>hamburguer; Vegetariano; </h5>
//                 </div>

//                 <div className={styles.restaurant}>
//                     <h3><FaStore/> Burger King</h3>
//                     <p>Av. Independência do Brasil, nº1994, loja 4</p>
//                 </div>

//                 <div className={styles.coment}>  
//                     <h4>Algum comentário?</h4>
//                     <textarea placeholder='sem cebola, carne ao ponto' name="" id="" cols="60" rows="5">
                        
//                     </textarea>
//                 </div>

//                 <div className={styles.button_area}>
//                     <button className={styles.btn_qtd}>- 1 +</button>
//                     <button className={styles.btn_buy}>Adicionar  39,90</button>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProductCard