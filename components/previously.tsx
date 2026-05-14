const CREDENTIALS = [
  'Amazon',
  'Google',
  'Target · Best Buy · Walmart',
  'Graff · Harry Winston · Van Cleef & Arpels · Tiffany & Co.',
  'Founding Member, CHIEF',
  'Executive Panelist, Transformation 2025',
  'Parsons M.Arch',
]

export default function Previously() {
  return (
    <section className="previously" aria-label="Previously partnered with">
      <div className="container">
        <div className="previously-inner">
          <span className="eyebrow">Selected partnerships &amp; credentials</span>
          <ul className="previously-list">
            {CREDENTIALS.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
