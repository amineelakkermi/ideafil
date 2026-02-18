import Image from 'next/image'
import styles from '../style';
import BigTitle from './BigTitle';
import Paragraph from './Paragraph';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section
    id="stats"
    className={`${styles.paddingX} relative min-h-screen flex items-center justify-center`}  
    >
     
     <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

     
      <BigTitle title={<>
        نملأ أفكـــــارك
        <br />
        بالإبــــداع
        </>} 
      />

      {/* Paragraphe */}
      <Paragraph className="mt-5 text-gray-300">
      اكتشف حلولنا المبتكرة والفعالة المصممة لتعزيز جاذبية علامتك ورفع مستوى تفاعل جمهورك إلى آفاق جديدة
      </Paragraph>

      
      </div>
     

    </section>
  )
}

export default Hero