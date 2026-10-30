import { useEffect, useState } from 'react'
import './NewArrivals.css'
import ProductCard from './ProductCard'

function NewArrivals() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) throw new Error('Failed to fetch products')

        const data = await response.json()
        setProducts(data.slice(0, 4))
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="new-arrivals">
      <div className="new-arrivals-header">
        <h2 className="new-arrivals-heading">New Arrivals</h2>
      </div>

      <div className="new-arrivals-grid">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      <div className="view-all-button-container">
        <button className="view-all-button">View All</button>
      </div>
    </section>
  )
}

export default NewArrivals;