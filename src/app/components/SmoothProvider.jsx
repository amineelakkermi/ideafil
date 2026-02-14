'use client'

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

const SmoothProvider = ({ children }) => {

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,            // un peu plus doux, pas trop lisse
    normalizeScroll: true,
    ignoreMobileResize: true,
    smoothTouch: 0.1,        // pour mobile
    touchMultiplier: 2,
  })

  // Navbar sticky
  const navbar = document.querySelector('nav')
  if (navbar) {
    smoother.effects(navbar, { speed: 0, lag: 0 })
  }

  return () => {
    smoother.kill()
  }
}, [])


  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}

export default SmoothProvider
