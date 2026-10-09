import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import SplitText from '@/components/ui/SplitText';
import CTAButton from '@/components/ui/CTAButton';
import { meta } from '@/content/site';

export default function Agenda() {
  return (
    <SectionShell id="agenda" eyebrow="Agenda" theme="light" watermark="Agenda">
      <SplitText
        as="h2"
        className="display-xl"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', maxWidth: '16ch', marginBottom: '2rem' }}
        variant="mask"
        text="Una semana, todos los eventos."
        highlight="eventos"
      />
      <Reveal delay={120}>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          Del 19 al 25 de octubre. Sumate a los que quieras desde la agenda oficial.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <iframe
          src={meta.lumaEmbed}
          title="Agenda oficial de la Rosario TechWeek en Luma"
          loading="lazy"
          allowFullScreen
          style={{
            width: '100%',
            height: 'clamp(520px, 80vh, 800px)',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '0.75rem',
            background: '#fff',
          }}
        />
        <div style={{ marginTop: '1.5rem' }}>
          <CTAButton variant="solid" size="lg" href={meta.luma} target="_blank">
            Abrir en Luma
          </CTAButton>
        </div>
      </Reveal>
    </SectionShell>
  );
}
