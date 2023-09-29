import React from 'react'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:'Early | 404'
} 

const notFound = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-6xl mx-auto mt-20'>
        <div className='text-6xl md:text-9xl font-semi-bold'>404</div>
        <div className='text-xl  font-semibold mt-6 opacity-80'>Page Not Found</div>
    </div>

  )
}

export default notFound