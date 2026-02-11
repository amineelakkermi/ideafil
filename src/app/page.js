import Slides from './components/Slides';
import Stats from './components/Stats';
import Works1 from './components/Works1';
import Partners from './components/Partners';
import Cta from './components/Cta';
import Services1 from './components/Services1';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


export default function Home() {
  return (
  <div className="min-h-screen relative">
    
   <Navbar />
    {/* Background Video - Only on Home page */}
   <div className='w-full min-h-screen absolute left-0 right-0 top-0'>
    <video
    autoPlay
    loop
    muted
    playsInline
    className="w-[100%] h-[100%] object-cover"
    >
    <source src="/backgroundVideo.mp4" type="video/mp4" />
    </video>
   </div>

    <div className='absolute inset-0 w-full h-full opacity-50 bg-gradient-to-b from-black/40 via-black/60 to-black/80 backdrop-blur-sm'></div>
      
     
      {/* Content */}
      <div className="relative">
        <Hero />
        <Services1 />
        <Slides />
        <Works1 />
        <Stats />
        <Partners />
        <Cta />
      </div>
    </div>
  );
}
