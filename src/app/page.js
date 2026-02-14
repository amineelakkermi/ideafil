import Slides from './components/Slides';
import Stats from './components/Stats';
import Works1 from './components/Works1';
import Partners from './components/Partners';
import Cta from './components/Cta';
import Services1 from './components/Services1';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Image from 'next/image';
import IdeafilGroups from './components/IdeafilGroups';
import HorizontalPortfolio from './components/HorizontalPortfolio';

export default function Home() {
  return (
    <div className="relative">
      {/* Background Video - Only on Home page */}
      <div className='w-full min-h-[100vh] relative'>
        <Navbar />
        <div className='absolute top-0 left-0 right-0'>
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
        <Hero />
      </div>
      
      {/* Content */}
      <div className="relative">
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
