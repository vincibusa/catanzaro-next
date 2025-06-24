import Link from 'next/link';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const HeroSection = () => {
  const videoUrl="https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/videoBackopt.mp4?alt=media&token=0bc87a85-21b6-4ebd-9c7b-0d3bf3df99f8"

  return (
    <section id="hero" className="relative bg-gray-900 text-white h-screen flex items-center">
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <AnimateOnScroll animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trasformiamo le idee in risultati tangibili
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Sviluppiamo i tuoi progetti con creatività e innovazione per far crescere il tuo business.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={600} className="flex flex-col sm:flex-row gap-4">

            
            <Link 
              href="#contatti" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              Contattaci
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;