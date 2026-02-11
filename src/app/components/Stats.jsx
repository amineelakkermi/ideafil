import Image from "next/image";
import { Poppins } from "next/font/google";
import gradientBg from "../../../public/gradientBg.png";
import RoundedTitle from "./RoundedTitle";
import styles from "../style";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const Stats = () => {
  return (
    <section
      id="stats"
      className={`${styles.paddingX} relative w-full min-h-[110vh] bg-dark overflow-hidden`}
    >
      <div className="absolute inset-0 z-0 min-h-[110vh]">
        <Image
          src={gradientBg}
          alt="Background gradient"
          fill
          className="object-fit object-center"
          priority
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/35 to-black/55" />
       

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 min-h-[110vh] flex flex-col justify-center gap-16">
        
        {/* Title */}
        <div className="w-full flex justify-start">
          <RoundedTitle title="أرقامنا آخر سنة" />
        </div>

        {/* Body */}
        <div className="w-full  flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">

          {/* Right Text */}
          <div className="w-[100%] lg:w-[35%] text-right">
            <p className="text-white text-base md:text-[18px] leading-relaxed">
              كل رقم يعبر عن خطوة قطعناها ... من مشاريع أنجزناها، إلى دول
              خدمناها، وتجارب وصلتنا بمستخدمين حول العالم.
              أرقام نعتز بها وتلهمنا لنواصل التطوير
            </p>
          </div>

          {/* Stats Grid */}
          <div className="w-full lg:w-[65%] relative grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-16">

            {/* Stat 1 */}
            <div className="px-6 md:px-10 flex flex-col justify-center items-center">

              <h3 className={`${poppins.className} text-white font-extrabold leading-none
                text-[36px] sm:text-[56px] md:text-[72px]`}>
                50+
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-4">
                مشروع — بكفاءة
                <br />
                ونتائج ملموسة
              </p>
            </div>

            {/* Stat 2 */}
            <div className="px-6 md:px-10 text-right">
              <h3 className={`${poppins.className} text-white font-extrabold leading-none
                text-[36px] sm:text-[56px] md:text-[72px]`}>
                95%
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-4">
                من عملائنا كنّا معهم
                <br />
                قصص نجاح إبداعية
              </p>
            </div>

            {/* Stat 3 */}
            <div className="px-6 md:px-10 flex flex-col justify-center items-center">
              <h3 className={`${poppins.className} text-white font-extrabold leading-none
                text-[36px] sm:text-[56px] md:text-[72px]`}>
                10+
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-4">
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
