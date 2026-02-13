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
import kyar from "../../../public/works/kyar.png"


import behance from "../../../public/behance.png";




const worksData = [
  { 
    id: 1, 
    name: "CONEX ™", 
    title: "CONEX ™",
    img: conex, 
    behanceUrl: "https://www.behance.net/gallery/232705721/CONEX-"
  },
  { 
    id: 2, 
    name: "Meliha Shawarma™", 
    title: "Meliha Shawarma™",
    img: meliha, 
    behanceUrl: "https://www.behance.net/gallery/222551581/-Meliha"
  },
  { 
    id: 3, 
    name: "Rahafah", 
    title: "Rahafah",
    img: rahafah, 
    behanceUrl: "https://www.behance.net/gallery/220220707/Rahafah-"
  },
  { 
    id: 4, 
    name: "Gsa Group", 
    title: "Gsa Group",
    img: gsa, 
    behanceUrl: "https://www.behance.net/gallery/199473005/GSA-group-"
  },
  { 
    id: 5, 
    name: "Vilack", 
    title: "Vilack",
    img: vilack, 
    behanceUrl: "https://www.behance.net/gallery/220572147/Vilack"
  },
 
 
];

const Works1 = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
    speed: 0.5,
    pin: true,
  })

  // translate X de 0% à -100%
  const x = useTransform(scrollYProgress, [0 , 1], ["0%", "75%"])

  return (
    <section ref={sectionRef} id="works" className="bg-dark ">

      {/* Header */}
      <div className={`max-w-6xl mx-auto flex flex-col gap-12 items-center ${styles.padding}`}>
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
      <div  className="relative">

        <div className="sticky top-0 my-20 overflow-hidden flex items-center">

          <motion.div
            style={{ x }}
            className="flex gap-16 px-20 will-change-transform"
          >
            {worksData.map((work, index) => (
              <div
              key={work.id}
              className="group relative
              w-[400px]  h-[400px]
              md:w-[500px] md:h-[500px]
              lg:w-[600px] lg:h-[450px]
              rounded-2xl overflow-hidden"
              >
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width:768px) 90vw, 500px"
                  className="object-cover"
                />

             
               <div className="absolute bottom-3 right-3 bg-gradient-to-t from-dark/95 via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] flex flex-col justify-end p-6 z-10">
                     <div className="flex items-center justify-end gap-4">
                       {/* Title Glassmorphism Div */}
                       <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                         <h3 className="text-white text-xl md:text-2xl font-semibold text-right whitespace-nowrap">
                           {work.title}
                         </h3>
                       </div>
                       
                       {/* Behance Link Glassmorphism Div */}
                       <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
                         <a
                           href={work.behanceUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 text-right text-base md:text-lg whitespace-nowrap"
                         >
                           <span>مشاهدة في </span>
                           <Image
                             src={behance}
                             alt="Behance"
                             width={24}
                             height={24}
                             className="object-contain"
                           />
                         </a>
                       </div>
                     </div>
                   </div>
              
                </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div className={`max-w-6xl mx-auto  flex flex-col gap-12 items-center ${styles.padding}`}>
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
