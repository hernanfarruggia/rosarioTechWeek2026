import FadeUp from '@/components/ui/FadeUp';
import Button from '@/components/ui/Button';
import { Wheat, Dna, Rocket, Sparkles, HeartPlusIcon, ShoppingBagIcon, FactoryIcon, GraduationCapIcon, BitcoinIcon, CalendarCheckIcon } from 'lucide-react';

export default function Agenda() {
  const tracks = [
    {
      icon: Sparkles,
      title: "IA",
      description: "Ética, creatividad y automatización de procesos con Inteligencia Artificial."
    },
    {
      icon: Dna,
      title: "Biotech",
      description: "Ciencia, salud y soluciones biológicas que impactan vidas."
    },
    {
      icon: Wheat,
      title: "AgriFoodTech",
      description: "Tecnologías para transformar la agricultura y alimentación del futuro."
    },
    {
      icon: BitcoinIcon,
      title: "Fintech",
      description: "Innovación financiera inclusiva para un nuevo paradigma."
    },
    {
      icon: HeartPlusIcon,
      title: "Healthtech",
      description: "Telemedicina, wearables para monitoreo, IA para diagnóstico médico y más."
    },
    {
      icon: ShoppingBagIcon,
      title: "eCommerce",
      description: "Tiendas online, marketplaces, logística tech, personalización con IA."
    },
    {
      icon: FactoryIcon,
      title: "Industria 4.0",
      description: "IoT industrial, automatización, mantenimiento predictivo, robótica."
    },
    {
      icon: GraduationCapIcon,
      title: "EdTech",
      description: "Plataformas de e-learning, gestión escolar, tutorías en línea."
    },
    {
      icon: Rocket,
      title: "Early Stage",
      description: "Herramientas y redes para quienes están empezando."
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-primary">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-16">
        <FadeUp className='flex flex-col gap-8'>
          <h2 className="text-6xl md:text-8xl text-white">
            Agenda y Tracks
          </h2>
          <p className="text-white text-xl font-medium">
            La Rosario TechWeek se vive en distintas sedes de la ciudad con una agenda dinámica y 
            colaborativa. Explorá los principales ejes de innovación, participá de actividades 
            abiertas y conocé a quienes están haciendo tecnología que transforma.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <FadeUp key={index} delay={1 + index * 0.1}>
                  <div className="flex flex-col items-center p-6 hover:bg-white hover:scale-105 group transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 group-hover:text-black">
                      <IconComponent size={32} />
                      <h5 className="text-4xl md:text-5xl">
                        {track.title}
                      </h5>
                    </div>
                    <p className='text-center group-hover:text-black'>
                      {track.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.4} className="bg-black/20 p-8 text-center">
          <Button variant='outline-tertiary' size="lg" href="https://luma.com/rosario-techweek-2025" target="_blank" className='w-full md:w-auto'>
            <CalendarCheckIcon className='w-6 h-6 mr-2' />
            Ver calendario!
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}