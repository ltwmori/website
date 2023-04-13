// Carousel.tsx
import React, { useState } from 'react'

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
      {/* {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))} */}
      <img src={images[currentIndex]} alt="image description" />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-3 py-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-3 py-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  )
}

export default Carousel
