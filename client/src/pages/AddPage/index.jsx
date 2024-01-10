import React, { useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import axios from 'axios'

function AddPage() {
  const [image, setimage] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')

  function handleChange(value, setState) {
    setState(value)
  }

  async function fetchData() {
    await axios.post('http://localhost:3300/product', {
      image: image,
      title: title,
      price: price,
      category: category
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchData()
  }

  return (
    <>
      <Helmet>
        <title>Home | Add</title>
      </Helmet>
      <section className='add'>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">Image</label>
          <input type="text" onChange={(e) => handleChange(e.target.value, setimage)} placeholder='image link...' />
          <label htmlFor="">Title</label>
          <input type="text" onChange={(e) => handleChange(e.target.value, setTitle)} placeholder='title...' />
          <label htmlFor="">Price</label>
          <input type="number" onChange={(e) => handleChange(e.target.value, setPrice)} placeholder='price...' />
          <label htmlFor="">Category</label>
          <input type="text" onChange={(e) => handleChange(e.target.value, setCategory)} placeholder='category...' />
          <input type="submit" />
        </form>
      </section>
    </>
  )
}

export default AddPage