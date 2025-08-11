import FadeUp from '@/components/ui/FadeUp';

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
            {/* Placeholder for community image */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-body text-accent-gray">Imagen de la comunidad tech</p>
              </div>
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