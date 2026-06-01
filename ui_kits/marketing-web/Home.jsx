// Home / landing page: hero band, feature grid, logo wall, CTA banner.

function Home({ onNavigate }) {
  const features = [
    { icon: 'database', title: 'Document model', body: 'Store data the way your code looks. Flexible, intuitive documents map to objects in any language.', },
    { icon: 'search', title: 'Atlas Search', body: 'Rich, relevance-based full-text search built right on top of your operational data.', },
    { icon: 'sparkles', title: 'Vector Search', body: 'Build AI-powered apps with semantic search and retrieval over your own data.', },
    { icon: 'shield-check', title: 'Enterprise security', body: 'Encryption everywhere, granular access controls, and compliance out of the box.', },
    { icon: 'globe', title: 'Multi-cloud', body: 'Deploy across AWS, Azure, and Google Cloud — in 100+ regions, with the click of a button.', },
    { icon: 'gauge', title: 'Scales with you', body: 'From a free shared cluster to globally-distributed, sharded deployments. No re-architecting.', },
  ];
  const logos = ['Adobe', 'Toyota', 'eBay', 'Verizon', 'Forbes', 'Novartis'];

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>One data platform. Unlimited AI potential.</h1>
          <p className="sub">
            Build faster and scale further with the developer data platform that
            unifies operational, search, and AI workloads — all on the document model.
          </p>
          <div className="cta-row">
            <Button variant="primary" iconRight="arrow-right">Try Free</Button>
            <Button variant="secondary-dark">Contact sales</Button>
          </div>
          <div className="mockup-wrap">
            <CodeMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Eyebrow>The developer data platform</Eyebrow>
            <h2>Everything you need to build modern applications</h2>
            <p>One unified platform — so your team ships features instead of stitching together databases.</p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="ic"><Icon name={f.icon} size={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <a className="link">Learn more <Icon name="arrow-right" size={15} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="section tight" style={{ background: 'var(--c-surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--c-stone)', marginBottom: 32, letterSpacing: '.4px' }}>
            TRUSTED BY THE WORLD'S LEADING ORGANIZATIONS
          </div>
          <div className="logo-wall">
            {logos.map((l) => <span className="item" key={l}>{l}</span>)}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Start building with MongoDB Atlas today</h2>
            <p>Deploy a free database in seconds. No credit card required.</p>
            <div className="row">
              <Button variant="primary" iconRight="arrow-right">Start free</Button>
              <Button variant="secondary-dark" onClick={() => onNavigate('pricing')}>See pricing</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Home });
