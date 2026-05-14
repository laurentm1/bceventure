export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="mark">BCE<span className="dot">.</span>VENTURES</span>
          <p>
            Operator-led venture building and strategic advisory.
            Trust, design, durable systems. Sovereignty is the objective.
          </p>
        </div>
        <div className="footer-col">
          <h4>Practice</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#engagements">Engagements</a></li>
            <li><a href="#insights">Insights</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#contact">Request a consult</a></li>
            <li><a href="mailto:hello@bceventure.com">hello@bceventure.com</a></li>
            <li>
              <a href="https://www.linkedin.com/in/alamrami/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Office</h4>
          <ul>
            <li><span style={{ color: 'var(--muted)', fontSize: 14 }}>New York</span></li>
            <li><span style={{ color: 'var(--muted)', fontSize: 14 }}>By appointment</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-mark-large">
        BCE<span className="dot">.</span>VENTURES
      </div>

      <div className="footer-bottom">
        <span>© 2026 BCE Ventures · All rights reserved</span>
        <span>A practice, not a platform</span>
      </div>
    </footer>
  )
}
