import { useParams } from "react-router-dom"

function RestaurantPage () {
    const { restaurantId } = useParams()
    
    return (
        <><h2>{restaurantId}</h2></>
    )
}

export default RestaurantPage