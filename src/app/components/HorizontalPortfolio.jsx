'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { worksData } from "../data/worksData"
import styles from "../style"
import behance from '../../../public/behance.png'

const HorizontalPortfolio = () => {
  const component = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".horiz-gallery-wrapper")

      sections.forEach((sec) => {
        const pinWrap = sec.querySelector(".horiz-gallery-strip")

        function refresh() {
          pinWrapWidth = pinWrap.scrollWidth
          horizontalScrollLength = pinWrapWidth - window.innerWidth + 150
        }

        let pinWrapWidth = pinWrap.scrollWidth
        let horizontalScrollLength = pinWrapWidth - window.innerWidth + 150

        ScrollTrigger.addEventListener("refreshInit", refresh)

        gsap.to(pinWrap, {
          x: () => horizontalScrollLength, // défilement vers la gauche
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            pin: true,
            scrub: 1,
            start: "center center",
            end: () => `+=${pinWrapWidth}`,
            invalidateOnRefresh: true,
          }
        })
      })
    }, component)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="portfolio"
      ref={component}
      className={`relative overflow-hidden bg-dark ${styles.padding}`}
    >
      <div className="horiz-gallery-wrapper flex flex-nowrap justify-start relative">
        <div dir="rtl" className="horiz-gallery-strip flex flex-nowrap gap">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="relative w-[400px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[400px] 
              flex-shrink-0 group"
            >
              <Image
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay on hover */}
              <div className="absolute flex bottom-3 right-3
               opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="flex  items-end gap-2">
             {/* Title */}
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 text-right">
                    <h3 className="text-white text-lg md:text-xl font-semibold">
                      {work.title}
                    </h3>
                  </div>
                  {/* Behance Link */}
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2">
                    <a
                      href={work.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/90 hover:text-white text-base md:text-lg"
                    >
                      <span>مشاهدة في</span>
                      <Image
                        src={behance}
                        alt="Behance"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </a>
                  </div>
                  
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HorizontalPortfolio
