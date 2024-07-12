import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/PageBase";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantPage from "./pages/RestaurantPage";
import Login from "./components/Login";
import { AuthProvider } from "./context/authContext";


function AppRoutes({ addToCart, toggleCartVisibility }) {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <PageBase onCartClick={toggleCartVisibility} /> }>
                        <Route index element={ <Home addToCart={addToCart} /> }></Route>
                        <Route path="/restaurants" element={<Restaurants/> }></Route>
                        <Route path="/restaurants/:restaurantId" element={<RestaurantPage addToCart={addToCart}/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default AppRoutes