import React from 'react'
import { Link } from "react-router-dom"
import "./index.scss"

function LatestNews() {
  return (
    <section className='news'>
      <div className="news-head">
        <p>Popular Item in the market</p>
        <h2>Latest News</h2>
      </div>
      <div className="news-wrapper">
        <div className="news-card">
          <div className="news-img">
            <img src="	https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="" />
          </div>
          <div className="news-texts">
            <div className="admin">
              <p>By Admin</p>
              <p>2 Comments</p>
            </div>
            <h3>The Richland Center Shooping News and weekly shooper</h3>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            <Link> Read more</Link>
          </div>
        </div>
        <div className="news-card">
          <div className="news-img">
            <img src="	https://preview.colorlib.com/theme/aroma/img/blog/blog2.png" alt="" />
          </div>
          <div className="news-texts">
            <div className="admin">
              <p>By Admin</p>
              <p>2 Comments</p>
            </div>
            <h3>The Shopping News also offers top-quality printing services</h3>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            <Link> Read more</Link>
          </div>
        </div>
        <div className="news-card">
          <div className="news-img">
            <img src="	https://preview.colorlib.com/theme/aroma/img/blog/blog3.png" alt="" />
          </div>
          <div className="news-texts">
            <div className="admin">
              <p>By Admin</p>
              <p>2 Comments</p>
            </div>
            <h3>Professional design staff and efficient equipment you’ll find we offer</h3>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            <Link> Read more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews