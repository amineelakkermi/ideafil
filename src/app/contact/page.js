import React from 'react'
import Navbar2 from '../components/Navbar2'

const page = () => {
  return (
    <div className="min-h-screen bg-[#1a0046]">
      <Navbar2 />

      <section className="px-6 py-0 min-h-[calc(100vh-90px)] flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap flex-row justify-between items-center">


            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
              <form dir="rtl" className="flex items-end">
                <div className="w-[70%] flex flex-col gap-5 items-start">
                  <div>
                    <label className="block text-white/80 text-sm">الاسم</label>
                    <input
                      type="text"
                      className="w-full max-w-[420px] bg-transparent text-white placeholder-white/30 border-b border-white/25  focus:outline-none focus:border-white/50 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm">الإيميل</label>
                    <input
                      type="email"
                      className="w-full max-w-[420px] bg-transparent text-white placeholder-white/30 border-b border-white/25  focus:outline-none focus:border-white/50 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="w-full max-w-[420px] bg-transparent text-white placeholder-white/30 border-b border-white/25  focus:outline-none focus:border-white/50 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm">وصف موجز للمشروع</label>
                    <textarea
                      rows={3}
                      className="w-full max-w-[420px] bg-transparent text-white placeholder-white/30 border-b border-white/25  focus:outline-none focus:border-white/50 transition-colors resize-none"
                      placeholder=""
                    />
                  </div>
                </div>

                <div dir="ltr" className="w-[30%] flex items-center justify-start">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white/50 transition-colors"
                  >
                    إرسال
                  </button>
                </div>
              </form>
            </div>

            <div dir="rtl" className="flex-1 text-white text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
               خلنا نكتشف سوااا كيف مشروعك يقدر يترك أثـــر ..
               ويشد الإنتباه
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page