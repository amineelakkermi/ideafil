import Image from "next/image";
import gradientBg from "../../../public/gradientBg.png";
import RoundedTitle from "./RoundedTitle";
import styles from "../style";

const Stats = () => {
  return (
    <section
      id="stats"
      className={`${styles.paddingX} relative w-full min-h-screen
    
      bg-dark overflow-hidden`}
    >
      {/* Background Image */}
      <Image
        src={gradientBg}
        alt="Background gradient"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 min-h-screen flex flex-col justify-center gap-16">
        
        {/* Title */}
        <div className="w-full flex justify-start">
          <RoundedTitle title="أرقامنا آخر سنة" />
        </div>

        {/* Body */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">

          {/* Right Text */}
          <div className="max-w-[360px] text-right">
            <p className="text-white text-base md:text-[18px] leading-relaxed">
              كل رقم يعبر عن خطوة قطعناها ... من مشاريع أنجزناها، إلى دول
              خدمناها، وتجارب وصلتنا بمستخدمين حول العالم.
              أرقام نعتز بها وتلهمنا لنواصل التطوير
            </p>
          </div>

          {/* Stats Grid */}
          <div className="relative grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-16 max-w-[400px]">

            {/* Stat 1 */}
            <div className="text-right md:border-l md:border-r border-white/40 px-4 md:px-8 py-2">

              <h3 className="text-white font-varela font-bold leading-none
                text-[36px] sm:text-[56px] md:text-[72px]">
                50+
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-4 md:mt-6">
                مشروع — بكفاءة
                <br />
                ونتائج ملموسة
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-right pr-2 md:pr-4 py-2">
              <h3 className="text-white font-varela font-bold leading-none
                text-[36px] sm:text-[56px] md:text-[72px]">
                95%
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-4 md:mt-6">
                من عملائنا كنّا معهم
                <br />
                قصص نجاح إبداعية
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-right md:border-l md:border-r border-white/40 px-4 md:px-8 py-2">
              <h3 className="text-white font-varela font-bold leading-none
                text-[36px] sm:text-[56px] md:text-[72px]">
                10+
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-4 md:mt-6">
                قطاعات — من
                <br />
                الصناعة للترفيه
              </p>
            </div>

            {/* Empty cell */}
            <div />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
