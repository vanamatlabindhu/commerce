

import React, { useEffect, useState } from 'react'
import './Product.css'
import ProductCard from './ProductCard'

function Product() {
  const [products, setProducts] = useState([])

  function fetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="products-container">
      {
        products.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              title={prod.title}
              image={prod.image}
              rate={prod.rating.rate}
              price={prod.price}
              category={prod.category}
            />
          )
        })
      }
    </div>
  )
}

export default Product