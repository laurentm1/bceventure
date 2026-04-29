// === BCE Ventures — shared components ===

const { useState, useEffect, useRef } = React;

// IntersectionObserver hook for scroll reveals
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, seen];
}

function Reveal({ children, stagger = false, as: Tag = 'div', className = '', ...props }) {
  const [ref, seen] = useReveal();
  const cls = stagger ? 'reveal-stagger' : 'reveal';
  return (
    <Tag ref={ref} className={`${cls} ${seen ? 'in' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

// Animated split words for hero
function SplitHeadline({ text, delayBase = 0 }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="word">
            <span
              className="word-inner"
              style={{ animationDelay: `${delayBase + i * 0.08}s` }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </>
  );
}

// Section header with number
function SectionHeader({ num, eyebrow, title, italic, titleSuffix, oneLine = false, className = '' }) {
  return (
    <Reveal stagger className={`sec-header ${oneLine ? 'sec-header--oneline' : ''} ${className}`}>
      <div className="sec-num">{num}</div>
      <div className="sec-title-wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display-m" style={{ margin: '8px 0 0' }}>
          {title}
          {italic && <> <span className="serif italic">{italic}</span></>}
          {titleSuffix && <>{titleSuffix}</>}
        </h2>
      </div>
    </Reveal>
  );
}

// Nav
function Nav({ onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onNav?.(id);
  };

  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);
  const navClick = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      <nav className="nav" style={{
        background: scrolled
          ? 'color-mix(in srgb, var(--bone) 88%, transparent)'
          : 'color-mix(in srgb, var(--bone) 70%, transparent)',
        borderBottomColor: scrolled ? 'var(--rule-soft)' : 'transparent',
      }}>
        <a href="#top" className="nav-mark" onClick={handleClick('top')} aria-label="BCE Ventures — Home">
          <img src="assets/bce-logo.jpg" alt="BCE Ventures" className="nav-logo" />
        </a>
        <div className="nav-links">
          <button className="nav-link" onClick={handleClick('about')}>About</button>
          <button className="nav-link" onClick={handleClick('approach')}>Approach</button>
          <button className="nav-link" onClick={handleClick('engagements')}>Practice</button>
          <button className="nav-link" onClick={handleClick('insights')}>Insights</button>
          <button className="nav-link" onClick={handleClick('contact')}>Contact</button>
        </div>
        <button className="nav-cta nav-cta--desktop" onClick={handleClick('contact')}>
          Request a consult
        </button>
        <button className="nav-hamburger" onClick={toggleMenu} aria-label="Menu">
          <span className={menuOpen ? 'ham-open' : ''}></span>
          <span className={menuOpen ? 'ham-open' : ''}></span>
          <span className={menuOpen ? 'ham-open' : ''}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="nav-mobile-menu">
          <button onClick={() => navClick('about')}>About</button>
          <button onClick={() => navClick('approach')}>Approach</button>
          <button onClick={() => navClick('engagements')}>Practice</button>
          <button onClick={() => navClick('insights')}>Insights</button>
          <button onClick={() => navClick('contact')}>Contact</button>
          <button className="nav-mobile-cta" onClick={() => navClick('contact')}>Request a consult</button>
        </div>
      )}
    </>
  );
}

// System mark — bottom-left fixed pill
function SystemMark() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, '0');
      const mm = d.getMinutes().toString().padStart(2, '0');
      setTime(`${hh}:${mm} NYC`);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return null;
}

// Marquee strip
function Marquee({ items }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeated.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  useReveal, Reveal, SplitHeadline, SectionHeader, Nav, SystemMark, Marquee,
});
