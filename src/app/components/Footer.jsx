'use client';

import Image from "next/image";
import logo1 from "../../../public/logo1.png";
import linkedin from "../../../public/linkedin.png";
import instagram from "../../../public/instagram.png";
import x from "../../../public/x.png";
import behance from "../../../public/behance.png";
import email from "../../../public/email.png";
import phone from "../../../public/phone.png";
import maps from "../../../public/maps.png";
import Ideafil from "./Ideafil";

const Footer = () => {
  // Répéter le texte pour créer un effet de boucle fluide sans espace
  const scrollingText = 'IDEAFIL';
  const textItems = Array.from({ length: 20 }, () => scrollingText);

  return (
    <>
      <style jsx>{`
        .scroll-track {
          position: absolute;
          left: 0;
          display: inline-flex;
          width: 200%;
          white-space: nowrap;
          will-change: transform;
        }

        .scroll-track {
          animation: scroll-horizontal 30s linear infinite;
        }

        .scroll-track:hover {
          animation-play-state: paused;
        }

        .scroll-chunk {
          display: inline-flex;
          align-items: center;
          padding-inline: 2rem;
        }

        @keyframes scroll-horizontal {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      
      <footer className="relative bg-dark text-white overflow-hidden">
        {/* Gradient background */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src={logo1}
                alt="Ideafil Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            
            {/* Social icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-80 transition">
                <Image
                  src={behance}
                  alt="Behance"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Image
                  src={x}
                  alt="X"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Image
                  src={instagram}
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </div>

            
          </div>

          {/* Divider */}
          <hr className="my-12 border-white/20" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-white/60">
            {/* Copyright */}
            <div className="text-right text-gray-400 text-[16px]">
              © 2026 ideafil. جميع الحقوق محفوظة
            </div>
           
            {/* Contact */}
            <div className="flex flex-col md:flex-row gap-6">
              <span className="flex text-gray-400 text-[16px] items-center gap-2">
                <Image
                  src={maps}
                  alt="Location"
                  width={20}
                  height={20}
                  className="object-contain"
                />
               الخبر ــ  المملكة العربية السعودية
              </span>

              <span className="flex text-gray-400 text-[16px] items-center gap-2">
                <Image
                  src={email}
                  alt="Email"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                info@ideafil.co
              </span>
              <span dir="ltr" className="flex text-gray-400 text-[16px] items-center gap-2">
                +966 50 774 7972
                <Image
                  src={phone}
                  alt="Phone"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </span>
          
            </div>

           
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
