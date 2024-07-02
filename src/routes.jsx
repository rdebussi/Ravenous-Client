import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./pages/PageBase";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/restaurants" element={<Restaurants/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes