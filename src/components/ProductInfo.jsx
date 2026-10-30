import {FiPlus, FiMinus} from 'react-icons/fi'

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <h1 className="product-title">
                    {product.title}
                </h1>
                <p className="product-description">
                    {product.description}
                </p>
                <p className="product-price">
                    {product.price}
                </p>
            </div>
        </div>
    )
}