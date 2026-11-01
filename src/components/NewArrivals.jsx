import { useState } from 'react'
import './NewArrivals.css'
import ProductCard from './ProductCard'
import { useGetProductsQuery } from '../store/productsApi'

function NewArrivals() {
  const [showAll, setShowAll] = useState(false)
  const { data: products, isLoading, isError, error } = useGetProductsQuery()
  const errorMessage =
    error?.data?.message || error?.error || 'Failed to load products.'
  // Show four products initially, and cap the expanded list at 35.
  const visibleProducts = products?.slice(0, showAll ? 35 : 4) ?? []

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
          visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      {!isLoading && !isError && products?.length > 4 && (
        <div className="view-all-button-container">
          {/* Toggle between the initial four products and the capped full list. */}
          <button
            className="view-all-button"
            type="button"
            onClick={() => setShowAll((previousShowAll) => !previousShowAll)}
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </section>
  )
}

export default NewArrivals;