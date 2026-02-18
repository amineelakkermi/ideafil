'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook personnalisé pour les animations GSAP réutilisables
 * @param {Object} options - Options d'animation
 * @param {string} options.trigger - Sélecteur du trigger (par défaut: l'élément lui-même)
 * @param {string} options.start - Point de départ (par défaut: 'top 85%')
 * @param {string} options.end - Point de fin (par défaut: 'bottom 15%')
 * @param {number} options.duration - Durée de l'animation (par défaut: 0.8)
 * @param {string} options.ease - Type d'easing (par défaut: 'power3.out')
 * @param {Object} options.from - État initial (par défaut: { y: 30, opacity: 0 })
 * @param {Object} options.to - État final (par défaut: { y: 0, opacity: 1 })
 * @param {boolean} options.stagger - Activer le stagger (par défaut: false)
 * @param {number} options.staggerAmount - Délai entre éléments (par défaut: 0.1)
 */
const useGSAPAnimation = (elementRef, options = {}) => {
  const {
    trigger = null,
    start = 'top 85%',
    end = 'bottom 15%',
    duration = 0.8,
    ease = 'power3.out',
    from = { y: 30, opacity: 0 },
    to = { y: 0, opacity: 1 },
    stagger = false,
    staggerAmount = 0.1
  } = options

  useEffect(() => {
    if (!elementRef.current) return

    // Configuration de base
    const animationConfig = {
      ...from,
      ...to,
      duration,
      ease,
      scrollTrigger: {
        trigger: trigger || elementRef.current,
        start,
        end,
        toggleActions: 'play none none reverse'
      }
    }

    // Ajouter le stagger si nécessaire
    if (stagger && elementRef.current.children) {
      const elements = Array.from(elementRef.current.children)
      gsap.from(elements, {
        ...animationConfig,
        stagger: staggerAmount
      })
    } else {
      gsap.from(elementRef.current, animationConfig)
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === (trigger || elementRef.current)) {
          trigger.kill()
        }
      })
    }
  }, [trigger, start, end, duration, ease, from, to, stagger, staggerAmount])
}

export default useGSAPAnimation
