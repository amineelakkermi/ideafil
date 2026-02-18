'use client'

import React from 'react'
import { useGSAPAnimation } from '../hooks/useGSAPAnimation'

/**
 * Composant réutilisable pour les animations de texte avec GSAP
 */
const AnimatedTextComponent = ({ 
  children, 
  className = '', 
  animationOptions = {},
  tag = 'div' 
}) => {
  const elementRef = React.useRef(null)

  // Animation personnalisée
  useGSAPAnimation(elementRef, {
    duration: 0.8,
    ease: 'power3.out',
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1 },
    stagger: true,
    staggerAmount: 0.1,
    ...animationOptions
  })

  // Fonction pour gérer les enfants avec refs
  const renderChildren = () => {
    if (typeof children === 'string') {
      // Si c'est une chaîne, diviser en mots
      return children.split(' ').map((word, index) => (
        <span key={index} className="inline-block">
          {word}&nbsp;
        </span>
      ))
    }
    
    // Si c'est du JSX, ajouter la ref aux enfants
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          key: child.key || index
        })
      }
      return child
    })
  }

  const Tag = tag

  return (
    <Tag ref={elementRef} className={`animated-text ${className}`}>
      {renderChildren()}
    </Tag>
  )
}

/**
 * Composant spécialisé pour les titres animés
 */
const AnimatedTitle = ({ children, className = '', level = 1, animationOptions = {} }) => {
  const TitleTag = `h${level}`
  
  return (
    <AnimatedTextComponent 
      tag={TitleTag}
      className={`font-bold ${className}`}
      animationOptions={{
        duration: 1,
        from: { y: 50, opacity: 0 },
        ...animationOptions
      }}
    >
      {children}
    </AnimatedTextComponent>
  )
}

/**
 * Composant spécialisé pour les paragraphes animés
 */
const AnimatedParagraph = ({ children, className = '', color = 'gray-300', animationOptions = {} }) => {
  return (
    <AnimatedTextComponent 
      tag="p"
      className={`font-normal text-[18px] leading-[30.8px] text-${color} text-right ${className}`}
      animationOptions={{
        duration: 1.2,
        from: { y: 30, opacity: 0 },
        stagger: true,
        staggerAmount: 0.05,
        ...animationOptions
      }}
    >
      {children}
    </AnimatedTextComponent>
  )
}

/**
 * Composant spécialisé pour les listes animées
 */
const AnimatedList = ({ children, className = '', animationOptions = {} }) => {
  return (
    <AnimatedTextComponent 
      tag="ul"
      className={`space-y-4 ${className}`}
      animationOptions={{
        duration: 0.9,
        from: { y: 35, opacity: 0 },
        stagger: true,
        staggerAmount: 0.15,
        ...animationOptions
      }}
    >
      {children}
    </AnimatedTextComponent>
  )
}

export { AnimatedTextComponent, AnimatedTitle, AnimatedParagraph, AnimatedList }
