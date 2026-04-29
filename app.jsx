// === BCE Ventures — App root + Tweaks ===

const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakToggle, TweakColor } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "atelier",
  "font": "fraunces",
  "showMarquee": true,
  "showSystemMark": true,
  "headlineMode": "sovereignty",
  "showManifesto": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme to root
  useEffect(() => {
    const themeMap = {
      editorial: 'editorial',
      atelier: 'atelier',
      blush: 'blush',
      mono: 'mono',
      maison: 'maison',
    };
    document.documentElement.setAttribute('data-theme', themeMap[tweaks.theme] || 'editorial');
  }, [tweaks.theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', tweaks.font || 'cormorant');
  }, [tweaks.font]);

  const headlines = {
    sovereignty: { lines: ['Sovereignty', 'is the', 'objective.'], italic: 1 },
    standards: { lines: ['Standards', 'before', 'scale.'], italic: 1 },
    durable: { lines: ['Durable', 'value', 'compounds.'], italic: 1 },
  };

  const marqueeItems = [
    'Trust', 'Design', 'Durable systems', 'Pricing power',
    'Standards', 'Provenance', 'Governance', 'Recirculation',
  ];

  return (
    <>
      <Nav />
      <Hero headlineConfig={headlines[tweaks.headlineMode]} />
      {tweaks.showMarquee && <Marquee items={marqueeItems} />}
      {tweaks.showManifesto && <Manifesto />}
      <About />
      <SelectedExperience />
      <Pillars />
      <Engagements />
      <Insights />
      <Contact />
      <Footer />
      {tweaks.showSystemMark && <SystemMark />}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Direction" subtitle="Three distinct visual directions">
          <TweakRadio
            label="Theme"
            value={tweaks.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[
              { value: 'editorial', label: 'Editorial' },
              { value: 'atelier', label: 'Atelier (botanical)' },
              { value: 'blush', label: 'Blush (pink-forward)' },
              { value: 'mono', label: 'Architectural' },
              { value: 'maison', label: 'Maison' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Typography" subtitle="Three editorial serif × sans pairings to compare">
          <TweakRadio
            label="Font pairing"
            value={tweaks.font}
            onChange={(v) => setTweak('font', v)}
            options={[
              { value: 'cormorant', label: 'Cormorant × Inter Tight' },
              { value: 'fraunces', label: 'Fraunces × Inter' },
              { value: 'fraunces-tight', label: 'Fraunces × Inter Tight' },
              { value: 'ebgaramond', label: 'EB Garamond × Inter Tight' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero headline" subtitle="Cycle the opening declaration">
          <TweakSelect
            label="Headline"
            value={tweaks.headlineMode}
            onChange={(v) => setTweak('headlineMode', v)}
            options={[
              { value: 'sovereignty', label: 'Sovereignty is the objective.' },
              { value: 'standards', label: 'Standards before scale.' },
              { value: 'durable', label: 'Durable value compounds.' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Page elements">
          <TweakToggle
            label="Marquee strip"
            value={tweaks.showMarquee}
            onChange={(v) => setTweak('showMarquee', v)}
          />
          <TweakToggle
            label="Manifesto block"
            value={tweaks.showManifesto}
            onChange={(v) => setTweak('showManifesto', v)}
          />
          <TweakToggle
            label="System mark (bottom-left)"
            value={tweaks.showSystemMark}
            onChange={(v) => setTweak('showSystemMark', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
