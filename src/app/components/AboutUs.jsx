import Image from "next/image"
import styles from "../style"
import ctaBg from '../../../public/ctaBg.png'

const AboutUs = () => {
    return (
      <section className={`${styles.padding}  bg-dark`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap">
        <div className="w-full flex  flex-col md:flex-row gap-5 items-center">
        <h1 className={`text-[35px] lg:text-[40px] font-bold text-white`}>نملــأ قصصـــك  بالإبـــداع</h1>
        <p className={`${styles.paragraph}`}>نحن نبني على منهجيتنا المتقنة لنصمّم مشروعًا مخصصًا وتعاونيًا بدرجة عالية لكل واحد من شركائنا</p>
        <p className={`${styles.paragraph}`}>ونلتزم بالابتكار المستمر وإضافة قيمة حقيقية وتوسيع نطاق ما نستطيع تقديمه دائمًا</p>
        </div>

        <div className="w-full flex justify-center items-center">
          <Image src={ctaBg} alt="About Us"
          height={500}

           className="object-cover rounded-[15px] w-full" />
        </div>
      </div>
      </section>
    )
  }
  
  export default AboutUs
  