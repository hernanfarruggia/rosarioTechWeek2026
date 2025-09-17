import FadeUp from '@/components/ui/FadeUp';
import Image from 'next/image';

export default function Team() {

  const teamMembers = [
    {
      name: 'Luisina Gala Golosetti',
      role: 'CEO @ Golosetti Abogados',
      img: 'luisina.jpeg'
    },
    {
      name: 'Gaspar Rodriguez',
      role: `Co-Founder @ Fullfoto & Co-Founder @ Overboost`,
      img: 'gaspar.jpeg'
    },
    {
      name: 'Nicolas Davobe',
      role: 'Co-Founder @ We Are Ginkgo',
      img: 'nicolas.jpeg'
    },
    {
      name: 'Gabriela Giorgio',
      role: 'Growth & Marketing Consultant',
      img: 'gabriela.jpeg'
    },
    {
      name: 'Hernán Farruggia',
      role: 'Co-founder @ Kadre',
      img: 'hernan.jpeg'
    },
    {
      name: 'Bruno Ruyu',
      role: 'Co-founder & CEO @ Teramot',
      img: 'bruno.jpeg'
    },
    {
      name: 'Damian Silva',
      role: 'Innovation & R+D @ CREA',
      img: 'damian.jpeg'
    },
    {
      name: 'Sol Ariaca',
      role: 'Product & Innovation Strategist',
      img: 'sol.jpeg'
    },
    // {
    //   name: 'Martín Gori',
    //   role: 'Gerente Comercial @ Edilizia',
    //   img: 'martin.jpeg'
    // },
  ]

  return (
    <section id="team" className="py-20 bg-white dot-matrix-black">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-12">
        <FadeUp>
          <h2 className="text-6xl md:text-8xl text-black">
            Hay equipo!
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Organizar una <span className='font-semibold'>Tech Week</span> no es nada fácil, somos un equipo de personas autogestionadas 
              con la simple misión de poner a Rosario en el mapa de la innovación y la tecnología.
            </p>
            <p>
              Hay mucho talento para mostrar, muchas historias que contar, y gracias al 
              &nbsp;<a className='font-semibold underline' href="https://www.linkedin.com/company/rosario-innovation-hub" target="_blank">Hub de Innovación de Rosario</a> que nos une, encontramos un grupo de soñadores que se 
              animó a dar el primer paso y marcar el camino hacia lo que esperamos se convierta 
              en un ícono de la ciudad y el ecosistema.
            </p>
            <p>
              Es nuestro mayor deseo que puedan disfrutar de una semana llena de actividades y oportunidades de negocios!
            </p>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center mb-16">
          {
            teamMembers.map((member, index) => (
              <FadeUp key={index} delay={0.4}>
                <div className='flex flex-col gap-4 text-gray-700 items-center justify-center text-center'>
                  <div className="h-56 w-56 flex items-center justify-center relative rounded-full overflow-hidden">
                    <Image
                      src={`/team/${member.img}`}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className='object-cover'
                    />
                    <div className="absolute inset-0 bg-white/25 hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='text-lg font-semibold'>
                      {member.name}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {member.role}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))
          }
        </div>
      </div>
    </section>
  );
}