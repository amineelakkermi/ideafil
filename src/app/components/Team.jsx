import styles from "../style";
import Divider from "./Divider";
import RoundedTitle from "./RoundedTitle";
import Paragraph from "./Paragraph";


const teamMembers = [
  { name: "فهد الرويلــي", role: "مدير عام" },
  { name: "إبراهيم راغب", role: "المدير الإبداعي" },
  { name: "سعود فيصل", role: "المدير الفني / التقني" },

  { name: "محمـود قنــديل", role: "صانــع / كاتب محتـوى" },
  { name: "يوسف راغـب", role: "متخصص سوشيال ميديا" },
  { name: "عبدالرحمن محمد", role: "مصمم جرافيك / خبير" },
  { name: "مؤمن عيد", role: "مصمم جرافيك / خبير" },
  { name: "يوسف على", role: "مصمم جرافيك" },
  { name: "زياد عماد", role: "Motion / محرر فيديو" },
  { name: "سيف محمد", role: "محرر فيديو" },
  { name: "أحمد علي", role: "3D Designer" },
  { name: "هدير السيد", role: "أخصائي مبيعات" },
  { name: "أثير محمد", role: "HR Specialist" },

];

const Team = () => {
  return (
    <section className={`${styles.padding} w-full bg-dark`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12">

        {/* Intro */}
        <div className="w-full flex gap flex-col sm:flex-row justify-between items-start">
            {/* Title */}
        <RoundedTitle title="فريقنـــا" />
          <p className="text-white max-w-[420px]">
            قوتنا في فريقنا ... بعقول مبدعة وخطط مدروسة ورؤية واضحة،
            نكسر الحدود لنقدم أعمالًا ترتقي بمعاييرك
          </p>
        </div>

       <Divider  />
 

        {/* Team Grid */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            gap-y-10 gap-x-12
            mt-8
            mx-4
          "
        >
          {teamMembers.map((member, i) => (
            <div key={i} className="text-right">
              <h4 className="text-white text-[20px] md:text-[25px]">
                {member.name}
              </h4>
              <p className="text-gray-400 text-[17px] md:text-[20px] mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
