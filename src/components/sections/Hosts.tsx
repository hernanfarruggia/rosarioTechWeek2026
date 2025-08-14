import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { GraduationCap, Theater, Briefcase, Building2Icon, CheckIcon, PlusSquareIcon, MicIcon } from 'lucide-react';

type HostsProps = {
  btnAction: (interest: string) => void;
}

export default function Hosts({ btnAction }: HostsProps) {
  const venueTypes = [
    { icon: Building2Icon, name: "Oficinas" },
    { icon: GraduationCap, name: "Universidades" },
    { icon: Theater, name: "Espacios culturales" },
    { icon: Briefcase, name: "Coworkings" },
  ];

  return (
    <section id="hosts" className="py-20 bg-white dot-matrix-black">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-16">
        <FadeUp className='flex flex-col gap-8'>
          <h2 className="text-6xl md:text-8xl text-black">
            Anfitriones, Espacios y Speakers
          </h2>
          <p className="text-gray-600 text-xl font-medium">
            Oficinas, universidades, espacios culturales, coworkings: todos pueden ser 
            parte de la Rosario TechWeek como sede anfitriona.<br />
            Cada espacio suma su singularidad y comunidad a esta gran experiencia colectiva.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <FadeUp delay={0.4}>
            <h4 className="text-2xl font-bold text-black mb-6">
              ¿Querés alojar un taller, una charla, ser líder de una experiencia o hostear un panel?
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Cada espacio anfitrión se convierte en un nodo de la red de innovación rosarina.<br />
              Tu venue puede ser parte de esta semana histórica para el ecosistema tech de la ciudad.<br />
              Y vos podés ser uno de nuestros speakers, compartiendo tu conocimiento y experiencia con la comunidad.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckIcon className='w-6 h-6 mr-2 text-primary' />
                <span className="text-gray-600">Visibilidad en toda la comunicación del evento</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className='w-6 h-6 mr-2 text-primary' />
                <span className="text-gray-600">Conexión directa con la comunidad tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className='w-6 h-6 mr-2 text-primary' />
                <span className="text-gray-600">Soporte organizativo para tu actividad</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid">
              {venueTypes.map((venue, index) => {
                const IconComponent = venue.icon;
                return (
                  <div key={index} className="flex flex-col items-center p-4 hover:bg-black hover:scale-105 group transition-all duration-300">
                    <div className="flex items-center gap-4 text-gray-700 md:text-gray-300 group-hover:text-white">
                      <IconComponent size={32} />
                      <h5 className="text-3xl md:text-5xl">
                        {venue.name}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.8} className="bg-black/5 p-8 text-center flex gap-4 justify-center items-center">
          <Button
            variant='outline'
            size="lg"
            className='w-full md:w-auto hover:cursor-pointer'
            onClick={() => btnAction('venue')}
          >
            <PlusSquareIcon className='w-6 h-6 mr-2' />
            Sumá tu espacio o evento a la TechWeek
          </Button>
          <Button
            variant='outline'
            size="lg"
            className='w-full md:w-auto hover:cursor-pointer'
            onClick={() => btnAction('speaker')}
          >
            <MicIcon className='w-6 h-6 mr-2' />
            Quiero ser speaker
          </Button>
        </FadeUp>

      </div>
    </section>
  );
}