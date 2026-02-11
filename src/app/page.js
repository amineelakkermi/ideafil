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
  <div className="relative">
    
 
    {/* Background Video - Only on Home page */}
   <div className='w-full min-h-[100vh]'>
    <Navbar />
    <div className='absolute top-0 left-0 right-0 -z-10'>
     <video
    autoPlay
    loop
    muted
    playsInline
    className="w-[100%] min-h-[120vh] object-cover"
    >
    <source src="/backgroundVideo.mp4" type="video/mp4" />
    </video>
    </div>
     <div className="snap-item">
     <Hero />
     </div>

   </div>
    <div className='absolute inset-0 w-full h-full opacity-50 bg-gradient-to-b from-black/40 via-black/60 to-black/80 backdrop-blur-sm'></div>
      
     
      {/* Content */}
      <div className="relative">
       
        <div className="snap-item">
          <Services1 />
        </div>
        <div className="snap-item">
          <Slides />
        </div>
        <div className="snap-item">
          <Works1 />
        </div>
        <div className="snap-item">
          <Stats />
        </div>
        <div className="snap-item">
          <Partners />
        </div>
        <div className="snap-item">
          <Cta />
        </div>
      </div>
    </div>
  );
}
