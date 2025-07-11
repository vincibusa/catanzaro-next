import Link from 'next/link';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const services = [
    'Branding',
    'Event',
    'Marketing',
    'Web e Multimedia',
    'Social Media',
    'Content Creation',
  ];
  
  // Array di social media
  const socialMedia = [
    { name: 'facebook', url: 'https://facebook.com/' },
    { name: 'instagram', url: 'https://instagram.com/' },
    { name: 'linkedin', url: 'https://linkedin.com/' },
    { name: 'twitter', url: 'https://twitter.com/' }
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
    </div><section id="contatti" className="py-20 bg-white relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-red-50 opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-red-50 opacity-30"></div>
        <div className="absolute top-1/4 left-0 w-16 h-32 bg-red-50/50 rounded-r-full blur-sm"></div>
        <div className="absolute bottom-1/3 right-0 w-16 h-32 bg-red-50/50 rounded-l-full blur-sm"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Contattaci
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Informazioni di contatto */}
            <AnimateOnScroll delay={400} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-8 relative">Informazioni di Contatto</h3>

                <div className="space-y-8 relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Indirizzo sede legale</h4>
                      <p className="text-gray-600 mt-2 leading-relaxed">Via Litterio 54,<br />90011 Bagheria (PA), Italia</p>
                    </div>

                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>

                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Indirizzo sede operativo</h4>
                      <p className="text-gray-600 mt-2 leading-relaxed">Via Massimo D'Azelio. 50 (ex Papa Giovanni XIII,26),<br />90011 Bagheria (PA), Italia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Telefono</h4>
                      <p className="text-gray-600 mt-2">+39 327 1677871</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 mt-2">amministrazione@catanzaroepartners.it</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Modulo di contatto */}
            <AnimateOnScroll delay={600} className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un messaggio</h3>

                <ContactForm services={services} />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Mappa */}
          <AnimateOnScroll delay={800}>
            <div className="mt-20">
              <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.032025408837!2d13.490707075808764!3d38.0823894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e61dddfb3f87%3A0x33f010dd4ecd8a92!2sVia%20Litterio%2C%2054%2C%2090011%20Bagheria%20PA!5e0!3m2!1sit!2sit!4v1715279644068!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mappa sede Catanzaro & Partners"
                ></iframe>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section></>
  );
};

export default ContactSection;
