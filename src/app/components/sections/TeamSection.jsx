import TeamContactButton from '../buttons/TeamContactButton';
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
      role: 'Ufficio Stampa',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Salvo.jpeg?alt=media&token=103aae00-0217-4edc-85b9-d8b480b81a3f'
    },
    {
      id: 4,
      name: 'Desiree Chiarenza',
      role: 'Segreteria Organizzativa',
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
    </div><section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-50 opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-red-50 opacity-40"></div>
        <div className="absolute top-1/3 right-0 w-20 h-20 rounded-full bg-red-100 opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll delay={200}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
              Un team di <strong className="font-bold text-red-700">professionisti giovani e dinamici</strong> pronti per <strong className="font-bold text-red-700">coordinare e gestire</strong> tutti gli aspetti organizzativi dei tuoi eventi o sviluppare dei <strong className="font-bold text-red-700">piani di marketing strategico</strong>.
            </h3>
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
                  showTooltip={false} />
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section></>
  );
};

export default TeamSection;