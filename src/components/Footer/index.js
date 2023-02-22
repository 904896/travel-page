import './index.css'

const Footer = () => (
  <div className="grid-container">
    <div className="grid-item">
      <h3>Tripy</h3>
      <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
      <img
        src="https://i.ibb.co/YW7vHMJ/Vector.png"
        alt="Vector"
        className="icons"
      />

      <img
        src="https://i.ibb.co/vXN9t0n/Vector.png"
        alt="Vector"
        className="icons"
      />

      <img
        src="https://i.ibb.co/mhgk66P/Vector.png"
        alt="Vector"
        className="icons"
      />
    </div>

    <div className="grid-item">
      <h3>About</h3>
      <ul className="ul">
        <li>
          <a href="#why-tripy" style={{textDecoration: 'none'}}>
            About Us
          </a>
        </li>
        <li>
          <a href="#partner" style={{textDecoration: 'none'}}>
            Features
          </a>
        </li>
        <li>
          <a href="#faq" style={{textDecoration: 'none'}}>
            News
          </a>
        </li>
        <li>
          <a href="#blog" style={{textDecoration: 'none'}}>
            Plans
          </a>
        </li>
      </ul>
    </div>

    <div className="grid-item">
      <h3>Company</h3>
      <ul className="ul">
        <li>
          <a href="#why-tripy" style={{textDecoration: 'none'}}>
            Why Tripy
          </a>
        </li>
        <li>
          <a href="#partner" style={{textDecoration: 'none'}}>
            Partner with us
          </a>
        </li>
        <li>
          <a href="#faq" style={{textDecoration: 'none'}}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#blog" style={{textDecoration: 'none'}}>
            Blog
          </a>
        </li>
      </ul>
    </div>

    <div className="grid-item">
      <h3>Support</h3>
      <ul className="ul">
        <li>
          <a href="#account" style={{textDecoration: 'none'}}>
            Account
          </a>
        </li>
        <li>
          <a href="#support-center" style={{textDecoration: 'none'}}>
            Support center
          </a>
        </li>
        <li>
          <a href="#feedback" style={{textDecoration: 'none'}}>
            Feedback
          </a>
        </li>
        <li>
          <a href="#contact-us" style={{textDecoration: 'none'}}>
            Contact us
          </a>
        </li>
      </ul>
    </div>

    <div className="grid-item">
      <h3>Newsletter</h3>
      <p>Subscribe our newsletter and get exciting offers</p>
      <form>
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">&#10148;</button>
      </form>
    </div>
  </div>
)

export default Footer
