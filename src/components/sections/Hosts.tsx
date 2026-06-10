import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import SplitText from '@/components/ui/SplitText';

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
    <SectionShell id="anfitriones" eyebrow="Anfitriones" theme="light" watermark="Hosts">
      <div className="split">
        <div className="split-sticky">
          <SplitText
            as="h2"
            className="h2"
            style={{ maxWidth: '14ch' }}
            variant="mask"
            color="blue"
            text="Sé parte como anfitrión."
            highlight="anfitrión"
          />
          <Reveal delay={120}>
            <p className="lead" style={{ marginTop: '1.5rem' }}>
              La semana se construye en comunidad. Hay muchas formas de poner tu energía.
            </p>
          </Reveal>
        </div>

        <div className="stack">
          {options.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <Card index={o.idx} title={o.title}>
                <p className="c-body" style={{ marginBottom: '1.25rem' }}>{o.body}</p>
                <CTAButton variant="ghost" onClick={() => btnAction(o.interest)}>
                  Quiero sumarme
                </CTAButton>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
