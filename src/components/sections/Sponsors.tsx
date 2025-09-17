import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import Image from 'next/image';
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

  const mainSponsors = [
    {
      name: 'InnLab',
      img: 'innlab.png'
    },
    {
      name: 'Universe',
      img: 'universe.png'
    },
    {
      name: 'Renaiss',
      img: 'renaiss.png'
    },
    {
      name: 'Mepad',
      img: 'mepad.png'
    },
    {
      name: 'The Hybrid',
      img: 'the-hybrid.png'
    },
  ]

  const communitySponsors = [
    {
      name: 'FullFoto',
      img: 'fullfoto.png'
    },
    {
      name: 'Kadre',
      img: 'kadre.png'
    },
    {
      name: 'EkosLab',
      img: 'ekoslab.png'
    },
    {
      name: 'Teramot',
      img: 'teramot.png'
    },
    {
      name: 'Golosetti',
      img: 'golosetti.png'
    },
    {
      name: 'Materia Prima',
      img: 'materia-prima.png'
    },
  ]

  const mediaPartners = [
    {
      name: 'Comunidad Fan',
      img: 'comunidad-fan.png'
    },
    {
      name: 'Rosario Times',
      img: 'rosario-times.png'
    },
    {
      name: 'Barra Libre',
      img: 'barra-libre.png'
    },
  ]

  const aliados = [
    {
      name: 'Comunidad HR',
      img: 'comunidad-hr.png'
    },
    {
      name: 'UAI',
      img: 'uai.png'
    },
  ]

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

          <FadeUp delay={0.6} className="bg-white/20 p-8 text-center flex gap-4 justify-center items-center w-full">
            <Button variant='outline-tertiary' size="lg" href="https://forms.gle/eahSE2NbffTXA9xz6" target="_blank">
              <DownloadCloudIcon className='w-6 h-6 mr-2' />
              Quiero ser sponsor!
            </Button>
          </FadeUp>
        </div>

        <FadeUp delay={0.6} className='text-center bg-white/10 p-8'>
          <h3 className="text-3xl font-bold text-white mb-6">
            Main sponsors:
          </h3>
          <div className="text-center flex gap-12 justify-center items-center w-full flex-wrap">
            {
              mainSponsors.map((sponsor, index) => (
                <div key={index} className='w-[250px] h-20 relative'>
                  <Image
                    src={`/sponsors/main/${sponsor.img}`}
                    alt={`${sponsor.name}`}
                    fill
                    objectFit="contain"
                    quality={100}
                    className='opacity-75 hover:opacity-100 transition'
                  />
                </div>
              ))
            }
          </div>
          <h3 className="text-3xl font-bold text-white mt-24 mb-6">
            Community sponsors:
          </h3>
          <div className="text-center flex gap-18 justify-center items-center w-full flex-wrap">
            {
              communitySponsors.map((sponsor, index) => (
                <div key={index} className='w-[120px] h-20 relative'>
                  <Image
                    src={`/sponsors/community/${sponsor.img}`}
                    alt={`${sponsor.name}`}
                    fill
                    objectFit="contain"
                    quality={100}
                    className='opacity-75 hover:opacity-100 transition'
                  />
                </div>
              ))
            }
          </div>
          <h3 className="text-3xl font-bold text-white mt-24 mb-6">
            Media partners:
          </h3>
          <div className="text-center flex gap-18 justify-center items-center w-full flex-wrap">
            {
              mediaPartners.map((sponsor, index) => (
                <div key={index} className='w-[120px] h-20 relative'>
                  <Image
                    src={`/sponsors/media-partners/${sponsor.img}`}
                    alt={`${sponsor.name}`}
                    fill
                    objectFit="contain"
                    quality={100}
                    className='opacity-75 hover:opacity-100 transition'
                  />
                </div>
              ))
            }
          </div>
          <h3 className="text-3xl font-bold text-white mt-24 mb-6">
            Aliados:
          </h3>
          <div className="text-center flex gap-18 justify-center items-center w-full flex-wrap">
            {
              aliados.map((sponsor, index) => (
                <div key={index} className='w-[120px] h-20 relative'>
                  <Image
                    src={`/sponsors/aliados/${sponsor.img}`}
                    alt={`${sponsor.name}`}
                    fill
                    objectFit="contain"
                    quality={100}
                    className='opacity-75 hover:opacity-100 transition'
                  />
                </div>
              ))
            }
          </div>
        </FadeUp>

      </div>
    </section>
  );
}