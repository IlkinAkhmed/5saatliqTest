import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'

function Details() {
  const [product, setProduct] = useState([])

  const { id } = useParams()

  async function fetchData() {
    const res = await axios(`http://localhost:3300/product/${id}`)
    setProduct(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(product);
  return (
    <>
      <Helmet>
        <title>Home | wishlist</title>
      </Helmet>
      <section className='products'>
        <div className="prod-head">
          <h2>Details</h2>
        </div>
        <div className="wrapper">
          <div className="card">
            <div className="img">
              <img src={product.image} alt="" />
            </div>
            <div className="card-texts">
              <span>{product.category}</span>
              <h3>{product.title}</h3>
              <p>${product.price}.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details