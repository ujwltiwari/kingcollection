'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [name, setName] = useState(1)

  useEffect(() => {
    console.log('ankit')
  }, [name])

  return (
    <div>
      Page
      <Button>Heloo</Button>
    </div>
  )
}

export default Page
