import { useState } from 'react'
import Card from '../../components/Card'
import styles from './Home.module.css'
import { useEffect } from 'react'

function Home() {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1010/product')
        const data = await response.json()
        setProducts(data)
        console.log(data)
      } catch(err){
        console.error(err)
      }
    }
    searchProducts()
  }, [])

    return (
      <section className={styles.home}>
        <h2>todos os produtos:</h2>
          {
            products.length > 0 ? (
              <section className={styles.list}>
                {
                  products.map((p) => (
                    <Card key={p.id} name={p.name} price={p.price} />
                  ))
                }
              </section>
            ) : (
              <p>nenhum produto encontrado</p>
            )
          }
      </section>
    )
  }

  export default Home