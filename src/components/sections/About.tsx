import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import SplitText from '@/components/ui/SplitText';

const items = [
  { idx: '— 01', title: 'Visibilizar', body: 'Dar luz al talento tecnológico y emprendedor local.' },
  { idx: '— 02', title: 'Celebrar', body: 'Reconocer los logros del ecosistema de la ciudad.' },
  { idx: '— 03', title: 'Potenciar', body: 'Impulsar colaboración, aprendizaje y nuevas alianzas.' },
  { idx: '— 04', title: 'Conectar', body: 'Emprendedores, inversores, corporaciones y gobiernos.' },
];

export default function About() {
  return (
    <SectionShell id="que-es" eyebrow="Qué es" theme="light" watermark="Qué es?">
      <div className="split">
        <div className="split-sticky">
          <SplitText
            as="h2"
            className="h2"
            style={{ marginBottom: '1.5rem' }}
            variant="words"
            text="Una serie de eventos para visibilizar el ecosistema."
            highlight="visibilizar"
          />
          <Reveal delay={120}>
            <p className="lead">
              La Tech Week es una serie de eventos a lo largo de varios días para{' '}
              <strong>visibilizar, celebrar y potenciar</strong> el ecosistema tecnológico y
              emprendedor de una ciudad — posicionando a Rosario como hub regional.
            </p>
          </Reveal>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <Card index={it.idx} title={it.title}>
                <p className="c-body">{it.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
