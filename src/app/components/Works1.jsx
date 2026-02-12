'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "../style";
import Divider from "./Divider";
import RoundedTitle from "./RoundedTitle";
import Link from "next/link";

import conex from "../../../public/works/conex.png";
import meliha from "../../../public/works/meliha.png";
import rahafah from "../../../public/works/rahafah.png";
import gsa from "../../../public/works/gsa.png";
import vilack from "../../../public/works/vilack.png";
import behance from "../../../public/behance.png";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const worksData = [
  { id: 1, title: "CONEX ™", img: conex, behanceUrl: "#" },
  { id: 2, title: "Meliha Shawarma™", img: meliha, behanceUrl: "#" },
  { id: 3, title: "Rahafah", img: rahafah, behanceUrl: "#" },
  { id: 4, title: "Gsa Group", img: gsa, behanceUrl: "#" },
  { id: 5, title: "Vilack", img: vilack, behanceUrl: "#" },
];

const Works1 = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {

    const getMaxWidth = () =>
      containerRef.current.scrollWidth - window.innerWidth;

    gsap.to(containerRef.current, {
      x: () => -getMaxWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => "+=" + getMaxWidth(),
        scrub: 0.8,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

  });

  return () => ctx.revert();
}, []);




  return (
    <section
      dir="ltr"
      id="works"
      className="bg-dark"
    >
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

      {/* Horizontal Scroll Container */}
     <div ref={triggerRef} className="relative h-screen overflow-hidden">
     <div
        ref={containerRef}
         className="flex items-center gap-16 h-full px-20"
        style={{ width: "fit-content" }}
      >
        {worksData.map((work, index) => (
          <div
            key={work.id}
            className="work-panel relative w-[70vw] h-[75vh] flex-shrink-0 overflow-hidden rounded-2xl"
          >
            {/* Image Fullscreen */}
            <Image
              src={work.img}
              alt={work.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-end p-16">
              <div className="overlay-content backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-4">
                <h3 className="text-white text-3xl font-semibold whitespace-nowrap">
                  {work.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
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
  );
};

export default Works1;
