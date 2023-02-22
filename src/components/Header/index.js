import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img className="logo" src="https://i.ibb.co/qsSnyrW/Dot.png" alt="Dot" />
      <h1 className="title">Tripy</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/services">
          Services
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/price">
          Price
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/footer">
          Footer
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/feedback">
          Feedback
        </Link>
      </li>
    </ul>
    <div>
      <button type="button" className="reg-btn">
        Register
      </button>
    </div>
  </nav>
)

export default Header
