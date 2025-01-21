"use client"

import { useEffect, useState } from "react"

type ProductProps = {
  id: string,
  title: string,
  description: string,
  price: number 
}

export default function Products() {
  
  const [products, setProducts] = useState<ProductProps[]>([])


  useEffect(() => {

    fetch('/api/products').then(res => res.json()).then(data => setProducts(data)).catch(err => console.log("error fetching products:", err))

  }, [])


  return (
    <div>

      <h1>Products</h1>
      
      <ul>
        {products && products.length > 0 ? products.map(item => (
          <li key={item.id}>
            <h2>{item.title }</h2>
            <p>{item.description }</p>
            <p>{item.price }</p>
          </li>
        )) : <p>No Products</p>}
      </ul>

    </div>
  )
}
