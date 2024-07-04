import { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import styles from './Restaurants.module.css'

function Restaurants() {

    const [ restaurants, setRestaurants ] = useState([])

    useEffect(() => {
      const searchRestaurants = async () => {
        try {
          const response = await fetch('http://localhost:1010/restaurant')
          const data = await response.json()
          setRestaurants(data)
          console.log(data)
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
                    <RestaurantCard key={r.id} name={r.name} address={r.adress} profile_pic={r.profile_pic}/>
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