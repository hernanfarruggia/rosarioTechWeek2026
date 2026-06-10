/* eslint-disable @next/next/no-img-element */
import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import StatNumber from '@/components/ui/StatNumber';
import Marquee from '@/components/ui/Marquee';
import CTAButton from '@/components/ui/CTAButton';
import SplitText from '@/components/ui/SplitText';
import { sponsors2025 } from '@/content/site';

export default function PreviousEdition() {
  return (
    <SectionShell id="edicion-2025" eyebrow="Edición 2025" theme="light" watermark="2025">
      <SplitText
        as="h2"
        className="h2"
        style={{ maxWidth: '16ch', marginBottom: '0.75rem' }}
        variant="blur"
        color="blue"
        text="¿Qué ocurrió en la edición 2025?"
        highlight="edición 2025"
      />
      <Reveal delay={100}>
        <p className="lead" style={{ maxWidth: '52ch', marginBottom: '3.5rem' }}>
          La primera Tech Week de Rosario. Los números que dejó la edición inaugural.
        </p>
      </Reveal>

      <div className="stats-grid">
        <Reveal delay={0}><StatNumber value="+$125M" label="Impacto económico" accent /></Reveal>
        <Reveal delay={60}><StatNumber value="1.500" label="Inscriptos" accent /></Reveal>
        <Reveal delay={120}><StatNumber value="32" label="Eventos" /></Reveal>
        <Reveal delay={180}><StatNumber value="14" label="Locaciones" /></Reveal>
        <Reveal delay={240}><StatNumber value="40" label="Empresas" /></Reveal>
        <Reveal delay={300}><StatNumber value="15" label="Menciones en prensa" /></Reveal>
      </div>

      <div style={{ marginTop: '4.5rem' }}>
        <div className="sub-eyebrow">— Marcas que nos acompañaron en 2025</div>
        <Marquee speed={42}>
          {sponsors2025.map((sp) => (
            <div className="logo-chip" key={sp.name}>
              <img src={sp.img} alt={sp.name} loading="lazy" />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="split" style={{ marginTop: '4.5rem', alignItems: 'center' }}>
        <Reveal>
          <div>
            <div className="sub-eyebrow">— Repercusión en prensa</div>
            <p className="lead" style={{ marginBottom: '1.5rem' }}>
              &ldquo;Rosario muestra todo su potencial de innovación, startups y tecnología.&rdquo;
            </p>
            <CTAButton variant="ghost" href="https://www.lacapital.com.ar" target="_blank">
              Leer la nota de La Capital
            </CTAButton>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div className="sub-eyebrow">— Reel 2025</div>
            <div className="reel" style={{ maxWidth: '300px' }}>
              <img src="/1.jpeg" alt="Rosario TechWeek 2025" />
              <div className="play"><span aria-hidden="true">▶</span></div>
              <div className="tag">Placeholder · 9:16</div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
