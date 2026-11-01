import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../store/sliceCart'
import './Cart.css'

function Cart() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  // Calculate these values from the cart items instead of storing duplicate totals.
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  function handleRemove(itemId) {
    dispatch(removeFromCart(itemId))
  }

  function handleDecrease(itemId) {
    dispatch(decreaseQuantity(itemId))
  }

  function handleIncrease(itemId) {
    dispatch(increaseQuantity(itemId))
  }

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/" className="cart-continue-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <h2>{item.title}</h2>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      type="button"
                      onClick={() => handleDecrease(item.id)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <p>
                <span>Items ({itemCount})</span>
                <strong>${totalPrice.toFixed(2)}</strong>
              </p>
              <div className="cart-summary-total">
                <span>Total</span>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </aside>
          </div>
        )}
      </main>
    </>
  )
}

export default Cart
