'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { worksData } from "../data/worksData"
import styles from "../style"

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
        let horizontalScrollLength = pinWrapWidth - window.innerWidth

        ScrollTrigger.addEventListener("refreshInit", refresh)

        gsap.to(pinWrap, {
          x: () => horizontalScrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            pin: true,
            scrub: 1,
            start: "top top",
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
      ref={component}
      id="portfolio"
      className={`relative overflow-hidden bg-dark ${styles.padding}`}
    >
      <div className="horiz-gallery-wrapper flex flex-nowrap justify-start relative">
        {/* justify-start force le premier élément à gauche */}
        <div className="horiz-gallery-strip flex flex-nowrap">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="w-[33vw] p-8 box-content flex-shrink0"
            >
              <Image
                src={work.img}
                alt={work.title}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HorizontalPortfolio
