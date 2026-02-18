import Image from 'next/image'
import ctaBg from "../../../public/ctaBg.png";
import styles from '../style';
import Paragraph from './Paragraph';
import BigTitle from './BigTitle';
import Link from 'next/link';
import Title from './Title';

const Cta = () => {
  return (
    <section
      id="stats"
      className={`relative w-full min-h-[100vh]
    
      bg-dark overflow-hidden flex flex-col justify-center items-center`}
    >
      {/* Background Image */}
      <Image
        src={ctaBg}
        alt="Background gradient"
        fill
        className="object-cover z-0 min-h-[100vh]"
        priority
      />

      <div className='relative z-10 w-full flex flex-col justify-center items-center gap-12'>
    
       
     <div>
      <Title className="text-[35px] lg:text-[40px] text-center text-white">
        لنكتشــف معا قـــوة حضــــورك
       </Title>

       <Title className="text-[35px] lg:text-[40px] text-center text-white">
        تواصل معنا اليوم وابدأ رحلتك نحو التأثير والتميز
       </Title>

     </div>
       
      
      <div className="inline-block max-w-[250px] px-10 py-2 rounded-full bg-pink">
      <Link href='/contact' className="text-white text-base sm:text-lg">
       أكيد حــاب تكلمـــنا
      </Link>
      </div>

     
      </div>

      

    </section>
  )
}

export default Cta