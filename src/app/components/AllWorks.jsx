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
    behanceUrl: "#",
    colSpan: "col-span-6 md:col-span-12"
  },
  { 
    id: 2, 
    name: "Meliha Shawarma™", 
    title: "Meliha Shawarma™",
    img: meliha, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-6"
  },
  { 
    id: 3, 
    name: "Rahafah", 
    title: "Rahafah",
    img: rahafah, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-6"
  },
  { 
    id: 4, 
    name: "Gsa Group", 
    title: "Gsa Group",
    img: gsa, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-7"
  },
  { 
    id: 5, 
    name: "Vilack", 
    title: "Vilack",
    img: vilack, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-5"
  },
  { 
    id: 6, 
    name: "Kyar", 
    title: "Kyar",
    img: kyar, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-6"
  },
  { 
    id: 7, 
    name: "Plmyra", 
    title: "Plmyra",
    img: plmyra, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-6"
  },
  { 
    id: 8, 
    name: "Shuwayer", 
    title: "Shuwayer",
    img: shuwayer, 
    behanceUrl: "#",
    colSpan: "col-span-6 md:col-span-12"
  },
  { 
    id: 9, 
    name: "Takiat", 
    title: "Takiat",
    img: takiat, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-6"
  },
  { 
    id: 10, 
    name: "Waq3y", 
    title: "Waq3y",
    img: waq3y, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-6"
  },
  { 
    id: 11, 
    name: "Waraqty", 
    title: "Waraqty",
    img: waraqty, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-7"
  },
  { 
    id: 12, 
    name: "Wish", 
    title: "Wish",
    img: wish, 
    behanceUrl: "#",
    colSpan: "col-span-3 md:col-span-5"
  },
];

const AllWorks = () => {
  return (
    <section id="works" className={`bg-dark ${styles.padding}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12 items-center">

    

        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8">
          {worksData.map((work, index) => (
            <div
              key={work.id}
              className={`${work.colSpan} ${index === 0 || index === 7 ? 'max-h-[500px]' : 'max-h-[400px]'} group relative overflow-hidden rounded-[8px] cursor-pointer`}
            >
              {/* Image */}
              <Image 
                src={work.img} 
                alt={work.name} 
                className={`w-full h-full rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-105`} 
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
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default AllWorks;
