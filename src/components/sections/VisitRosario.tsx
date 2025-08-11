import Button from '@/components/ui/Button';
import { MapPin, Utensils, Palette, Bike, Bed } from 'lucide-react';

export default function VisitRosario() {
  const activities = [
    { icon: MapPin, title: "Conocer la ribera y sus parques", description: "Pasea por el río Paraná" },
    { icon: Utensils, title: "Descubrir la gastronomía local", description: "Sabores únicos de Rosario" },
    { icon: Palette, title: "Visitar museos y espacios culturales", description: "Arte y cultura rosarina" },
    { icon: Bike, title: "Recorrerla en bici o a pie", description: "Ciudad bike-friendly" },
    { icon: Bed, title: "Alojarte cerca de las principales sedes", description: "Hoteles y alojamientos" }
  ];

  return (
    <section id="visita-rosario" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent-black mb-8">
            Visitá Rosario
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
            Una ciudad en movimiento
          </h3>
          <p className="text-lg text-accent-gray leading-relaxed max-w-3xl mx-auto">
            Rosario no solo es cuna de la bandera, el arte y el deporte. Es también una ciudad 
            vibrante, abierta y creativa que late al ritmo de su comunidad tech.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center text-accent-black mb-8">
              Aprovechá tu visita para:
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-b from-white to-gray-50 p-6 border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group text-center"
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={48} className="text-primary mx-auto" />
                    </div>
                    <h5 className="text-lg font-bold text-accent-black mb-2">
                      {activity.title}
                    </h5>
                    <p className="text-accent-gray text-sm">
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* City image placeholder */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏙️</span>
                </div>
                <p className="text-accent-gray">Rosario, ciudad de la innovación</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-accent-black mb-6">
                Turismo tech en Rosario
              </h4>
              <p className="text-lg text-accent-gray leading-relaxed mb-6">
                Descubrí una ciudad que combina historia, cultura y tecnología. Rosario te recibe 
                con espacios únicos, gastronomía de calidad y una comunidad tech vibrante.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-accent-gray">Ubicación estratégica en el corredor tecnológico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-accent-gray">Excelente conectividad y transporte público</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-accent-gray">Espacios coworking y cafés tech-friendly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tourism CTA */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 text-center">
            <h4 className="text-2xl font-bold text-accent-black mb-6">
              Guías para visitantes
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/guia-visitantes.pdf" target="_blank">
                Guía rápida para visitantes
              </Button>
              <Button variant="outline" size="lg" href="#contacto">
                Recomendaciones del equipo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}