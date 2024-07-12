import { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import styles from './Restaurants.module.css'
import axios from 'axios'

function Restaurants() {

    const [ restaurants, setRestaurants ] = useState([])

    useEffect(() => {
      const searchRestaurants = async () => {
        try {
          const response = await axios.get('http://localhost:1010/restaurant')
          setRestaurants(response.data)
        } catch(err){
          console.error(err)
        }
      }
      searchRestaurants()
    }, [])

    return (
        <section className={styles.restaurants}>
            <h2 className={styles.title}>todos os restaurantes: </h2>
            {
            restaurants.length > 0 ? (
              <section className={styles.restaurant_list}>
                {
                  restaurants.map((r) => (
                    <RestaurantCard key={r.id} restaurant={r}/>
                  ))
                }
              </section>
            ) : (
              <>
                <p>nenhum produto encontrado</p>
              </>

            )
          }
        </section>
    )
}

export default Restaurants