import React, { useState } from 'react'

export default function Carousel({ images }: { images: string[] }) {
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div>
 <button onClick={prevSlide}>Prev</button>
     

      <img src={images[currentIndex]} alt={ images[currentIndex] } />

     
       <button onClick={nextSlide}>Next</button>

    </div>
  )
}
