import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import Image from 'next/image';

const TestimonialsSection = () => {
  const sponsors = [
    { id: 1, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/1%20la%20piana%20d'oro.png?alt=media&token=f8d7dcd1-bad3-438e-bab7-4906a39d9dde" },
    { id: 2, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/3%20regione-sicilia-800x579.png?alt=media&token=ca21e193-e601-4b92-ba02-41bdd948d407" },
    { id: 3, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/4%20siciliaenogastronomica-02.png?alt=media&token=af64b755-7758-40f8-af04-47545be19fb6" },
    { id: 4, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/6%20camera%20di%20commercio-02.png?alt=media&token=7cdee289-07c8-40a4-9221-67453f070c5a" },
    { id: 5, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/DECO-02.png?alt=media&token=61a10b13-d473-4031-8c09-63a91516e74b"},
    { id: 6, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/MORETTI%20FORNI.png?alt=media&token=241c5092-c056-40cb-874d-9592790d27f4" },
    { id: 7, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/RIGGI.png?alt=media&token=2dbc8999-c2c9-4e8d-bc2b-4ed00ee3811b" },
    { id: 8, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/electrolux.png?alt=media&token=8a15e2f8-b8a8-4292-a341-2694ace64d63" },
    { id: 9, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/sagrim.png?alt=media&token=049d1ff4-8a52-46fd-8feb-06ac508dd4e6"},
    { id: 10, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/acqua%20panna-02.png?alt=media&token=11599bf0-7c4c-43eb-9939-b0028abe2d69" },
    { id: 11, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/all%20food-02.png?alt=media&token=7c85fa51-20c7-45d3-95c9-11f9263bba07" },
    { id: 12, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/barbera%20logo.png?alt=media&token=b21be495-55fa-42ec-95e9-389e704f4097" },
    { id: 13, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/bonsignore-02.png?alt=media&token=a1648675-e5f0-47b2-ab47-0a43cb303894" },
    { id: 14, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/fermento-02.png?alt=media&token=be2e1fe3-9c23-43ed-b7af-530ac2d673cd" },
    { id: 15, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/giornale%20di%20sicilia-02.png?alt=media&token=3ca91d2b-b664-4b85-92df-3fd4534e3b87" },
    { id: 16, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/granamaro-02.png?alt=media&token=b41759fe-5f33-4599-abf5-a1fe4243ee26" },
    { id: 17, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/la%20siciliana-02.png?alt=media&token=fd167486-2ee5-4b48-b117-a022a2845666" },
    { id: 18, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mariano%20durante-02.png?alt=media&token=76d4ed7f-d99d-4551-a570-f60506b3a35c" },
    { id: 19, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mediacom-02.png?alt=media&token=c18a7458-974f-4320-93c9-fcba272a3f48" },
    { id: 20, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/sprint-02.png?alt=media&token=d3afb69a-c165-4840-8e54-40c5dd20e945" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-red-50 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <AnimatedOnScroll animation="fade-in" delay={200} className="mb-3">
            <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full font-medium text-sm uppercase tracking-wider">
              Partner
            </span>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Istituzioni Pubbliche e Private<span className="text-red-600"> Che ci hanno Scelto</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6 rounded-full" />
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Collaboriamo con i migliori brand e istituzioni per creare esperienze di valore e promuovere l'eccellenza enogastronomica siciliana.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Griglia degli sponsor */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <AnimatedOnScroll 
              key={sponsor.id} 
              animation="fade-in-up" 
              delay={index * 50 + 200}
              className="group"
            >
              <div className=" overflow-hidden transform transition-all duration-300 hover:-translate-y-2  p-6 h-32 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image}
                    alt={`Partner ${sponsor.id}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;