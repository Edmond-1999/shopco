import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  const productName = product.title

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <article className="product-card">
        <div className="product-image">
          <img src={product.image} alt={productName} />
        </div>
        <div className="product-info">
          <h3>{productName}</h3>
          <p>${product.price}</p>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard;