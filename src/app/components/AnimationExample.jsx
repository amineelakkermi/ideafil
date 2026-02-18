'use client'

import React from 'react'
import { AnimatedTitle, AnimatedParagraph, AnimatedList } from './AnimatedTextComponents'

const AnimationExample = () => {
  return (
    <div className="min-h-screen bg-dark text-white p-12 space-y-16">
      
      {/* Exemple 1: Titre animé simple */}
      <section>
        <AnimatedTitle className="text-purple-300">
          Titre Animé Professionnel
        </AnimatedTitle>
      </section>

      {/* Exemple 2: Paragraphe animé */}
      <section>
        <AnimatedParagraph 
          color="gray-200"
          animationOptions={{
            start: 'top 90%',
            duration: 1.5
          }}
        >
          Ce paragraphe utilise une animation fluide avec GSAP ScrollTrigger. 
          L'animation se déclenche lorsque l'élément entre dans le viewport,
          offrant une expérience utilisateur élégante et professionnelle.
        </AnimatedParagraph>
      </section>

      {/* Exemple 3: Liste animée */}
      <section>
        <AnimatedTitle level={2} className="text-blue-300 mb-6">
          Fonctionnalités Avancées
        </AnimatedTitle>
        
        <AnimatedList 
          animationOptions={{
            from: { y: 60, opacity: 0 },
            staggerAmount: 0.2
          }}
        >
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Animation réutilisable et modulaire
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Compatible avec tous types de contenu
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Personnalisation complète des paramètres
          </li>
        </AnimatedList>
      </section>

      {/* Exemple 4: Animation personnalisée */}
      <section>
        <AnimatedTitle 
          level={3}
          className="text-pink-300 mb-4"
          animationOptions={{
            from: { x: -100, opacity: 0 },
            to: { x: 0, opacity: 1 },
            duration: 1.2,
            ease: 'back.out(1.7)'
          }}
        >
          Animation depuis la gauche
        </AnimatedTitle>
        
        <AnimatedParagraph 
          color="gray-300"
          animationOptions={{
            from: { scale: 0.8, opacity: 0 },
            to: { scale: 1, opacity: 1 },
            duration: 0.8,
            stagger: false
          }}
        >
          Cette animation utilise un effet de scale au lieu du mouvement vertical.
          Chaque composant peut avoir ses propres paramètres d'animation.
        </AnimatedParagraph>
      </section>

      {/* Exemple 5: Contenu complexe */}
      <section className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
        <AnimatedTitle 
          level={2}
          className="text-purple-200 mb-6"
          animationOptions={{
            staggerAmount: 0.08,
            duration: 1.5
          }}
        >
          Contenu Mixte Animé
        </AnimatedTitle>
        
        <AnimatedParagraph color="gray-200">
          Les composants peuvent gérer des structures complexes avec différents types d'éléments.
          Chaque élément peut avoir sa propre configuration d'animation.
        </AnimatedParagraph>
        
        <div className="flex gap-4 mt-6">
          <AnimatedTextComponent 
            tag="span"
            className="px-4 py-2 bg-purple-500/30 rounded-lg"
            animationOptions={{
              from: { y: 20, opacity: 0 },
              duration: 0.6
            }}
          >
            Élément 1
          </AnimatedTextComponent>
          
          <AnimatedTextComponent 
            tag="span"
            className="px-4 py-2 bg-blue-500/30 rounded-lg"
            animationOptions={{
              from: { y: 20, opacity: 0 },
              duration: 0.8,
              delay: 0.2
            }}
          >
            Élément 2
          </AnimatedTextComponent>
          
          <AnimatedTextComponent 
            tag="span"
            className="px-4 py-2 bg-pink-500/30 rounded-lg"
            animationOptions={{
              from: { y: 20, opacity: 0 },
              duration: 1,
              delay: 0.4
            }}
          >
            Élément 3
          </AnimatedTextComponent>
        </div>
      </section>

    </div>
  )
}

export default AnimationExample
