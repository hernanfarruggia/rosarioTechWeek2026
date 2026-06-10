import CountUp from './CountUp';

interface StatNumberProps {
  value: string;
  label: string;
  accent?: boolean;
  size?: 'md' | 'lg';
}

/** StatNumber — big display number (animated count-up) + mono label. */
export default function StatNumber({ value, label, accent = false, size = 'md' }: StatNumberProps) {
  return (
    <div className={`stat${size === 'lg' ? ' stat-lg' : ''}`}>
      <span className={accent ? 'v accent' : 'v'}>
        <CountUp value={value} />
      </span>
      <span className="l">{label}</span>
    </div>
  );
}
