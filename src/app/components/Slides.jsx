'use client';

import React from 'react';

const Slides = () => {
  const arabicText = 'نملأ أفكارك بالإبداع';
  const englishText = 'Fill your ideas';
  const arabicItems = Array.from({ length: 12 }, () => arabicText);
  const englishItems = Array.from({ length: 12 }, () => englishText);

  return (
    <div className="min-h-[400px] relative bg-dark w-full overflow-hidden select-none flex flex-col">

      {/* Marquee Arabic */}
      <div className="track" aria-hidden>
        {[...arabicItems, ...arabicItems , ...arabicItems].map((item, index) => (
          <span key={`ar-${index}`} className="chunk">
            <span className="label text-[#524a62]">{item}</span>
          </span>
        ))}
      </div>

      {/* Marquee English */}
      <div className="track" aria-hidden style={{ top: '85%' }}>
        {[...englishItems, ...englishItems, ...englishItems].map((item, index) => (
          <span key={`en-${index}`} className="chunk">
            <span className="label text-[#524a62] italic">{item}</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .track {
          position: absolute;
          left: 0;
          display: inline-flex;
          width: 200%;
          transform: translateY(-50%);
          white-space: nowrap;
          will-change: transform;
        }

        /* Arabic moves right → left */
        .track:nth-of-type(1) {
          top: 50%;
          animation: scroll-ar 50s linear infinite reverse;
        }

        /* English moves left → right */
        .track:nth-of-type(2) {
          animation: scroll-en 50s linear infinite reverse;
        }

        .chunk {
          display: inline-flex;
          align-items: center;
          padding-inline: 3rem;
        }

        .label {
          font-weight: 600;
          font-size: 5rem;
          line-height: 1.5;
          letter-spacing: 0.02em;
         
        }

        .fade-edges {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        @keyframes scroll-ar {
          from { transform: translate(0, -50%); }
          to   { transform: translate(-50%, -50%); }
        }

        @keyframes scroll-en {
          from { transform: translate(-50%, -50%); }
          to   { transform: translate(0, -50%); }
        }
      `}</style>
    </div>
  );
};

export default Slides;
