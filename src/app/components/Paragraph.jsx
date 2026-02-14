'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from '../style'

const Paragraph = ({ children, className = "" , color = "white" }) => {
  const paragraphRef = useRef(null)

  useEffect(() => {
    gsap.from(paragraphRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
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
