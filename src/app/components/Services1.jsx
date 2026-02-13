import React from 'react'
import styles from '../style'
import RoundedTitle from './RoundedTitle'
import Divider from './Divider'

const services = [
  {
    title: 'الإستراتيجيــة\nو التسويــق',
    color: 'bg-pink',
  },
  {
    title: 'التقنيــة\nو التطويــر',
    color: 'bg-blue',
  },
  {
    title: 'المحتـــوى\nو الإنتــاج',
    color: 'bg-white',
  },
  {
    title: 'البراندينق \n و الهوية البصرية ',
    color: 'bg-mauve',
  },
]

const Services1 = () => {
  return (
    <section
  id="services"
  className={`${styles.padding} bg-dark flex flex-col items-center gap`}
>
  {/* Badge */}
  <div className="w-full max-w-6xl mx-auto px-4">
   <RoundedTitle title="وش نقدر نقدمـــ لك ؟؟" />
  </div>

  {/* Divider */}
  <Divider />

  {/* Services */}
  <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-10">
    {services.map((service, index) => (
      <div
        key={index}
        className={`
          flex flex-col gap-4 justify-center items-center
          lg:border-l-2 lg:border-gray-100
          lg:pl-12
          ${index === services.length - 1 ? 'lg:border-none lg:pl-0' : ''}
        `}
      >
        <p className="text-white text-lg sm:text-[30px] leading-snug whitespace-pre-line text-center">
          {service.title}
        </p>

        <div
          className={`w-9 h-9 flex justify-center items-center rounded-full ${service.color}`}
        >
          <span className="text-dark text-lg font-semibold">+</span>
        </div>
      </div>
    ))}
  </div>
</section>
 

  )
}

export default Services1;
