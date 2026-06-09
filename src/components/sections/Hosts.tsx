import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import Highlight from '@/components/ui/Highlight';

interface HostsProps {
  btnAction: (interest: string) => void;
}

const options = [
  { idx: '— 01', title: 'Ser venue', body: 'Abrí las puertas de tu espacio y recibí un evento de la semana.', interest: 'venue' },
  { idx: '— 02', title: 'Ser speaker', body: 'Compartí tu conocimiento con la comunidad en charlas y paneles.', interest: 'speaker' },
  { idx: '— 03', title: 'Sumar evento', body: 'Agregá tu propio evento al calendario oficial de la TechWeek.', interest: 'venue' },
];

export default function Hosts({ btnAction }: HostsProps) {
  return (
    <SectionShell id="anfitriones" index="06" eyebrow="Anfitriones" theme="light">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '18ch', marginBottom: '1.5rem' }}>
          Sé parte como <Highlight color="blue">anfitrión</Highlight>.
        </h2>
      </Reveal>
      <div className="grid grid-auto">
        {options.map((o, i) => (
          <Reveal key={o.title} delay={i * 80}>
            <Card index={o.idx} title={o.title}>
              <p className="c-body" style={{ marginBottom: '1.25rem' }}>{o.body}</p>
              <CTAButton variant="ghost" onClick={() => btnAction(o.interest)}>
                Quiero sumarme
              </CTAButton>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
