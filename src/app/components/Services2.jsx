'use client';

import Image from "next/image";
import gridBg from "../../../public/gridBg.png";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import styles from "../style";

const servicesData = [
   {
    title: "البراندينـــق / الهوية البصرية",
    serviceAr: [
      "تموضع العلامة التجارية",
      "ابتكار اسم العلامة",
      "استراتيجية الاتصال",
      "استراتيجية المحتوى",
      "استراتيجية منصات التواصل",
      "الهوية البصرية",
      "تصميم الأيقونات",
      "الرسومات التوضيحية",
      "دليل الهوية",
      "تصميم المواد التعريفية",
      "التغليف و الطباعة",
      "التصميم ثلاثي الأبعاد"
    ],
    serviceEn: [
      "Brand positioning",
      "Brand Naming",
      "Communication strategy",
      "Content Strategy",
      "Social media strategy",
      "Visual identity",
      "Iconography",
      "Illustrations",
      "Brand Guidelines kit",
      "Collateral Design",
      "Packaging & Printing",
      "3D design"
    ],
    bg: "bg-mauve"
  },
   {
    title: "التطويـــر / التــقنية",
    serviceAr: [
     "تطوير الواجهة الأمامية",
     "تطوير الواجهة الخلفية",
     "تصميم المواقع الإلكترونية",
     "إدارة محتوى المواقع",
     "تصميم التطبيقات",
     "تطوير التطبيقات",
     "إدارة محتوى التطبيقات",
     "شهادات الحماية والتدقيق",
     "تقرير تدقيق الموقع الإلكتروني"
    ],
    serviceEn: [
      "Front-end development",
      "Back-end development",
      "Website Design",
      "Web Content Management",
      "App Design",
      "App Development",
      "App Content Management",
      "Protection & certificates",
      "Website Audit Report"
    ],
    bg: "bg-blue"
  },
  {
    title: "الاستراتيجيــة / التسويـــق",
    serviceAr: [
      "إدارة العلامة التجارية",
      "الإشـــراف الفني",
      "صناعة المحتوى",
      "الحملات الإعلانية",
      "خطة تسويقية",
      "خطة محتوى",
      "خطة منصات التواصل",
      "الموشن والجرافيكس المتحركة"

    ],
    serviceEn: [
     "Brand Management",
     "Art Direction",
     "Content creation",
     "Media Campaign",
     "Marketing plan",
     "Content plan",
     "Social media plan",
     "Motion/Animation"
    ],
    bg: "bg-pink"
  },
 

];

const Services2 = () => {
  // Dupliquer les données pour créer un effet de boucle fluide
  const duplicatedServices = [...servicesData, ...servicesData];

  return (
    <>
     <style jsx>{`
  @keyframes scrollVertical {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-50%);
    }
  }

  .scroll-container {
    animation: scrollVertical 30s linear infinite;
    animation-play-state: paused;
  }

  .scroll-wrapper:hover .scroll-container {
    animation-play-state: running;
  }
`}</style>

      
      <section className="relative w-full min-h-screen bg-dark overflow-hidden">
        {/* Background Image */}
        <Image
          src={gridBg}
          alt="Background grid"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Content */}
        <div className={`relative z-10 max-w-6xl mx-auto ${styles.padding}`}>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
            {/* Left Part - Title */}
            <div className="flex lg:hidden">
              <h1 className={`${styles.title} text-white text-right`}>
                حلـــول متكاملـــة 
                <br />
                برؤيــة إبـــداعية
              </h1>
            </div>
            
            {/* Right Part - Services Cards with Infinite Scroll */}
            <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <div className="scroll-wrapper relative h-[600px] lg:h-[1650px] overflow-hidden">
                {/* Gradient masks for smooth fade effect */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-dark to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark to-transparent z-20 pointer-events-none" />
                
                <div className="scroll-container flex flex-col gap-8">
                  {duplicatedServices.map((service, index) => (
                    <ServiceCard
                      key={`${index}-${service.title}`}
                      title={service.title}
                      serviceAr={service.serviceAr}
                      serviceEn={service.serviceEn}
                      bg={service.bg}
                    />
                  ))}
                </div>
              </div>
            </div>
          
            {/* Left Part - Title */}
            <div className="hidden lg:flex flex-1">
              <h1 className={`${styles.title} text-white text-right`}>
                حلـــول متكاملـــة 
                <br />
                برؤيــة إبـــداعية
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services2;
