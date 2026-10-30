import { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import './ProductInfo.css'

function ProductInfo({ productId }) {
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadProduct() {
      setLoading(true)
      setError('')
      setProduct(null)
      setQuantity(1)

      try {
        const url = new URL(`https://fakestoreapi.com/products/${productId}`)
        const response = await fetch(url, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Failed to load product details`)
        }

        const data = await response.json()
        if (!data || !data.id) {
          throw new Error('Product not found.')
        }

        setProduct(data)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Failed to load product details.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    if (productId) {
      loadProduct()
    }

    return () => controller.abort()
  }, [productId])

  const handleIncrement = () => {
    setQuantity((previousQuantity) => previousQuantity + 1)
  }

  const handleDecrement = () => {
    setQuantity((previousQuantity) => Math.max(1, previousQuantity - 1))
  }

  if (!productId) {
    return <p className="product-detail-message product-detail-error">Product ID is missing.</p>
  }

  if (loading) {
    return <p className="product-detail-message">Loading product details...</p>
  }

  if (error) {
    return <p className="product-detail-message product-detail-error">{error}</p>
  }

  if (!product) {
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
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductInfo
