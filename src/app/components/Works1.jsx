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
  { 
    id: 1, 
    name: "CONEX ™", 
    title: "CONEX ™",
    img: conex, 
    behanceUrl: "#",
  },
  { 
    id: 2, 
    name: "Meliha Shawarma™", 
    title: "Meliha Shawarma™",
    img: meliha, 
    behanceUrl: "#",
  },
  { 
    id: 3, 
    name: "Rahafah", 
    title: "Rahafah",
    img: rahafah, 
    behanceUrl: "#",
  },
  { 
    id: 4, 
    name: "Gsa Group", 
    title: "Gsa Group",
    img: gsa, 
    behanceUrl: "#",
  },
  { 
    id: 5, 
    name: "Vilack", 
    title: "Vilack",
    img: vilack, 
    behanceUrl: "#",
  },
];

const Works1 = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Main horizontal scroll
      const scrollTween = gsap.to(section, {
        x: () => -(section.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top+=100 top",
          end: () => `+=${section.scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // First card visible, others hidden
      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, { opacity: 1, scale: 1 });
        } else {
          gsap.set(card, { opacity: 0, scale: 0.8 });
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 100%",
              end: "right 100%",
              scrub: true,
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section dir="ltr" id="works" ref={triggerRef} className={`bg-dark overflow-hidden`}>
      {/* Header - outside the horizontal scroll */}
      <div className={`max-w-6xl mx-auto px-4 flex flex-col gap-12 items-center ${styles.padding}`}>
        <div className="w-full flex flex-row gap justify-between items-center md:items-start">
          <RoundedTitle title="نماذج من أعمالنا" />
          <span className="hidden sm:block text-white text-[16px] lg:text-[20px] leading-snug text-right">
            مهما كان التحدي <br />
            نفصل لك الحل لي يناسبك
          </span>
        </div>
        <Divider />
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={sectionRef}
        className="flex gap-6 md:gap-10 px-8 py-12 min-h-[70vh] items-start"
        style={{ width: "fit-content" }}
      >
        {worksData.map((work, index) => (
          <div
            key={work.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[50vh] md:h-[60vh] group relative overflow-hidden rounded-[16px] cursor-pointer"
          >
            {/* Image */}
            <Image
              src={work.img}
              alt={work.name}
              fill
              className="rounded-[16px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glassmorphism Overlay - Visible on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px] flex flex-col justify-end p-6 z-10">
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
      </div>

      {/* Footer - after horizontal scroll */}
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
