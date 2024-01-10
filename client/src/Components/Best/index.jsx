import React from 'react'
import "./index.scss"

function Best() {
  return (
    <section className='products'>
      <div className="prod-head">
        <p>Popular Item in the market</p>
        <h2>Best Sellers</h2>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="img">
            <img src='https://preview.colorlib.com/theme/aroma/img/product/product6.png' alt="" />
            <div className="card-icons">
              <i className='fa-solid fa-search'></i>
              <i className='fa-solid fa-bag-shopping'></i>
              <i className='fa-regular fa-heart'></i>
            </div>
          </div>
          <div className="card-texts">
            <span>Accessories</span>
            <h3>Quartz Belt Watch</h3>
            <p>$150.00</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src='https://preview.colorlib.com/theme/aroma/img/product/product5.png' alt="" />
            <div className="card-icons">
              <i className='fa-solid fa-search'></i>
              <i className='fa-solid fa-bag-shopping'></i>
              <i className='fa-regular fa-heart'></i>
            </div>
          </div>
          <div className="card-texts">
            <span>Accessories</span>
            <h3>Quartz Belt Watch</h3>
            <p>$150.00</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src='https://preview.colorlib.com/theme/aroma/img/product/product8.png' alt="" />
            <div className="card-icons">
              <i className='fa-solid fa-search'></i>
              <i className='fa-solid fa-bag-shopping'></i>
              <i className='fa-regular fa-heart'></i>
            </div>
          </div>
          <div className="card-texts">
            <span>Accessories</span>
            <h3>Quartz Belt Watch</h3>
            <p>$150.00</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src='https://preview.colorlib.com/theme/aroma/img/product/product7.png' alt="" />
            <div className="card-icons">
              <i className='fa-solid fa-search'></i>
              <i className='fa-solid fa-bag-shopping'></i>
              <i className='fa-regular fa-heart'></i>
            </div>
          </div>
          <div className="card-texts">
            <span>Accessories</span>
            <h3>Quartz Belt Watch</h3>
            <p>$150.00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Best