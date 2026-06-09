/* eslint-disable @next/next/no-img-element */
import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import StatNumber from '@/components/ui/StatNumber';
import CTAButton from '@/components/ui/CTAButton';
import Highlight from '@/components/ui/Highlight';
import { stats2025, sponsors2025 } from '@/content/site';

export default function PreviousEdition() {
  return (
    <SectionShell id="edicion-2025" index="04" eyebrow="Edición 2025" theme="light">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '16ch', marginBottom: '0.75rem' }}>
          ¿Qué ocurrió en la <Highlight color="blue">edición 2025</Highlight>?
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="lead" style={{ maxWidth: '52ch', marginBottom: '3rem' }}>
          La primera Tech Week de Rosario. Los números que dejó la edición inaugural.
        </p>
      </Reveal>

      <div className="stats-grid">
        {stats2025.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <StatNumber value={s.value} label={s.label} accent={s.accent} />
          </Reveal>
        ))}
      </div>

      <div className="prev-grid">
        <Reveal>
          <div>
            <div className="sub-eyebrow">— Sponsors 2025</div>
            <div className="logo-wall">
              {sponsors2025.map((sp) => (
                <div className="logo-chip" key={sp.name}>
                  <img src={sp.img} alt={sp.name} loading="lazy" />
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <CTAButton variant="ghost" href="https://www.lacapital.com.ar" target="_blank">
                Leer la nota de La Capital
              </CTAButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div className="sub-eyebrow">— Reel 2025</div>
            <div className="reel">
              <img src="/1.jpeg" alt="Rosario TechWeek 2025" />
              <div className="play">
                <span aria-hidden="true">▶</span>
              </div>
              <div className="tag">Placeholder · 9:16</div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
