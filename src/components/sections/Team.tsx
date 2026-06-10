import Image from 'next/image';
import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import SplitText from '@/components/ui/SplitText';
import { team } from '@/content/site';

export default function Team() {
  return (
    <SectionShell id="equipo" eyebrow="Equipo" theme="light" watermark="Team">
      <SplitText
        as="h2"
        className="h2"
        style={{ maxWidth: '16ch', marginBottom: '0.75rem' }}
        variant="words"
        text="El equipo del Hub organizador."
        highlight="Hub"
      />
      <Reveal delay={100}>
        <p className="lead" style={{ maxWidth: '48ch', marginBottom: '3.5rem' }}>
          Las personas detrás de la Rosario TechWeek.
        </p>
      </Reveal>
      <div className="team-grid">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={(i % 4) * 70}>
            <div className="member">
              <div className="photo">
                <Image src={m.img} alt={m.name} width={320} height={320} />
              </div>
              <div className="name">{m.name}</div>
              <div className="role">{m.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
