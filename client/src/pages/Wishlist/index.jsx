import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/wishlist'
import { Helmet } from 'react-helmet-async';

function Wishlist() {
  const { wishlist, handleDelete } = useContext(WishlistContext)


  return (
    <>
      <Helmet>
        <title>Home | wishlist</title>
      </Helmet>
      <section className='products'>
        <div className="wish-head">
          <h2>Wishlist</h2>
          <i className='fa-regular fa-heart'></i>
        </div>
        <div className="wrapper">
          {wishlist && wishlist.map(item => (
            <div key={item._id} className="card">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="card-texts">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>${item.price}.00</p>
                <i className='fa-solid fa-trash-can' onClick={() => handleDelete(item._id)}></i>
              </div>
            </div>
          ))
          }
        </div>
      </section>
    </>
  )
}

export default Wishlist