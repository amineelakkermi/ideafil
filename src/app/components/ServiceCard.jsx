
const ServiceCard = ({ title, serviceAr = [], serviceEn = [], bg = "bg-mauve" }) => {
  return (
    <div
      className={`
        relative rounded-2xl p-6 text-white overflow-hidden max-w-md
        backdrop-blur-lg bg-white/20 border border-white/30
        ${bg}
      `}
    >

      <div className="relative z-10">
        {/* Title */}
        <h3 className="
  relative inline-block
  text-[20px] sm:text-[25px] md:text-[30px]
  text-right mb-16
  after:content-['']
  after:absolute after:right-0
  after:-bottom-3
  after:w-full after:h-[1px]
  after:bg-white
">
  {title}
</h3>

        {/* Content */}
        <div className="space-y-4 text-base">
          {serviceAr.map((item, i) => (
            <div key={i} className="flex justify-between items-start gap-4">
              
              {/* Arabic Service - Right */}
              <span className="text-right flex-1">
                <span className="mr-2">{item}</span>
              </span>
                 {/* English Service - Left */}
              <span className="text-left flex-1">
                {serviceEn[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;


