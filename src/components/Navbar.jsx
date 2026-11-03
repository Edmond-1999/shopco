import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="navbar">
      <div className="big-div">
        <a href="/" className="logo">
          SHOP.CO
        </a>

        <div className="nav-links">
          <a href="/" className="active">
            Shop
          </a>
          <a href="/" className="active">
            On Sale
          </a>
          <a href="/" className="active">
            New Arrivals
          </a>
          <a href="/" className="active">
            Brands
          </a>
        </div>

        <div className="search-wrap">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search for products..." className="search-bar" />
        </div>

        <Link to="/cart" className="cart-button">
          <FiShoppingCart />
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
