import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import SplitText from '@/components/ui/SplitText';

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
    <SectionShell id="prensa" eyebrow="Prensa" theme="dark" watermark="Prensa">
      <div className="split">
        <div className="split-sticky">
          <SplitText
            as="h2"
            className="display-xl"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', maxWidth: '12ch' }}
            variant="blur"
            text="Acreditate como prensa."
            highlight="prensa"
          />
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: '1.5rem' }}>
              Si cubrís innovación, tecnología y emprendimiento, sumate a la cobertura oficial.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <CTAButton variant="solid" size="lg" onClick={() => btnAction('press')}>
                Acreditarme como prensa
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <div className="stack">
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <Card index={o.idx} title={o.title}>
                <p className="c-body">{o.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
