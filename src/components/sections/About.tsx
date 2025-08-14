import FadeUp from '@/components/ui/FadeUp';
import Image from 'next/image';

export default function About() {
  const stats = [
    { number: "+100", label: "Startups activas" },
    { number: "5", label: "Universidades con carreras STEM" },
    { number: "∞", label: "Casos de éxito con alcance internacional" },
  ];

  return (
    <section id="about" className="py-20 bg-white dot-matrix-black">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-12">
        <FadeUp>
          <h2 className="text-6xl md:text-8xl text-black">
            Un ecosistema con mirada al futuro
          </h2>
        </FadeUp>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeUp delay={0.2}>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                <span className='font-semibold text-primary'>Rosario TechWeek</span> es el punto de encuentro para
                proyectos que están haciendo del futuro una realidad.
              </p>
              <p>
                En Rosario, la innovación no es una promesa: es una red de universidades, startups, 
                instituciones, empresas y comunidades que trabajan día a día para resolver desafíos reales.
              </p>
              <p>
                Esta semana de actividades, charlas, talleres y experiencias, celebra y potencia ese 
                movimiento. Rosario no se queda atrás. <strong className="font-semibold">Rosario se proyecta al mundo.</strong>
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 h-72 w-full md:max-w-3/4 flex items-center justify-center relative">
              <Image
                src="/1.jpeg"
                alt='Asistentes a Rosario TechWeek'
                fill
                className='object-cover'
              />
              <div className="absolute inset-0 bg-white/25 hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.6}>
          {/* Stats section */}
          <div className="p-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-6xl md:text-8xl text-black mb-2">
                    {stat.number}
                  </h4>
                  <p className='text-gray-600'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}