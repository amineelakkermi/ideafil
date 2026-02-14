'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { name: 'الرئيسيــة', href: '/' },
  { name: 'من نحـــن', href: '/about' },
  { name: 'الأعمـــال الأخيرة', href: '/works' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileListRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

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

    const items = mobileListRef.current.querySelectorAll('li');
    
    if (open) {
      setIsAnimating(true);
      // Animation des items avec délai
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100);
      });
    } else {
      // Animation de fermeture
      items.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
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

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (href.startsWith('/#')) {
      const hash = href.replace('/#', '#');
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    router.push(href);
  };

  const linkClasses = (href) => {
    const isActive = pathname === href.split('#')[0];
    return `relative transition-all duration-300 hover:opacity-80 ${
      scrolled ? 'text-white' : 'text-white'
    } ${isActive ? (scrolled ? 'opacity-100' : 'opacity-100') : 'opacity-90'} group`;
  };

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

        @keyframes glowIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-glow-in {
          animation: glowIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <nav
        dir="rtl"
        className={`sticky top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled ? 'bg-dark' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[80px] lg:h-[90px] flex items-center justify-between relative">

            {/* Mobile Menu Button (always left) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 z-[1000]"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <svg
                className={`w-7 h-7 text-white transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
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

            {/* Logo Right */}
            <Link href='/' className="flex items-center min-w-[150px]">
              <Image
                src="/logo1.png"
                alt="Ideafil Logo Arabic"
                width={200}
                height={80}
                className={`${open ? "opacity-0 scale-95" : "opacity-100 scale-100"} w-[150px] lg:w-[200px] transition-all duration-300`}
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-16 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={linkClasses(link.href)}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-purple-300">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Logo Left + Mobile Button Container */}
            <div className="flex items-center justify-start min-w-[150px] gap-4">
              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:flex items-center justify-center px-[15px] py-[2px] gap-[10px] w-[150px] h-[55px] bg-[rgba(140,69,255,0.4)] border border-[rgba(255,255,255,0.15)] shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] rounded-[8px] text-white hover:bg-[rgba(140,69,255,0.6)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="text-base font-medium relative z-10">تواصل معنا</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {(open || isAnimating) && (
          <div
            ref={mobileMenuRef}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
               bg-gradient-to-br from-[#110023] via-[#2a0055] to-[#110023] ${
              !open && isAnimating ? 'animate-menu-close' : ''
            }`}
            onClick={(e) => {
              if (e.target === mobileMenuRef.current) {
                setOpen(false);
              }
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full" />
            </div>

            <nav 
              aria-label="Main navigation" 
              className="w-full px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-8 left-8 text-white hover:text-purple-200 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                aria-label="Fermer le menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute top-8 right-8">
                <Image
                  src="/logo1.png"
                  alt="Ideafil Logo Arabic"
                  width={120}
                  height={50}
                  className="object-contain filter brightness-0 invert"
                />
              </div>

              <ul ref={mobileListRef} className="flex flex-col items-center gap-6 z-10 mt-8">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.name} 
                    className="flex items-start gap-4 group opacity-0 translate-y-5 transition-all duration-300"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: open ? `${index * 100}ms` : '0ms',
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-white text-[20px] font-medium px-8 py-4 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transform transition-all duration-300 hover:scale-105 w-48 text-center backdrop-blur-sm"
                    >
                      <span className="relative z-10 transition-all duration-300 group-hover:text-purple-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transform transition-all duration-300 hover:scale-105 w-48 text-center backdrop-blur-sm text-white text-[20px] font-medium"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-purple-300">تواصل معنا</span>
                </Link>
              </div>
            
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
