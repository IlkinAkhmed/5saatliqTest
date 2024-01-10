import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./index.scss";
import { WishlistContext } from '../../context/wishlist';

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const navigate = useNavigate()
  const { wishlist } = useContext(WishlistContext)
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
        </div>
        <ul className="nav-texts">
          <li>
            <NavLink to={'/'} className={"nav-link"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/shop'} className={"nav-link"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={'/blog'} className={"nav-link"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={'/add'} className={"nav-link"}>Add</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className={"nav-link"}>Contact</NavLink>
          </li>
        </ul>
        <div className="nav-icons">
          <i className='fa-solid fa-search'></i>
          <div className="basket">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='message'>2</span>
          </div>
          <div className="wishlist">
            <i onClick={() => navigate('/wishlist')} className='fa-regular fa-heart'></i>
            <span className='message'>{wishlist.length}</span>

          </div>
          <button className='nav-buy-button'>Buy Now</button>
        </div>
        <i onClick={() => setNavIsOpen(!navIsOpen)} className={`${navIsOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
      </div>
      <div className={`mobile-nav ${navIsOpen ? 'mobile-nav-open' : ''}`}>
        <ul className="mobile-nav-inner">
          <li>
            <NavLink to={'/'} className={"mobile-nav-link"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/shop'} className={"mobile-nav-link"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={'/blog'} className={"mobile-nav-link"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={'/add'} className={"mobile-nav-link"}>Add</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className={"mobile-nav-link"}>Contact</NavLink>
          </li>
        </ul>
        <div className="mobile-nav-icons">
          <i className='fa-solid fa-search'></i>
          <div className="basket">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='basket-message'>2</span>
          </div>
          <i className='fa-regular fa-heart'></i>
          <div className="button">
            <button className='nav-buy-button'>Buy Now</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar