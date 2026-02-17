import { Poppins } from "next/font/google";
import styles from "../style";
import Title from "./Title";
import Paragraph from "./Paragraph";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const statsData = [
  {
    number: "50+",
    label: "مشروع — بكفاءة ونتائج ملموسة",
  },
  {
    number: "95%",
    label: "نسبة رضا العملاء — قصص نجاح إبداعية",
  },
  {
    number: "10+",
    label: "قطاعات مختلفة — من الصناعة إلى الترفيه",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className={`min-h-[80vh] bg-dark text-white ${styles.padding}`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-24">
          
          <Title title={<> أرقامـــنا اخر سنة </>} />

          <div className="max-w-xl">
            <Paragraph>
              كل رقم يعبر عن خطوة قطعناها ونبني عليه نجاح السنة القادمة
              نواصل التطوير بثقة ونحوّل النتائج إلى قصص نجاح مستمرة
           
            </Paragraph>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="p-10 rounded-2xl
              backdrop-blur-xl
              bg-white/5
              border border-white/10
              shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
              hover:bg-white/10
              hover:-translate-y-2
              transition-all duration-300
              text-center"
            >
              <h3
                className={`${poppins.className}
                text-white font-extrabold leading-none
                text-[40px] sm:text-[56px]`}
              >
                {stat.number}
              </h3>

              <p className="text-white/70 text-sm mt-6 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
