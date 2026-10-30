import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import './Navbar.css'

function Navbar() {
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

        <button type="button" className="cart-button" aria-label="Cart">
          <FiShoppingCart />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
