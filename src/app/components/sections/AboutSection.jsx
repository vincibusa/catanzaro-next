'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import Counter from '../counter';

const AboutSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  // Usa IntersectionObserver per rilevare quando le statistiche sono visibili
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCounting) {
          // Aggiungi un piccolo delay per un effetto più naturale
          setTimeout(() => {
            setStartCounting(true);
          }, 300);
        }
      },
      { threshold: 0.3 } // Il contatore parte quando il 30% della sezione è visibile
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startCounting]);

  const galleryImages = [
    { src: '/TaoBuk.jpeg', alt: 'TaoBuk' },
    { src: '/pianadeglialbanesi.jpeg', alt: 'Piana degli Albanesi' },
    { src: '/sfincione.jpeg', alt: 'Sfincione Fest' },
    { src: '/cannolo.jpeg', alt: 'Cannolo Fest' },
    { src: '/cachi.jpeg', alt: 'Cachi' },
    { src: '/sfincione2.jpeg', alt: 'Sfincione Fest' },
    { src: '/premio.jpeg', alt: 'Premio All Food Sicily' },
    { src: '/cannolo2.jpeg', alt: 'Sfincione Fest' },
  ];


  return (
    <>

      <section id="chi-siamo" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-red-100 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-red-100 opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Colonna sinistra - Titolo */}
          <div>


            <AnimateOnScroll animation="fade-down" delay={300}>
  
              <h2 className="text-3xl md:text-3xl font-bold text-red-700 mb-4">
                Il tuo partner ideale
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Costruiamo e progettiamo <strong className="font-bold text-red-700">eventi</strong> e <strong className="font-bold text-red-700">azioni di marketing</strong> che guardano all'<strong className="font-bold text-red-700">innovazione</strong>.
              </p>
            </AnimateOnScroll>
     
          <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
                {[
                  { value: 12, label: 'Anni di esperienza' },
                  { value: 300, label: 'Clienti soddisfatti' },
                  { value: 12, label: 'Team di esperti' }
                ].map((stat, i) => (
                  <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100 + 600}>
                    <div className="text-center flex flex-col items-center">
                      <div className="flex items-baseline justify-center mb-2 h-10">
                        <Counter
                          value={startCounting ? stat.value : 0}
                          fontSize={28}
                          textColor="#dc2626"
                          fontWeight="bold"
                          places={stat.value >= 100 ? [100, 10, 1] : [10, 1]}
                          gap={2}
                          padding={0}
                          gradientHeight={0}
                          gradientFrom="transparent"
                          gradientTo="transparent"
                          containerStyle={{ display: 'flex', alignItems: 'baseline' }} />
                      </div>
                      <p className="text-sm text-gray-500 leading-tight">{stat.label}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              </div>
          {/* Colonna destra - Testo e statistiche */}
          <div className="space-y-4">
            <AnimateOnScroll animation="fade-right" delay={300}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Da anni ci occupiamo di <strong className="font-bold text-red-700">produzione, allestimento e progettazione</strong> di <strong className="font-bold text-red-700">eventi enogastronomici e culturali</strong>, generando <strong className="font-bold text-red-700">valore aggiunto</strong> per i territori.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={450}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ideiamo <strong className="font-bold text-red-700">campagne di comunicazione</strong> per istituzioni e imprese, forniamo <strong className="font-bold text-red-700">consulenze per PMI</strong> e sosteniamo le imprese in progetti d'<strong className="font-bold text-red-700">internazionalizzazione</strong>.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={600}>
              <p className="text-lg text-gray-700 leading-relaxed">
                I nostri punti di forza sono la <strong className="font-bold text-red-700">comunicazione istituzionale e d'impresa</strong> attraverso lo sviluppo di un <strong className="font-bold text-red-700">planning integrato</strong> tra <strong className="font-bold text-red-700">web marketing</strong> e <strong className="font-bold text-red-700">event project</strong>.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={750}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pianifichiamo, progettiamo, sviluppiamo e gestiamo <strong className="font-bold text-red-700">siti web, applicazioni, portali ed e-commerce</strong> che colpiscono e attirano l'attenzione offrendo una fantastica <strong className="font-bold text-red-700">esperienza utente</strong>.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
        </div>

        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-red-700">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 11.072l-3.2-6.4a1 1 0 00-1.78-.22l-1.4 4.2-4.2-1.4a1 1 0 00-1.22.54l-3.2 6.4a1 1 0 001.22 1.22l4.2-1.4 1.4 4.2a1 1 0 001.78.22l3.2-6.4a1 1 0 00-.22-1.22z" />
                </svg>
            </span>
          </div>
        </div>

         <div className="container mx-auto px-4 relative z-10">
         <AnimateOnScroll animation="fade-up" delay={300}>
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
          Siamo un'<strong className="font-bold text-red-700">agenzia partner</strong> per realizzare <strong className="font-bold text-red-700">eventi a Palermo e in tutta Italia</strong>. <strong className="font-bold text-red-700">Produzione e pianificazione</strong> di <strong className="font-bold text-red-700">eventi corporate, digitali e ibridi</strong> per aziende, start up, enti pubblici e organizzazioni.
        </h3>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
        <div className='flex flex-col items-center justify-center gap-4 text-left h-full'>
          <AnimateOnScroll animation="fade-right" delay={400}>
            <h4 className="text-2xl font-bold text-gray-800">
              <span className="text-red-700">Catanzaro & Partners</span> è il partner ideale per i tuoi eventi in tutta Italia
            </h4>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-right" delay={550}>
            <h2 className='text-xl font-bold text-gray-800'>
              <strong className="text-black">Organizzazione e produzione a 360°</strong> per ogni tipologia di evento, da <strong className="text-red-700">eventi corporate aziendali</strong> a <strong className="text-red-700">manifestazioni pubbliche e private</strong>.
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <AnimateOnScroll animation="fade-left" delay={500}>
            <p>
              Dalla Sicilia, portiamo la nostra creatività in <strong className="font-bold text-red-700">tutta Italia</strong>. Siamo un'agenzia specializzata nella <strong className="font-bold text-red-700">produzione di eventi</strong> e <strong className="font-bold text-red-700">strategie di marketing</strong>, capaci di trasformare ogni idea in un'<strong className="font-bold text-red-700">esperienza memorabile</strong>.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={650}>
            <p>
              Progettiamo e realizziamo <strong className="font-bold text-red-700">eventi corporate, digitali e ibridi</strong> con un <strong className="font-bold text-red-700">approccio sartoriale</strong>, curando ogni dettaglio dal brief iniziale alla produzione finale. La nostra forza risiede in un <strong className="font-bold text-red-700">team di specialisti</strong> e in un solido <strong className="font-bold text-red-700">network di fornitori</strong> su tutto il territorio nazionale, che ci permette di garantire <strong className="font-bold text-red-700">risultati impeccabili</strong>.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={800}>
            <p>
              Affianchiamo i nostri clienti con una <strong className="font-bold text-red-700">consulenza di web marketing integrata</strong>, per assicurare non solo un'organizzazione perfetta, ma anche la <strong className="font-bold text-red-700">massima visibilità e successo</strong> per ogni iniziativa.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-24">


        <AnimateOnScroll animation="fade-up" delay={400} className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-red-200 rounded-lg z-0 opacity-50 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-red-200 rounded-lg z-0 opacity-50 hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {galleryImages.map((image, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={index * 100 + 500}
                className="relative h-64 overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{objectFit: "cover"}}
                  className="transform transition-transform duration-500 group-hover:scale-110"
                />

              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>


    </section></>
  );
};

export default AboutSection;