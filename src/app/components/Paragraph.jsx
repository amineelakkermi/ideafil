'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'

gsap.registerPlugin(ScrollTrigger)

const Paragraph = ({ children, className = "" , color = "gray-300" }) => {
  const paragraphRef = useRef(null)

  useEffect(() => {
    gsap.from(paragraphRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <p
      ref={paragraphRef}
      className={`font-normal text-[18px] leading-[30.8px] text-${color} text-right ${className}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
