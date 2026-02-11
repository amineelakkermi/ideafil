import Image from 'next/image'
import styles from '../style';

const Hero = () => {
  return (
    <section
    id="stats"
    className={`${styles.paddingX} relative min-h-screen flex items-center justify-center`}  
    >
     
     <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

      {/* Titre */}
      <h1  className={`text-[55px] lg:text-[85px] font-bold text-white`}>
        نملـــــا أفكـــــارك
        <br />
       بالإبــــداع     
      </h1>

      {/* Paragraphe */}
      <p className={`font-normal mt-5 text-[18px] leading-[30.8px] text-gray-300 text-right`}>
      اكتشف حلولنا المبتكرة والفعالة المصممة لتعزيز جاذبية علامتك , ورفع مستوى تفاعل جمهورك إلى آفاق جديدة
      </p>

      
      </div>
     

    </section>
  )
}

export default Hero