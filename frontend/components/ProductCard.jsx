import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'

const ProductCard = ({
  discount,
  isBestSeller,
  isTrending,
  rating,
  noOfreviews,
  image,
}) => {
  return (
    <div className='w-1/5'>
      <Card className='p-0! pb-12! relative'>
        <img src={image} className='rounded-t-lg h-[400px] object-cover' />
        {/* top left info */}
        <div className='flex flex-col gap-1 absolute top-2 left-2'>
          {discount && discount > 0 && (
            <Badge variant='destructive'>{discount}% OFF</Badge>
          )}
          {isBestSeller && <Badge className='bg-[#F9D6A4]! text-black'>Bestseller</Badge>}
          {isTrending && <Badge className='bg-[#AD46FF]!'>Trending</Badge>}
        </div>

        <CardFooter>
          <p>Card Footer</p>
          <p>Levis</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductCard
