'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// دالة عامة لتطبيق stagger على مجموعة عناصر
export const staggerText = (elements, options = {}) => {
  gsap.set(elements, { opacity: 0, y: 20 })
  gsap.to(elements, {
    scrollTrigger: {
      trigger: elements[0]?.parentNode,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  })
}
