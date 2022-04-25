import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AnimatedBg, Transition } from 'scroll-background'
import './Position.css'
const Position = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  }, [navbar])

  return (
    <AnimatedBg>
      <div
        style={{ backgroundColor: window.scrollY > 66 ? 'red' : 'white' }}
        className="static z-0 py-5 top-0 left-0 right-0 nav-fixed"
      >
        Contact
        <div className="static">
          <p>Static child</p>
        </div>
        <div className="inline-block">
          <p>Static sibling1</p>
        </div>
        <div className="absolute...">
          <p>Absolute child</p>
        </div>
        <div className="inline-block...">
          <p>Static sibling2</p>
        </div>
      </div>
    </AnimatedBg>
  )
}

export default Position
