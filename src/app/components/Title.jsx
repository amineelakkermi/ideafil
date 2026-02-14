'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from '../style'

const Title = ({ title }) => {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  return (
    <div>
      <h1
        className={`${styles.title} text-white text-right`}
      >
        {title}
      </h1>
    </div>
  )
}

export default Title
