'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
import behance from "../../../public/behance.png"
import HorizontalPortfolio from "./HorizontalPortfolio"

gsap.registerPlugin(ScrollTrigger)

const worksData = [
  { id: 1, title: "CONEX ™", img: conex, behanceUrl: "https://www.behance.net/gallery/232705721/CONEX-" },
  { id: 2, title: "Meliha Shawarma™", img: meliha, behanceUrl: "https://www.behance.net/gallery/222551581/-Meliha" },
  { id: 3, title: "Rahafah", img: rahafah, behanceUrl: "https://www.behance.net/gallery/220220707/Rahafah-" },
  { id: 4, title: "Gsa Group", img: gsa, behanceUrl: "https://www.behance.net/gallery/199473005/GSA-group-" },
  { id: 5, title: "Vilack", img: vilack, behanceUrl: "https://www.behance.net/gallery/220572147/Vilack" },
]

const Works1 = () => {

 
  return (
    <section 
      id="works" 
      className="bg-dark relative"
    >

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


      <HorizontalPortfolio />
       
      {/* Footer */}
      <div className={`max-w-6xl mx-auto px-4 flex flex-col gap-12 items-center ${styles.padding}`}>
        <Divider />
        <Link
          href="/works"
          className="inline-block px-7 py-3 rounded-full border-2 border-gray-400 hover:border-white/60 transition"
        >
          <p className="text-gray-400 text-base sm:text-lg hover:text-white transition">
            مشاهدة المزيـــد
          </p>
        </Link>
      </div>

    </section>
  )
}

export default Works1
