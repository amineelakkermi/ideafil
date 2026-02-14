'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const BigTitle = ({ title }) => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,         
      opacity: 0,     
      duration: 1,    
      ease: 'power3.out', 
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
