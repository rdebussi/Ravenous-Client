// Home.js
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import ProductCard from '../../components/ProductCard';
import styles from './Home.module.css';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);



  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1010/product');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    searchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    console.log(product)
  };

  const handleCloseProductCard = () => {
    setSelectedProduct(null);
  };

  return (
    <section className={styles.home}>
      <h2>Todos os produtos:</h2>
      {products.length > 0 ? (
        <section className={styles.list}>
          {products.map((p) => (
            <Card key={p.id} product={p} onClick={() => handleProductClick(p)} />
          ))}
        </section>
      ) : (
        <p>Nenhum produto encontrado</p>
      )}
      {selectedProduct && (
        <div className={styles.productCardOverlay}>
          <ProductCard product={selectedProduct} onClose={handleCloseProductCard} addToCart={addToCart}/>
        </div>
      )}
    </section>
  );
}

export default Home;




// import { useState } from 'react'
// import Card from '../../components/Card'
// import styles from './Home.module.css'
// import { useEffect } from 'react'

// function Home() {

//   const [ products, setProducts ] = useState([])

//   useEffect(() => {
//     const searchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:1010/product')
//         const data = await response.json()
//         setProducts(data)
//         console.log(data)
//       } catch(err){
//         console.error(err)
//       }
//     }
//     searchProducts()
//   }, [])

//     return (
//       <section className={styles.home}>
//         <h2>todos os produtos:</h2>
//           {
//             products.length > 0 ? (
//               <section className={styles.list}>
//                 {
//                   products.map((p) => (
//                     <Card key={p.id} name={p.name} price={p.price} />
//                   ))
//                 }
//               </section>
//             ) : (
//               <p>nenhum produto encontrado</p>
//             )
//           }
//       </section>
//     )
//   }

//   export default Home