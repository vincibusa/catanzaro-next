import TeamContactButton from '../buttons/TeamContactButton';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import TitleCard from '../cards/TitleCard';



const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Adalberto Catanzaro',
      role: 'CEO e Direttore Creativo',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/adalberto.jpeg?alt=media&token=d5ba9097-4070-40d6-b10a-9c8e5df4f60e'
    },
    {
      id: 2,
      name: 'Jessica Fici',
      role: 'Senior Partner e Lawyer',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/jessica.jpeg?alt=media&token=ef45d3bf-dc90-4330-8df3-cb985380d91b'
    },
    {
      id: 3,
      name: 'Salvo Scaduto',
      role: 'Partnering Relationship e Ufficio Stampa',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Salvo.jpeg?alt=media&token=103aae00-0217-4edc-85b9-d8b480b81a3f'
    },
    {
      id: 4,
      name: 'Desiree Chiarenza',
      role: 'Assistant Event',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/desire.jpeg?alt=media&token=7895f081-0808-4252-9bf9-e355e5754517'
    },
    {
      id: 5,
      name: 'Vincenzo Busalacchi',
      role: 'Full Stack Developer',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/vincenzo.jpeg?alt=media&token=dba12809-b5cb-4197-acb8-e4a1b581d0ae'
    },
    {
      id: 6,
      name: 'Aurora Corso',
      role: 'Account senior e Social Media manager',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/aurora.jpg?alt=media&token=a77f8a1e-7619-4a58-8240-67eb5fe2eff3'
    },

    {
      id: 7,
      name: 'Rosellina Mantini',
      role: 'Consulent and Event Director',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/rosellinaMatintini.jpeg?alt=media&token=e4dfcaae-7d82-495a-8dc5-1a4b898f1bc8'
    },
    {
      id: 8,
      name: 'Tiziana Raspanti',
      role: 'Consulent and Food Director',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/TizianaRaspanti.jpeg?alt=media&token=72611b88-41f5-42de-87d5-e92944c9ad1e'
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-red-50 opacity-40"></div>
      <div className="absolute top-1/3 right-0 w-20 h-20 rounded-full bg-red-100 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Un Team Giovane e Intraprendente
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll 
              key={member.id} 
              delay={index * 100}
            >
              <TitleCard
                imageSrc={member.image}
                altText={member.name}
                captionText={member.name}
                description={member.role}
                containerHeight="300px"
                containerWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={400}>
          <div className="text-center mt-20 relative">
            {/* Elemento decorativo */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-red-100 rounded-full opacity-50"></div>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Sei interessato a unirti al nostro team di esperti appassionati? 
              Siamo sempre alla ricerca di talenti che condividono la nostra visione.
            </p>
            <TeamContactButton />
            <p className="text-gray-500 text-sm mt-4">Invia la tua candidatura</p>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default TeamSection;