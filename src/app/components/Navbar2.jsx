'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const navLinks = [
  { name: 'الرئيسيــة', href: '/' },
  { name: 'من نحـــن', href: '/about' },
  { name: 'الأعمـــال الأخيرة', href: '/works' },
]

export default function Navbar2() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileListRef = useRef(null);

  // Gérer le scroll pour changer le fond
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };
    // Écouter les clics sur les liens
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      link.addEventListener('click', handleRouteChange);
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleRouteChange);
      });
    };
  }, []);

  // Gérer l'animation du menu mobile
  useEffect(() => {
    if (!mobileMenuRef.current || !mobileListRef.current) return;

    if (open) {
      setIsAnimating(true);
      // Réinitialiser les styles pour l'animation d'entrée
      const menu = mobileMenuRef.current;
      const list = mobileListRef.current;
      
      menu.classList.remove('animate-menu-close');
      menu.classList.add('animate-menu-open');
      
      // Animation des items avec délai
      const items = list.querySelectorAll('li');
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.remove('opacity-0', 'translate-y-5');
        item.classList.add('animate-item-in');
      });
    } else {
      // Animation de fermeture
      const menu = mobileMenuRef.current;
      const list = mobileListRef.current;
      
      menu.classList.remove('animate-menu-open');
      menu.classList.add('animate-menu-close');
      
      const items = list.querySelectorAll('li');
      items.forEach((item) => {
        item.classList.remove('animate-item-in');
        item.classList.add('opacity-0', 'translate-y-5');
      });
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [open]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <style jsx>{`
        @keyframes menuOpen {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes menuClose {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-100%);
          }
        }
        
        @keyframes itemIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-menu-open {
          animation: menuOpen 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-menu-close {
          animation: menuClose 0.3s ease-in forwards;
        }
        
        .animate-item-in {
          animation: itemIn 0.3s ease-out forwards;
        }
      `}</style>
      
      <nav
        dir="rtl"
        className={`w-full  sticky top-0 left-0 right-0 relative z-[9999] transition-all duration-300
          bg-dark `}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[90px] flex items-center justify-between">

            {/* Logo Right */}
            <div className="flex items-center min-w-[150px]">
              <Image
                src="/logo1.png"
                alt="Ideafil Logo Arabic"
                width={200}
                height={80}
                className={`${open ? "opacity-0 scale-95" : "opacity-100 scale-100"} transition-all duration-300`}
                priority
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-16  font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition-all duration-300 hover:opacity-80 hover:scale-105 ${
                    scrolled ? 'text-white' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo Left + Mobile Button Container */}
            <div className="flex items-center justify-start min-w-[150px] gap-4">
              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:flex items-center justify-center px-[15px] py-[2px] gap-[10px] w-[130px] h-[45px] bg-[rgba(140,69,255,0.4)] border border-[rgba(255,255,255,0.15)] shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] rounded-[8px] text-white hover:bg-[rgba(140,69,255,0.6)] transition-all duration-300"
              >
                <span className="text-base font-medium">تواصل معنا</span>
              </Link>
              
              {/* Mobile Button */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 z-[1000]"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {(open || isAnimating) && (
          <div
            ref={mobileMenuRef}
            className={`fixed inset-0 z-[999] flex items-start justify-start bg-dark/95 backdrop-blur-lg ${
              !open && isAnimating ? 'animate-menu-close' : ''
            }`}
            onClick={(e) => {
              if (e.target === mobileMenuRef.current) {
                setOpen(false);
              }
            }}
          >
            <nav 
              aria-label="Main navigation" 
              className="w-full px-8 md:px-16 pt-32"
              onClick={(e) => e.stopPropagation()}
            >
              <ul ref={mobileListRef} className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.name} 
                    className="flex items-start gap-4 group opacity-0 translate-y-5"
                  >
                    <span className="text-sm md:text-base font-light text-white/60 mt-2 min-w-[2rem]">
                      0{index + 1}
                    </span>
                    <Link
                      href={link.href}
                      className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white hover:text-white/70 transition-all duration-300 leading-none tracking-tight"
                      onClick={() => setOpen(false)}
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
