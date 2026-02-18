'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'

gsap.registerPlugin(ScrollTrigger)

const Title = ({ children, className }) => {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current

    // نقسم النص إلى كلمات
    const words = el.textContent.split(' ').map(word => `<span class="inline-block mr-2">${word}</span>`).join(' ')
    el.innerHTML = words

    const spans = el.querySelectorAll('span')

    // إعداد GSAP + ScrollTrigger لكل الكلمات
    gsap.set(spans, { opacity: 0, y: 20 })

    gsap.to(spans, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  return (
    <div>
      <h1
        ref={titleRef}
        className={`text-white text-center ${className}`}
      >
        {children}
      </h1>
    </div>
  )
}

export default Title
