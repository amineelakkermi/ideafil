'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'

gsap.registerPlugin(ScrollTrigger)

const Title = ({ title }) => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <div>
      <h1
        ref={titleRef}
        className={`${styles.title} text-white text-right`}
      >
        {title}
      </h1>
    </div>
  )
}

export default Title
