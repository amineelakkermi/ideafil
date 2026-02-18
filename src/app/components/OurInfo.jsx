"use client"
import React from 'react'
import styles from '../style'
import Paragraph from './Paragraph'

const infos = [
  {
    title: 'من نـحـــن',
    content:
      'نحن ملتزمون بإضافة قيمة حقيقية والابتكار المستمر وتطوير ما نقدّمه باستمرار ويقود هذا كله فريق متنوع من المفكرين المبدعين والاستراتيجيين وقادة الفكر في المجال مدعومًا بروابطنا العميقة بالثقافة ما يتيح لنا بشكل فريد ردم الفجوة بين الفكرة وتأثيرها الحقيقي',
  },
  {
    title: 'رؤيتنا',
    content:
      'نسعى لأن نكون الشريك الإبداعي الأول للعلامات التجارية الطموحة من خلال حلول مبتكرة تربط بين الأفكار الجريئة والنتائج القابلة للقياس',
  },
  {
    title: 'رسالتنا',
    content:
      'تمكين العلامات التجارية من بناء حضور مؤثر ومستدام عبر استراتيجيات مدروسة وتجارب رقمية وإنسانية متكاملة',
  },
]


const OurInfo = () => {
  const [openIndex, setOpenIndex] = React.useState(null)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={`${styles.padding} min-h-[90vh]  bg-dark`}>
    
      <div className='max-w-6xl mx-auto px-6 flex flex-col'>
        {/* Info */}
        {infos.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col border-t border-white/30 ${
              index === infos.length - 1 ? 'border-b' : ''
            }`}
          >
            <button
              type='button'
              onClick={() => toggleItem(index)}
              className='w-full flex items-center justify-between py-10 gap-4 text-left'
            >
              <h2 className='text-[35px] lg:text-[40px] font-bold text-white'>
                {item.title}
              </h2>
              <span className='text-5xl lg:text-[55px] text-white'>
                <div
                  className={`transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  {/* Plus icon that rotates to become an X */}
                  <svg
                    width='70'
                    height='70'
                    viewBox='0 0 70 70'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M55.4168 37.911H37.9168V55.411H32.0835V37.911H14.5835V32.0776H32.0835V14.5776H37.9168V32.0776H55.4168V37.911Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}
            >
              <Paragraph className="max-w-[750px]">{item.content}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurInfo