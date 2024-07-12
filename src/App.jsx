// App.jsx
import './App.css';
import AppRoutes from './routes';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import axios from 'axios';


function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');

  // const submitForm = async () => {
  //   try {
  //     let registration = await axios.post("http://localhost:1010/login", {
  //     email: "admin", password: "admin"})
  //     console.log(registration)
  //     localStorage.setItem("x-access-token", registration.data.token)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // } 
  




  //   const token = localStorage.getItem("x-access-token");
    
  //   axios.defaults.headers.common = {
  //     "X-Requested-With": "XMLHttpRequest",
  //     "x-access-token": token
  //   } 


  

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const addToCart = (product, quantity) => {
    if (cartItems.length > 0 && cartItems[0].restaurant.name !== product.restaurant.name) {
      alert('Não é possível adicionar produtos de Restaurantes diferentes no carrinho')
      return;
    }

    

    setRestaurantName(product.restaurant.name);

    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[existingProductIndex].quantity += quantity;
      setCartItems(newCartItems);
    } else {
      const newCartItem = { ...product, quantity };
      setCartItems((prevItems) => [...prevItems, newCartItem]);
    }

    setCartVisible(true); // Mostrar o carrinho quando um item é adicionado
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <AppRoutes addToCart={addToCart} toggleCartVisibility={toggleCartVisibility} />
      {cartVisible && <Cart items={cartItems} onClose={toggleCartVisibility} totalPrice={getTotalPrice()} restaurantName={restaurantName} />}
    </>
  );
}

export default App;
