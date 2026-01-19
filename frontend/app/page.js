import { products } from '@/constants/products'
import HomePage from '@/modules/home/screens/HomePage'
import Image from 'next/image'

export default function Home() {
  // dummy data fetching method
  // const products = await fetch('https://fakestoreapi.com/products?limit=5')
  const data = products
  return <HomePage products={products} />
}
