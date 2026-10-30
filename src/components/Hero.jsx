import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-row">
        <div className="hero-copy">
          <div className="home-intro">
            <h1 className="home-intro-heading">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className="home-intro-text">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <button className="shop-now-button">Shop Now</button>
          </div>

          <div className="site-statistics">
            <div className="stat-item">
              <h3>200+</h3>
              <p>International Brands</p>
            </div>

            <div className="stat-item">
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>

            <div className="stat-item">
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="hero-image" aria-label="Fashion model illustration" />
      </div>
    </section>
  )
}

export default Hero;