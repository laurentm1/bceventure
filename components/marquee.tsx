const ITEMS = [
  'Trust', 'Design', 'Durable systems', 'Pricing power',
  'Standards', 'Provenance', 'Governance', 'Recirculation',
]

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
