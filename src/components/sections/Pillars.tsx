import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Card from '@/components/ui/Card';
import SplitText from '@/components/ui/SplitText';

const pillars = [
  {
    idx: '— 01',
    title: 'Conocimiento',
    body: 'Charlas, talleres y paneles con referentes que comparten lo que saben. Cinco días de aprendizaje práctico sobre tecnología, producto y negocio, pensados para que te lleves ideas aplicables desde el primer evento.',
  },
  {
    idx: '— 02',
    title: 'Networking',
    body: 'Conexiones reales entre quienes construyen el futuro de la región. Founders, inversores, talento técnico y empresas en un mismo espacio: las relaciones que nacen acá son las que después mueven proyectos.',
  },
  {
    idx: '— 03',
    title: 'Negocios',
    body: 'Oportunidades concretas: alianzas, inversión y crecimiento. Un punto de encuentro para cerrar acuerdos, encontrar socios y abrir puertas que aceleren tu próximo paso en el ecosistema.',
  },
];

export default function Pillars() {
  return (
    <SectionShell id="pilares" eyebrow="Pilares" theme="dark" watermark="Pilares">
      <SplitText
        as="h2"
        className="display-xl"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', maxWidth: '16ch', marginBottom: '3.5rem' }}
        variant="mask"
        text="Conocimiento, networking y negocios."
        highlight="networking"
      />
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', alignItems: 'start' }}>
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 110}>
            <Card index={p.idx} title={p.title}>
              <p className="c-body">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
