import React from 'react'
import { Helmet } from 'react-helmet-async'
import Best from '../../Components/Best'
import Header from '../../Components/Header'
import LatestNews from '../../Components/LatestNews'
import Products from '../../Components/Products'
import Sale from '../../Components/Sale'

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Products />
      <Sale />
      <Best />
      <LatestNews />
    </>
  )
}

export default Home