'use client'

import Image from 'next/image'
import styles from '../style'

import shape from '../../../public/shape.png'
import ideafil from '../../../public/ideafil.png'
import technology from '../../../public/technology.png'
import impact from '../../../public/impact.png'
import Title from './Title'

const cards = [
  {
    
    id: 1,
    title: "ideafil.co",
    subtitle: "أيدفل",
    description:
      "نشتغل على بناء  العلامات التجارية , نصنع الأفكار ,ونرسم الإستراتيجيات من البداية إلى أول منتج أو خدمة توصل للعميل نخلي التسويق يشتغل صح",
    highlight: "رأس الحربــــة للمجموعــــة",
    bg: "bg-[#6000C0]",
    logo: ideafil,
  },
  {
    id: 2,
    title: "ideafil.tech",
    subtitle: "أيدفل تك",
    description:
    "نربط الإبداع بالتقنية .. حلولا رقمية تدعم التحول الرقمي للعلامات التجارية و تطور تجربة العملاء",
    highlight: "حلول تقنية تفك الأزمات",
    bg: "bg-[#0093B5]",
    logo: technology,
  },
  
  {
    id: 3,
    title: "ideafil.impact",
    subtitle: "أيدفل إمباكت",
    description:
      "مبادرة نخلق من خلالها محتوى إبداعي وتعليمي يواكب السوق السعودي , ويفيد المجتمع و القطاع بأسلوب ممتع , ذكي وقريب من الناس",
    highlight: "الثقافة & المعرفة :) بطريقتنا",
    bg: "bg-[#FF0161]",
    logo: impact,
  },
]

const cardsSlides = Array.from({ length: 8 }, (_, index) => cards[index % cards.length]);

const IdeafilGroups = () => {
  return (
    <>
  <style jsx>{`
  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .track {
    display: flex;
    gap: 2.5rem;
    width: max-content;
    animation: scroll 200s linear infinite;
  }

  .track:hover {
    animation-play-state: paused;
  }

  .chunk {
    flex-shrink: 0;
  }

  @keyframes scroll {
    from{
    transform: translateX(0);
    }
    to{
    transform: translateX(-50%);
    }
  }
`}</style>

      
      <section id="groups" className='bg-dark'>
        <div className={`max-w-6xl mx-auto flex flex-col gap-16 ${styles.padding}`}>

          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 flex flex-col gap-6 text-right">
              <Title title={<> مجمــوعة {" "}
              <span className='text-pink'>أيدفيــــل</span>  
              </>}
              />
              <p className={styles.paragraph}>
                تحت اسمنا، ثلاث جهات تكمل بعض ولكل شركة دورها ومساحتها الخاصة.
              </p>
            </div>

            <div className="flex-1 hidden lg:flex justify-end">
              <Image
                src={shape}
                alt="shape"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Horizontal Scroll Container */}
         <div dir='ltr' className="marquee-wrapper">
         <div className="track">
         {[...cardsSlides, ...cardsSlides, ...cardsSlides, ...cardsSlides].map((card, index) => (
         <div
         key={index}
         className={`chunk relative ${card.bg} rounded-[10px] p-6 sm:p-8 md:p-10 lg:p-12
         w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[450px] 
         h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px]
         transition-all duration-500 hover:scale-[1.02]`}
         >
        {/* Logo */}
        <div className="absolute -top-6 sm:-top-8 md:-top-10 left-6 sm:left-8 md:left-10 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 rounded-full flex items-center justify-center">
          <Image
            src={card.logo}
            alt={card.title}
            width={40}
            height={40}
            className="sm:w-10 sm:h-10 md:w-14 md:h-14"
          />
        </div>

        {/* Content */}
        <div className="h-full flex flex-col justify-center text-right gap-2 sm:gap-3 text-white">
          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold">{card.title}</h3>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] opacity-80">{card.subtitle}</p>
          <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] opacity-90 leading-relaxed">
            {card.description}
          </p>
          <h4 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl font-semibold mt-2 sm:mt-3 md:mt-4">
            {card.highlight}
          </h4>
        </div>
      </div>
    ))}
  </div>
         </div>

        </div>
      </section>
    </>
  )
}

export default IdeafilGroups
