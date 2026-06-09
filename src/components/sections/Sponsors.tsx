import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import Highlight from '@/components/ui/Highlight';

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
    <SectionShell id="sponsors" index="05" eyebrow="Sponsors" theme="dark">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '16ch', marginBottom: '1.5rem' }}>
          ¿Por qué <Highlight>sumarse</Highlight> como sponsor?
        </h2>
      </Reveal>
      <div className="grid grid-auto" style={{ marginBottom: '2.5rem' }}>
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 80}>
            <Card index={r.idx} title={r.title}>
              <p className="c-body">{r.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <CTAButton variant="solid" size="lg" onClick={() => btnAction('sponsor')}>
          Quiero ser sponsor
        </CTAButton>
      </Reveal>
    </SectionShell>
  );
}
