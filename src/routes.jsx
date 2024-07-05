import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/PageBase";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantPage from "./pages/RestaurantPage";


function AppRoutes({ addToCart, toggleCartVisibility }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageBase onCartClick={toggleCartVisibility} /> }>
                    <Route index element={ <Home addToCart={addToCart} /> }></Route>
                    <Route path="/restaurants" element={<Restaurants/> }></Route>
                    <Route path="/restaurants/:restaurantId" element={<RestaurantPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes