import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import SplitText from '@/components/ui/SplitText';

interface SponsorsProps {
  btnAction: (interest: string) => void;
}

const reasons = [
  { idx: '— 01', title: 'Visibilidad de marca', body: 'Tu marca frente a la comunidad tech y emprendedora de la región.' },
  { idx: '— 02', title: 'Conexión con el ecosistema', body: 'Acceso directo a startups, talento, inversores y aliados.' },
  { idx: '— 03', title: 'Impacto regional', body: 'Asociá tu marca al evento de tecnología más grande de la ciudad.' },
];

export default function Sponsors({ btnAction }: SponsorsProps) {
  return (
    <SectionShell id="sponsors" eyebrow="Sponsors" theme="dark" watermark="Sponsors">
      <div className="split" style={{ marginBottom: '3rem' }}>
        <div className="split-sticky">
          <SplitText
            as="h2"
            className="display-xl"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', maxWidth: '12ch' }}
            variant="words"
            text="¿Por qué sumarse?"
            highlight="sumarse"
          />
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: '1.5rem' }}>
              Construyamos juntos el evento de tecnología más grande de Rosario.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <CTAButton variant="solid" size="lg" onClick={() => btnAction('sponsor')}>
                Quiero ser sponsor
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <div className="stack">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <Card index={r.idx} title={r.title}>
                <p className="c-body">{r.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
