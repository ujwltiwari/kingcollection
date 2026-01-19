import ProductCard from '@/components/ProductCard'
import React from 'react'

const HomePage = ({ products }) => {
  return (
    <div>
      HomePage
      <div className='flex flex-wrap gap-4 justify-center'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <ProductCard />
    </div>
  )
}

export default HomePage
