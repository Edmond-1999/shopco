import './NewArrivals.css'
import ProductCard from './ProductCard'
import { useGetProductsQuery } from '../store/productsApi'

function NewArrivals() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery()
  const errorMessage =
    error?.data?.message || error?.error || 'Failed to load products.'

  return (
    <section className="new-arrivals">
      <div className="new-arrivals-header">
        <h2 className="new-arrivals-heading">New Arrivals</h2>
      </div>

      <div className="new-arrivals-grid">
        {isLoading ? (
          <p>Loading products...</p>
        ) : isError ? (
          <p role="alert">{errorMessage}</p>
        ) : (
          products.slice(0, 4).map((product) => (
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