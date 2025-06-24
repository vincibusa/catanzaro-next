import Link from 'next/link';
import ContactButton from '../buttons/ContactButton';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const ServicesSection = () => {
  const services = [
    {
      title: 'Eventi  Corporate',
      description: "Specializzati nell'organizzazione di eventi corporate, gestiamo meeting interni, team building e lanci di prodotto, enfatizzando la comunicazione interna ed esterna e l'immagine aziendale.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <path d="M52 52H12V38h40z" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <circle cx="32" cy="24" r="6" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M42 38c0-5.5-4.5-10-10-10s-10 4.5-10 10" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <circle cx="16" cy="28" r="4" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M22 38c0-3.3-2.7-6-6-6s-6 2.7-6 6" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <circle cx="48" cy="28" r="4" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M54 38c0-3.3-2.7-6-6-6s-6 2.7-6 6" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      )
    },
    {
      title: 'Eventi Pubblici',
      description: "Organizziamo eventi pubblici come concerti, mostre e festival, gestendo ogni dettaglio dalla logistica alla promozione e sicurezza, per garantire un'esperienza memorabile al vasto pubblico.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <path d="M52 46H12v-8h40z" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M12 38V22l40-8v24" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M20 28h4v4h-4z" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M30 26h4v4h-4z" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M40 24h4v4h-4z" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      )
    },
    {
      title: 'Fiere',
      description: "Progettiamo e realizziamo stand e spazi espositivi per fiere, coordinando tutti gli aspetti organizzativi e promozionali per garantire visibilità massima e interazioni efficaci.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <path d="M54 54H10V22h44z" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M10 22L32 10l22 12" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M22 54v-14h20v14" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M22 32h20" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      )
    },

    {
      title: 'Mostre',
      description: "Progettiamo e allestiamo mostre per musei ed enti privati, curando ogni dettaglio dall'esposizione alla promozione. Creiamo spazi che valorizzano le opere e offrono un'esperienza culturale coinvolgente.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <path d="M14 14h36v36H14z" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <circle cx="26" cy="30" r="4" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M30 40c0-4.4-3.6-8-8-8s-8 3.6-8 8" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <circle cx="42" cy="28" r="2" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M44 35c0-2.2-1.8-4-4-4s-4 1.8-4 4" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      )
    },

    {
      title: 'Sviluppo siti web e applicazioni',
      description: "Realizziamo siti web moderni e applicazioni performanti, ottimizzati per i motori di ricerca e progettati per offrire un'esperienza utente impeccabile. Trasformiamo le tue idee in soluzioni digitali di successo.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <rect x="10" y="14" width="44" height="30" rx="2" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <line x1="10" y1="38" x2="54" y2="38" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <line x1="28" y1="44" x2="36" y2="44" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <line x1="32" y1="44" x2="32" y2="50" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M24 24l-4 6 4 6" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M40 24l4 6-4 6" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      )
    },

    {
      title: 'Strategy Marketing',
      description: "Creiamo strategie di marketing per coinvolgere il pubblico e rafforzare il legame con il marchio. Garantiamo massima visibilità e connessioni memorabili con il target.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <path d="M46 42H18c-4.4 0-8-3.6-8-8s3.6-8 8-8h28c4.4 0 8 3.6 8 8s-3.6 8-8 8z" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M18 34l-8-6 8-6" fill="none" stroke="#D82A2A" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M54 18c0-4.4-3.6-8-8-8H28c-4.4 0-8 3.6-8 8" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M24 18h16" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M50 42v8" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M40 42v12" fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      )
    }
  ];

  return (
    <><div className="relative ">
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
      </div><section id="servizi" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimateOnScroll delay={200} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cosa Facciamo
            </h2>
            <div className="w-24 h-1.5 bg-red-700 mx-auto mt-4 rounded-full"></div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="h-full"
              >
                <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-8 text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:border-red-200/50 hover:-translate-y-2">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section></>
  );
};

export default ServicesSection;