const GROUPS = [
  {
    label: 'Retail and Tech',
    names: 'Amazon, Google, Target, Best Buy, Walmart',
  },
  {
    label: 'Maisons',
    names: 'Graff, Harry Winston, Van Cleef & Arpels, Tiffany & Co.',
  },
  {
    label: 'Recognition',
    names: 'Founding Member CHIEF, Executive Panelist Transformation 2025, Parsons M.Arch',
  },
]

export default function Previously() {
  return (
    <section className="previously" aria-label="Selected partnerships and credentials">
      <div className="container">
        <div className="previously-inner">
          <span className="eyebrow previously-heading">Selected partnerships and credentials</span>
          <div className="credentials-groups">
            {GROUPS.map((g) => (
              <div className="credentials-group" key={g.label}>
                <span className="eyebrow credentials-group-label">{g.label}</span>
                <p className="credentials-group-names body-l">{g.names}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
