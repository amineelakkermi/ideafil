'use client';

import styles from "../style";
import Divider from "./Divider";
import RoundedTitle from "./RoundedTitle";
import Link from "next/link";

import conex from "../../../public/works/conex.png";
import meliha from "../../../public/works/meliha.png";
import rahafah from "../../../public/works/rahafah.png";
import gsa from "../../../public/works/gsa.png";
import vilack from "../../../public/works/vilack.png";
import kyar from "../../../public/works/kyar.png";
import plmyra from "../../../public/works/plmyra.png";
import shuwayer from "../../../public/works/shuwayer.png";
import takiat from "../../../public/works/takiat.png";
import waq3y from "../../../public/works/waq3y.png";
import waraqty from "../../../public/works/waraqty.png";
import wish from "../../../public/works/wish.png";

import behance from "../../../public/behance.png";
import Image from "next/image";

const worksData = [
  { 
    id: 1, 
    name: "CONEX ™", 
    title: "CONEX ™",
    img: conex, 
    behanceUrl: "#"
  },
  { 
    id: 2, 
    name: "Meliha Shawarma™", 
    title: "Meliha Shawarma™",
    img: meliha, 
    behanceUrl: "#"
  },
  { 
    id: 3, 
    name: "Rahafah", 
    title: "Rahafah",
    img: rahafah, 
    behanceUrl: "#"
  },
  { 
    id: 4, 
    name: "Gsa Group", 
    title: "Gsa Group",
    img: gsa, 
    behanceUrl: "#"
  },
  { 
    id: 5, 
    name: "Vilack", 
    title: "Vilack",
    img: vilack, 
    behanceUrl: "#"
  },
  { 
    id: 6, 
    name: "Kyar", 
    title: "Kyar",
    img: kyar, 
    behanceUrl: "#"
  },
  { 
    id: 7, 
    name: "Plmyra", 
    title: "Plmyra",
    img: plmyra, 
    behanceUrl: "#"
  },
  { 
    id: 8, 
    name: "Shuwayer", 
    title: "Shuwayer",
    img: shuwayer, 
    behanceUrl: "#"
  },
  { 
    id: 9, 
    name: "Takiat", 
    title: "Takiat",
    img: takiat, 
    behanceUrl: "#"
  },
  { 
    id: 10, 
    name: "Waq3y", 
    title: "Waq3y",
    img: waq3y, 
    behanceUrl: "#"
  },
  { 
    id: 11, 
    name: "Waraqty", 
    title: "Waraqty",
    img: waraqty, 
    behanceUrl: "#"
  },
  { 
    id: 12, 
    name: "Wish", 
    title: "Wish",
    img: wish, 
    behanceUrl: "#"
  },
];

const AllWorks = () => {
  // Split works data into left and right columns
  const leftColumnWorks = worksData.filter((_, index) => index % 2 === 0);
  const rightColumnWorks = worksData.filter((_, index) => index % 2 === 1);

  return (
    <>
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-up {
          animation: scrollUp 60s linear infinite;
        }
        
        .scroll-down {
          animation: scrollDown 60s linear infinite;
        }
        
        .scroll-horizontal {
          animation: scrollHorizontal 100s linear infinite;
        }
        
        .scroll-up:hover,
        .scroll-down:hover,
        .scroll-horizontal:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .mobile-scroll-container {
            display: flex;
            flex-direction: row;
            overflow-x: hidden;
          }
          
          .mobile-scroll {
            display: flex;
            gap: 1rem;
            min-width: max-content;
          }
          
          .mobile-card {
            min-width: 280px;
            height: 200px;
          }
          
          .desktop-only {
            display: none;
          }
        }
        
        @media (min-width: 641px) {
          .mobile-scroll-container {
            display: none;
          }
        }
      `}</style>
      
      <section id="works" className={`bg-dark ${styles.padding}`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12 items-center">
          

          {/* Main 2-column container */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 w-full desktop-only">
            
            {/* Left container with infinite scroll */}
            <div className="relative h-[250px] sm:h-[600px] md:h-[700px] overflow-hidden">
              <div className="scroll-up flex flex-col gap-6 md:gap-8">
                {/* Duplicate works for seamless loop */}
                {[...leftColumnWorks, ...leftColumnWorks].map((work, index) => (
                  <WorkCard key={`${work.id}-left-${index}`} work={work} />
                ))}
              </div>
            </div>

            {/* Right container with infinite scroll */}
            <div className="relative h-[250px] sm:h-[600px] md:h-[700px] overflow-hidden">
              <div className="scroll-down flex flex-col gap-6 md:gap-8">
                {/* Duplicate works for seamless loop */}
                {[...rightColumnWorks, ...rightColumnWorks].map((work, index) => (
                  <WorkCard key={`${work.id}-right-${index}`} work={work} />
                ))}
              </div>
            </div>

          </div>

          {/* Mobile horizontal scroll container */}
          <div className="mobile-scroll-container relative h-[300px] overflow-hidden bg-dark">
            <div className="scroll-horizontal mobile-scroll">
              {/* Duplicate works for seamless loop */}
              {[...worksData, ...worksData].map((work, index) => (
                <MobileWorkCard key={`${work.id}-mobile-${index}`} work={work} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Extracted WorkCard component for reusability
const WorkCard = ({ work }) => (
  <div className="h-[350px] md:h-[400px] group relative overflow-hidden rounded-[8px] cursor-pointer">
    {/* Image */}
    <Image 
      src={work.img} 
      alt={work.name} 
      className="w-full h-full rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-105" 
    />
    
    {/* Glassmorphism Overlay - Visible on Hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] flex flex-col justify-end p-6 z-10">
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
);

// Mobile WorkCard component for horizontal scroll
const MobileWorkCard = ({ work }) => (
  <div className="mobile-card group relative overflow-hidden rounded-[8px] cursor-pointer">
    {/* Image */}
    <Image 
      src={work.img} 
      alt={work.name} 
      className="w-full h-full rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-105" 
    />
    
    {/* Glassmorphism Overlay - Visible on Hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[8px] flex flex-col justify-end p-4 z-10">
      <div className="flex items-center justify-end gap-2">
        {/* Title Glassmorphism Div */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
          <h3 className="text-white text-sm font-semibold text-right whitespace-nowrap">
            {work.title}
          </h3>
        </div>
        
        {/* Behance Link Glassmorphism Div */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
          <a
            href={work.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors duration-200 text-right text-xs whitespace-nowrap"
          >
            <Image
              src={behance}
              alt="Behance"
              width={16}
              height={16}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AllWorks;
