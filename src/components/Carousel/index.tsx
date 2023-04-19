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
    <div className="relative">
      <img src={images[currentIndex]} alt="image description" />
      <button
        className="absolute left-0 bottom-0 transform -translate-y-1/2 bg-opacity-50px-3 py-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <img className="rotate-180" src={Arrow}></img>
      </button>
      <button
        className="absolute right-0 bottom-0 transform -translate-y-1/2 bg-opacity-50 px-3 py-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <img src={Arrow}></img>
      </button>
    </div>
  )
}

export default Carousel
