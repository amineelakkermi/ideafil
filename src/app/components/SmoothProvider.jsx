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
      smooth: 0, 
      normalizeScroll: true,
      ignoreMobileResize: true,
      smoothTouch: 0.1, 
      touchMultiplier: 2, 
      effects: true, 
      preventDefault: true, 
      onUpdate: self => {
        // S'assurer que le scroll est fluide
        if (self.direction === 1 || self.direction === -1) {
          // Scroll en cours
        }
      }
    })

    
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
