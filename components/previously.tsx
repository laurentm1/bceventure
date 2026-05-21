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
    names: 'Master of Architecture - Parsons School of Design, CHIEF Founding Member',
  },
]

export default function Previously() {
  return (
    <section className="previously" aria-label="Selected partnerships and affiliations">
      <div className="container">
        <div className="previously-inner">
          <span className="eyebrow previously-heading">Selected partnerships and affiliations</span>
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
