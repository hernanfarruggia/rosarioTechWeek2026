import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import Highlight from '@/components/ui/Highlight';

const items = [
  { idx: '— 01', title: 'Visibilizar', body: 'Dar luz al talento tecnológico y emprendedor local.' },
  { idx: '— 02', title: 'Celebrar', body: 'Reconocer los logros del ecosistema de la ciudad.' },
  { idx: '— 03', title: 'Potenciar', body: 'Impulsar colaboración, aprendizaje y nuevas alianzas.' },
  { idx: '— 04', title: 'Conectar', body: 'Emprendedores, inversores, corporaciones y gobiernos.' },
];

export default function About() {
  return (
    <SectionShell id="que-es" index="02" eyebrow="Qué es" theme="light">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '20ch', marginBottom: '1.5rem' }}>
          Una serie de eventos para <Highlight>visibilizar</Highlight> el ecosistema.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="lead" style={{ marginBottom: '3rem' }}>
          La Tech Week es una serie de eventos a lo largo de varios días para{' '}
          <strong>visibilizar, celebrar y potenciar</strong> el ecosistema tecnológico y
          emprendedor de una ciudad — posicionando a Rosario como hub regional.
        </p>
      </Reveal>
      <div className="grid grid-auto">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80}>
            <Card index={it.idx} title={it.title}>
              <p className="c-body">{it.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
