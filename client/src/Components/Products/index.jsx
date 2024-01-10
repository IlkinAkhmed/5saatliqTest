import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { WishlistContext } from '../../context/wishlist'
import { useNavigate } from 'react-router'

function Products() {

  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { handleWishlist } = useContext(WishlistContext)
  const [name, setName] = useState('')


  const navigate = useNavigate()
  async function fetchData() {
    const res = await axios.get('http://localhost:3300/product')
    setProducts(res.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <section className='products'>
      <div className="prod-head">
        <p>Popular Item in the market</p>
        <h2>Trending Product</h2>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='search...' />
      </div>
      <div className="wrapper">
        {isLoading ? (<h1>isLoading...</h1>
        ) : (
          products && products
            .filter(item => item.title.toLowerCase().trim().includes(name.toLowerCase().trim()))
            .map(item => (
              <div key={item._id} className="card">
                <div  className="img">
                  <img src={item.image} alt="" />
                  <div className="card-icons">
                    <i onClick={() => navigate(`/details/${item._id}`)} className='fa-solid fa-search'></i>
                    <i className='fa-solid fa-bag-shopping'></i>
                    <i onClick={() => handleWishlist(item)} className='fa-regular fa-heart'></i>
                  </div>
                </div>
                <div className="card-texts">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>${item.price}.00</p>
                </div>
              </div>
            ))
        )}
      </div>
    </section>
  )
}

export default Products