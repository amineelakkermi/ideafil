'use client'

import AnimatedText from './AnimatedText'

const AnimatedTextExample = () => {
  return (
    <div className="min-h-screen bg-dark text-white p-12">
      {/* Example 1: Simple title animation */}
      <AnimatedText 
        className="mb-16"
        delay={0}
        stagger={0.1}
        direction="up"
      >
        <h1 className="text-5xl font-bold">
          Animation Texte Professionnelle
        </h1>
      </AnimatedText>

      {/* Example 2: Paragraph with word-by-word animation */}
      <AnimatedText 
        className="mb-16 max-w-2xl"
        delay={0.2}
        stagger={0.05}
        direction="up"
        duration={1}
      >
        Ceci est un exemple d'animation de texte fluide et professionnelle utilisant GSAP. 
        L'animation se déclenche au scroll et offre une expérience utilisateur élégante.
      </AnimatedText>

      {/* Example 3: Multiple elements with different directions */}
      <div className="space-y-8">
        <AnimatedText 
          delay={0.3}
          direction="left"
          stagger={0.15}
        >
          <h2 className="text-3xl font-semibold text-purple-300">
            Animation depuis la gauche
          </h2>
        </AnimatedText>

        <AnimatedText 
          delay={0.4}
          direction="right"
          stagger={0.1}
        >
          <p className="text-lg text-gray-300">
            Les éléments peuvent animer depuis différentes directions pour créer des effets variés.
          </p>
        </AnimatedText>

        <AnimatedText 
          delay={0.5}
          direction="scale"
          stagger={0.2}
          duration={0.6}
        >
          <h3 className="text-2xl font-medium text-blue-300">
            Animation avec effet de scale
          </h3>
        </AnimatedText>
      </div>

      {/* Example 4: List items */}
      <div className="mt-16">
        <AnimatedText 
          delay={0.6}
          stagger={0.1}
          direction="up"
        >
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Animation fluide et professionnelle
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Compatible avec React et Next.js
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Personnalisable selon vos besoins
            </li>
          </ul>
        </AnimatedText>
      </div>

      {/* Example 5: Complex content with mixed elements */}
      <div className="mt-16 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
        <AnimatedText 
          delay={0.8}
          stagger={0.08}
          direction="up"
          ease="back.out(1.7)"
        >
          <div>
            <h4 className="text-2xl font-bold mb-4 text-purple-200">
              Contenu complexe animé
            </h4>
            <p className="mb-4 text-gray-300">
              Le composant peut gérer des structures complexes avec différents types d'éléments.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-purple-500/30 rounded-lg">
                Élément 1
              </span>
              <span className="px-4 py-2 bg-blue-500/30 rounded-lg">
                Élément 2
              </span>
              <span className="px-4 py-2 bg-pink-500/30 rounded-lg">
                Élément 3
              </span>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  )
}

export default AnimatedTextExample
