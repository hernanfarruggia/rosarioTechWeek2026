import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { BadgeCheckIcon, ChartNoAxesColumnIcon, CheckIcon, DownloadCloudIcon, MicIcon, RocketIcon } from 'lucide-react';

type PressProps = {
  btnAction: (interest: string) => void;
}

export default function Press({ btnAction }: PressProps) {
  const pressOfferings = [
    "Kit de prensa con logos, fotos y datos",
    "Acreditación para actividades especiales",
    "Acceso a speakers, startups y contenidos exclusivos"
  ];

  const benefits = [
    { icon: MicIcon, name: "Speakers", description: "Acceso a entrevistas con referentes tech" },
    { icon: RocketIcon, name: "Startups", description: "Casos de éxito y nuevos emprendimientos" },
    { icon: ChartNoAxesColumnIcon, name: "Datos", description: "Estadísticas del ecosistema tech rosarino" },
  ]

  return (
    <section id="press" className="py-20 bg-black dot-matrix">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-16">
        <FadeUp className='flex flex-col gap-8'>
          <h2 className="text-6xl md:text-8xl text-white">
            Prensa y Medios
          </h2>
          <h3 className="text-2xl sm:text-3xl text-primary">
            Historias que vale la pena contar
          </h3>
          <p className="text-white text-xl font-medium">
            Rosario TechWeek reúne voces, casos y tendencias que inspiran. Desde tecnologías 
            emergentes hasta experiencias humanas de innovación, el evento ofrece múltiples ángulos 
            para ser cubiertos por medios.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <FadeUp delay={0.2}>
            <h4 className="text-2xl text-white mb-6">
              Consigue beneficions especiales para medios:
            </h4>
            <div className="space-y-4">
              {pressOfferings.map((offering, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckIcon className='w-6 h-6 mr-2 text-primary' />
                  <p className="text-white text-lg">{offering}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            {/* Community image placeholder */}
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 h-72 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-300">Kit de prensa y contenidos</p>
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.4}>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center p-6 hover:bg-white hover:scale-105 group transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4 text-gray-300 md:text-gray-600 group-hover:text-black">
                    <IconComponent size={32} />
                    <h5 className="text-4xl md:text-5xl">
                      {benefit.name}
                    </h5>
                  </div>
                  <p className='text-center text-gray-300 md:text-gray-600 group-hover:text-black'>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.6} className="bg-white/10 p-8 text-center flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            variant='outline'
            size="lg"
            className='w-full md:w-auto hover:cursor-pointer'
            onClick={() => btnAction('press')}
          >
            <BadgeCheckIcon className='w-6 h-6 mr-2' />
            Solicitá tu acreditación
          </Button>
          <Button variant='outline-tertiary' size="lg" href="#" target="_blank" className='w-full md:w-auto'>
            <DownloadCloudIcon className='w-6 h-6 mr-2' />
            Descargar media kit
          </Button>
        </FadeUp>

      </div>
    </section>
  );
}