import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { CheckIcon, DownloadCloudIcon } from 'lucide-react';

type SponsorsProps = {
  btnAction: (interest: string) => void;
}

export default function Sponsors({ btnAction }: SponsorsProps) {
  const benefits = [
    "Alta visibilidad en web, redes y medios",
    "Participación en eventos clave y activaciones",
    "Acceso a startups y comunidad emprendedora",
    "Reconocimiento como impulsor de la innovación",
    "Networking con líderes y decisores"
  ];

  return (
    <section id="sponsors" className="py-20 bg-secondary dot-matrix">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-16">
        <FadeUp className='flex flex-col gap-8'>
          <h2 className="text-6xl md:text-8xl text-white">
            Sponsors
          </h2>
          <h3 className="text-2xl sm:text-3xl text-black">
            Impulsá el ecosistema. Tu marca, presente en el futuro.
          </h3>
          <p className="text-white text-xl font-medium">
            Ser parte de la Rosario TechWeek como sponsor es más que una acción de marca: es una 
            inversión en el desarrollo regional, la tecnología con propósito y el talento emergente.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <FadeUp delay={0.2}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-accent-gray">Logos de sponsors</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <h4 className="text-2xl font-bold text-white mb-6">
              Beneficios para sponsors:
            </h4>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckIcon className='w-6 h-6 mr-2 text-white' />
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.6} className="bg-white/20 p-8 text-center flex gap-4 justify-center items-center">
          <Button
            variant='outline-tertiary'
            size="lg"
            className="hover:cursor-pointer"
            onClick={() => btnAction('sponsor')}
          >
            <DownloadCloudIcon className='w-6 h-6 mr-2' />
            Quiero ser sponsor!
          </Button>
          <Button variant='outline-tertiary' size="lg" href="#" target="_blank">
            <DownloadCloudIcon className='w-6 h-6 mr-2' />
            Descargar kit de patrocinio
          </Button>
        </FadeUp>

      </div>
    </section>
  );
}