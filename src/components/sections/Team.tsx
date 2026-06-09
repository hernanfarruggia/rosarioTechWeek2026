import Image from 'next/image';
import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import Highlight from '@/components/ui/Highlight';
import { team } from '@/content/site';

export default function Team() {
  return (
    <SectionShell id="equipo" index="08" eyebrow="Equipo" theme="light">
      <Reveal>
        <h2 className="h2" style={{ maxWidth: '16ch', marginBottom: '0.75rem' }}>
          El equipo del <Highlight>Hub</Highlight> organizador.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="lead" style={{ maxWidth: '48ch', marginBottom: '3rem' }}>
          Las personas detrás de la Rosario TechWeek.
        </p>
      </Reveal>
      <div className="team-grid">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={(i % 4) * 60}>
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
