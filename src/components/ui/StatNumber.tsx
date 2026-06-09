interface StatNumberProps {
  value: string;
  label: string;
  accent?: boolean;
}

/** StatNumber — big display number + mono label. `accent` paints it orange. */
export default function StatNumber({ value, label, accent = false }: StatNumberProps) {
  return (
    <div className="stat">
      <span className={accent ? 'v accent' : 'v'}>{value}</span>
      <span className="l">{label}</span>
    </div>
  );
}
