import Image from "next/image";
import styles from "../style";
import Title from "./Title";
import Paragraph from "./Paragraph";

const logos = [
  "/partners/Asset 1.png",
  "/partners/Asset 2.png",
  "/partners/Asset 3.png",
  "/partners/Asset 4.png",
  "/partners/Asset 5.png",
  "/partners/Asset 6.png",
  "/partners/Asset 7.png",
  "/partners/Asset 8.png",
  "/partners/Asset 9.png",
  "/partners/Asset 10.png",
  "/partners/Asset 11.png",
  "/partners/Asset 12.png",
  "/partners/Asset 13.png",
  "/partners/Asset 14.png",
  "/partners/Asset 15.png",
  "/partners/Asset 16.png",
  "/partners/Asset 17.png",
  "/partners/Asset 18.png",
  "/partners/Asset 19.png",
  "/partners/Asset 20.png",
];

const Partners = () => {
  return (
    <section className={`min-h-screen bg-dark text-white ${styles.padding}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-24">
          <Title title={<> شركــاء النجـــاح </>} />

        
          <div className="max-w-xl">
            <Paragraph>
              نؤمن بأن الإبداع هو شراكة حقيقية تحوّل الأفكار إلى حلول مبتكرة.
              نساعد شركاءنا على تحويل رؤاهم إلى تجارب ناجحة تُحدث تأثيرًا
              حقيقيًا في السوق.
            </Paragraph>
          </div>

        
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative aspect-[2/1] flex items-center justify-center
              border border-gray-600/30
              hover:border-gray-400/50 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={index >= 12 ? 90 : 120}
                height={index >= 12 ? 90 : 120}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
