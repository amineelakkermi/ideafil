'use client';

import React from 'react';

const Ideafil = () => {
  const englishText = 'IDEAFIL';
  const englishItems = Array.from({ length: 3 }, () => englishText);

  return (
    <div className="min-h-[200px] relative mt-10 w-full overflow-hidden select-none flex flex-col items-center justify-center">
      {/* Marquee English - contour blanc, fond transparent */}
      <div className="track" aria-hidden>
        {[...englishItems, ...englishItems, ...englishItems].map((item, index) => (
          <span key={`en-${index}`} className="chunk">
            <span className="label">{item}</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .track {
          position: absolute;
          left: 0;
          top: 50%;
          display: inline-flex;
          align-items: center;
          width: 200%;
          transform: translateY(-50%);
          white-space: nowrap;
          will-change: transform;
          animation: scroll-en 50s linear infinite reverse;
        }

        .chunk {
          display: inline-flex;
          align-items: center;
          padding-inline: 1.5rem;
        }

        .label {
          font-style: normal;
          font-size: 200px;
          color: transparent;
          -webkit-text-stroke: 6px #FFFFFF;
        }

        @keyframes scroll-en {
          from { transform: translate(-50%, -50%); }
          to   { transform: translate(0, -50%); }
        }
      `}</style>
    </div>
  );
};

export default Ideafil;
