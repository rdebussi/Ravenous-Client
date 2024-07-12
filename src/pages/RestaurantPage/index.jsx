import { useParams } from "react-router-dom"
import Banner from "../../components/Banner"
import React, { useState, useEffect } from 'react';
import styles from './RestaurantPage.module.css'
import Card from "../../components/Card";
import ProductCard from "../../components/ProductCard";
import axios from "axios";

function RestaurantPage({ addToCart }) {
    const { restaurantId } = useParams()
    //fetch restaurant by id
    const [restaurant, setRestaurant] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const searchRestaurant = async () => {
            try {
                const response = await axios.get(`http://localhost:1010/restaurant/${restaurantId}`);
                setRestaurant(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        searchRestaurant();
    }, []);

    useEffect(() => {
        const searchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:1010/product/restaurant/${restaurantId}`);
                setProducts(response.data)
            } catch (err) {
                console.error(err)
            }
        };
        searchProducts();
    }, []);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseProductCard = () => {
        setSelectedProduct(null);
    };

    //fetch all products by restaurant id
    return (
        <>
            <Banner background_img={restaurant.background_img} />
            <section className={styles.information}>
                <div className={styles.left}>
                    <img src={restaurant.profile_pic} alt="" />
                    <h1>{restaurant.name}</h1>
                </div>
                <div className={styles.rigth}>
                    <p>{restaurant.adress}</p>
                    <p>{restaurant.openning_hours}</p>
                    <p>{restaurant.telefone}</p>
                </div>
            </section>
            <div className={styles.text}>
                <h2>Todos os produtos: </h2>
            </div>

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
                        <ProductCard product={selectedProduct} onClose={handleCloseProductCard} addToCart={addToCart} />
                    </div>
                )}

        </>
    )
}

export default RestaurantPage