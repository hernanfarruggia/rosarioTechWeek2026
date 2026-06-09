import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import Highlight from '@/components/ui/Highlight';

const pillars = [
  { idx: '— 01', title: 'Conocimiento', body: 'Charlas, talleres y paneles con referentes que comparten lo que saben.' },
  { idx: '— 02', title: 'Networking', body: 'Conexiones reales entre quienes construyen el futuro de la región.' },
  { idx: '— 03', title: 'Negocios', body: 'Oportunidades concretas: alianzas, inversión y crecimiento.' },
];

export default function Pillars() {
  return (
    <SectionShell id="pilares" index="03" eyebrow="Pilares" theme="dark">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '18ch', marginBottom: '3rem' }}>
          Conocimiento, <Highlight>networking</Highlight> y negocios.
        </h2>
      </Reveal>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <Card index={p.idx} title={p.title}>
              <p className="c-body">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
