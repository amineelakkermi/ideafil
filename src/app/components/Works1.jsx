'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import styles from "../style"
import Divider from "./Divider"
import RoundedTitle from "./RoundedTitle"

import conex from "../../../public/works/conex.png"
import meliha from "../../../public/works/meliha.png"
import rahafah from "../../../public/works/rahafah.png"
import gsa from "../../../public/works/gsa.png"
import vilack from "../../../public/works/vilack.png"

const worksData = [
  { id: 1, title: "CONEX ™", img: conex },
  { id: 2, title: "Meliha Shawarma™", img: meliha },
  { id: 3, title: "Rahafah", img: rahafah },
  { id: 4, title: "Gsa Group", img: gsa },
  { id: 5, title: "Vilack", img: vilack },
]

const Works1 = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // translate X de 0% à -100%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="works" className="bg-dark ">

      {/* Header */}
      <div className={`max-w-6xl mx-auto px-4 flex flex-col gap-12 items-center ${styles.padding}`}>
        <div className="w-full flex justify-between items-center">
          <RoundedTitle title="نماذج من أعمالنا" />
          <span className="hidden sm:block text-white text-[16px] lg:text-[20px] text-right">
            مهما كان التحدي <br />
            نفصل لك الحل لي يناسبك
          </span>
        </div>
        <Divider />
      </div>

      {/* Scroll Section */}
      <div ref={sectionRef} className="relative h-[500vh]">

        <div className="sticky top-0 h-screen overflow-hidden flex items-center">

          <motion.div
            style={{ x }}
            className="flex gap-16 px-20 will-change-transform"
          >
            {worksData.map((work, index) => (
              <div
                key={work.id}
                className="group relative w-[400px] md:w-[500px] h-[300px] md:h-[400px] flex-shrink-0 rounded-2xl overflow-hidden"
              >
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width:768px) 90vw, 500px"
                  className="object-cover"
                />

             
                <div className="absolute bottom-3 right-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                <h3 className="text-white text-xl md:text-2xl font-semibold text-right whitespace-nowrap">
                {work.title}
               </h3>
               </div>
              
                </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div className={`max-w-6xl mx-auto px-4 flex flex-col gap-12 items-center ${styles.padding}`}>
        <Divider />
        <Link
          href="/works"
          className="inline-block px-7 py-3 rounded-full border-2 border-gray-400 hover:border-white/60 transition-colors duration-300"
        >
          <p className="text-gray-400 text-base sm:text-lg hover:text-white transition-colors duration-300">
            مشاهدة المزيـــد
          </p>
        </Link>
      </div>

    </section>
  )
}

export default Works1
