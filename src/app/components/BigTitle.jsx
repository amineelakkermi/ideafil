'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BigTitle = ({ title }) => {
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
        className="text-[55px] lg:text-[85px] font-bold text-white"
      >
        {title}
      </h1>
    </div>
  )
}

export default BigTitle
