// Carousel.tsx
import React, { useState } from 'react'
import Arrow from '../../../assets/icons8-arrow.png'

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
    console.log(currentIndex)
    console.log(images)
  }

  return (
    <div className="relative flex justify-center">
      <img src={images[currentIndex]} alt="image description" />
      <button
        className="absolute right-1/2 -bottom-12 transform -translate-y-1/2 bg-opacity-50px-3 py-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <img className="rotate-180 opacity-0" src={Arrow}></img>
      </button>
      <button
        className="absolute left-1/2 -bottom-12 transform -translate-y-1/2 bg-opacity-50 px-3 py-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <img src={Arrow} className="opacity-0"></img>
      </button>
    </div>
  )
}

export default Carousel
