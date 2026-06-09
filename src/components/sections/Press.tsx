import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import Highlight from '@/components/ui/Highlight';

interface PressProps {
  btnAction: (interest: string) => void;
}

const offerings = [
  { idx: '— 01', title: 'Media kit', body: 'Material listo para publicar: logos, fotos, datos y notas de la edición.' },
  { idx: '— 02', title: 'Accesos', body: 'Ingreso a los eventos de la semana para cubrir lo que pasa en vivo.' },
  { idx: '— 03', title: 'Entrevistas', body: 'Coordinamos entrevistas con organizadores, speakers y protagonistas.' },
];

export default function Press({ btnAction }: PressProps) {
  return (
    <SectionShell id="prensa" index="07" eyebrow="Prensa" theme="dark">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '18ch', marginBottom: '1.5rem' }}>
          Acreditación de <Highlight>prensa</Highlight>.
        </h2>
      </Reveal>
      <div className="grid grid-auto" style={{ marginBottom: '2.5rem' }}>
        {offerings.map((o, i) => (
          <Reveal key={o.title} delay={i * 80}>
            <Card index={o.idx} title={o.title}>
              <p className="c-body">{o.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <CTAButton variant="solid" size="lg" onClick={() => btnAction('press')}>
          Acreditarme como prensa
        </CTAButton>
      </Reveal>
    </SectionShell>
  );
}
