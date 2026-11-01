import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useGetProductByIdQuery } from '../store/productsApi'
import './ProductInfo.css'

function ProductInfo({ productId }) {
  const [quantity, setQuantity] = useState(1)
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductByIdQuery(productId, { skip: !productId })

  const handleIncrement = () => {
    setQuantity((previousQuantity) => previousQuantity + 1)
  }

  const handleDecrement = () => {
    setQuantity((previousQuantity) => Math.max(1, previousQuantity - 1))
  }

  if (!productId) {
    return <p className="product-detail-message product-detail-error">Product ID is missing.</p>
  }

  if (isLoading) {
    return <p className="product-detail-message">Loading product details...</p>
  }

  if (isError) {
    const errorMessage =
      error?.data?.message || error?.error || 'Failed to load product details.'
    return <p className="product-detail-message product-detail-error">{errorMessage}</p>
  }

  if (!product?.id) {
    return <p className="product-detail-message">Product not found.</p>
  }

  return (
    <article className="product-detail-info">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail-content">
        <p className="product-detail-category">{product.category}</p>
        <h1>{product.title}</h1>
        <p className="product-detail-price">${Number(product.price).toFixed(2)}</p>
        <p className="product-detail-description">{product.description}</p>
        <div className="product-detail-actions">
          <div className="product-quantity">
            <button
              type="button"
              onClick={handleDecrement}
              className="plus-minus-btn"
            >
              <FiMinus />
            </button>
            <span className="quantity">{quantity}</span>
            <button
              type="button"
              onClick={handleIncrement}
              className="plus-minus-btn"
            >
              <FiPlus />
            </button>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductInfo
