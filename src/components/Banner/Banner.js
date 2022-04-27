import React, { useEffect, useRef, useState } from 'react'
import './Banner.css'
const featuredImages = [
  '/images/banner_banner-1',
  '/images/banner_banner-2',
  '/images/banner_banner-3',
]
let count = 0
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef()
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length

    setCurrentIndex(count)
  }

  const handleOnPrevClick = () => {
    const productLength = featuredImages.length
    count = (currentIndex + productLength - 1) % productLength
    console.log(count)
    setCurrentIndex(count)
  }

  useEffect(() => {
    startSlider()
  }, [])
  const startSlider = () => {
    const slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  return (
    <div className="absolute... py-16 w-full mb-10">
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div
            ref={slideRef}
            className="carousel-item active relative float-left w-full"
          >
            <img
              className="h-80 w-full"
              src={featuredImages[currentIndex] + '.jpg'}
              alt=""
            />
          </div>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button className="text-white" onClick={handleOnPrevClick}>
            Previous
          </button>
          <button className="text-white" onClick={handleOnNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
