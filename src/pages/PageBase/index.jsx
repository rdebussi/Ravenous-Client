import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";

function PageBase ({ onCartClick }) {
    return (
        <>
            <Header onCartClick={onCartClick}/>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
}

export default PageBase