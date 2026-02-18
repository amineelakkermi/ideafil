'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  direction = 'up',
  ease = 'power3.out'
}) => {
  const containerRef = useRef(null)
  const elementsRef = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    // Get all text elements to animate
    const elements = elementsRef.current.filter(el => el)
    
    if (elements.length === 0) return

    // Set initial state based on direction
    const getInitialState = () => {
      switch (direction) {
        case 'up':
          return { y: 60, opacity: 0 }
        case 'down':
          return { y: -60, opacity: 0 }
        case 'left':
          return { x: 60, opacity: 0 }
        case 'right':
          return { x: -60, opacity: 0 }
        case 'scale':
          return { scale: 0.8, opacity: 0 }
        default:
          return { y: 60, opacity: 0 }
      }
    }

    // Set initial state
    gsap.set(elements, getInitialState())

    // Create timeline for animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })

    // Add animation to timeline
    tl.to(elements, {
      ...getInitialState(),
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill()
        }
      })
    }
  }, [delay, duration, stagger, direction, ease])

  // Helper function to add refs
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el)
    }
  }

  return (
    <div ref={containerRef} className={`animated-text-container ${className}`}>
      {typeof children === 'string' ? (
        // If children is a string, split into words for word-by-word animation
        children.split(' ').map((word, index) => (
          <span key={index} ref={addToRefs} className="inline-block">
            {word}&nbsp;
          </span>
        ))
      ) : (
        // If children is JSX, add ref to each child
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ref: addToRefs,
              key: child.key || index
            })
          }
          return child
        })
      )}
    </div>
  )
}

export default AnimatedText
