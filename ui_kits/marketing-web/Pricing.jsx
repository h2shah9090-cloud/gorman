// Pricing page: pill tabs, 3-tier card row, comparison table.

function PricingTier({ tier }) {
  return (
    <div className={'tier' + (tier.featured ? ' featured' : '')}>
      {tier.featured && <span className="badge badge-popular pop">Most Popular</span>}
      <div className="tname">{tier.name}</div>
      <div className="tdesc">{tier.desc}</div>
      <div className="price">{tier.price}{tier.unit && <small> {tier.unit}</small>}</div>
      <ul className="flist">
        {tier.features.map((f) => (
          <li key={f}><span className="check"><Icon name="check" size={16} strokeWidth={2.5} /></span>{f}</li>
        ))}
      </ul>
      <Button variant={tier.featured ? 'primary' : 'secondary'} block>{tier.cta}</Button>
    </div>
  );
}

function Pricing() {
  const [tab, setTab] = React.useState('MongoDB Atlas');
  const tabs = ['MongoDB Atlas', 'Enterprise Advanced', 'Community'];
  const tiers = [
    { name: 'Free', desc: 'For learning and exploring MongoDB in a cloud environment.', price: '$0', unit: 'forever',
      cta: 'Start free', features: ['512 MB to 5 GB storage', 'Shared RAM & vCPU', 'Community support', 'Atlas Search included'] },
    { name: 'Flex', desc: 'For small apps with variable traffic that scale to demand.', price: '$0.10', unit: '/ hour, scales to use', featured: true,
      cta: 'Get started', features: ['Up to 5 GB storage', 'Scales automatically with usage', 'Standard support', 'Daily backups', 'Vector Search included'] },
    { name: 'Dedicated', desc: 'For production apps needing advanced scale and security.', price: '$57', unit: '/ month and up',
      cta: 'Contact sales', features: ['Dedicated RAM & vCPU', 'Auto-scaling & sharding', 'Advanced security & compliance', '24×7 enterprise support', 'Multi-region deployments'] },
  ];
  const rows = [
    ['Storage', '5 GB', '5 GB', 'Unlimited'],
    ['Dedicated resources', false, false, true],
    ['Automatic backups', false, true, true],
    ['Atlas Search', true, true, true],
    ['Vector Search', false, true, true],
    ['VPC peering', false, false, true],
    ['Advanced security', false, false, true],
    ['Support', 'Community', 'Standard', '24×7 Enterprise'],
  ];
  const cell = (v) =>
    v === true ? <span className="check"><Icon name="check" size={17} strokeWidth={2.5} /></span>
    : v === false ? <span className="dash">—</span>
    : v;

  return (
    <main>
      <section className="section tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 48 }}>Pricing that scales with you</h2>
            <p>Start free and only pay for what you use. No upfront costs, no surprises.</p>
          </div>
          <div className="pill-tabs">
            {tabs.map((t) => (
              <button key={t} className={'pill-tab' + (t === tab ? ' active' : '')} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
          <div className="tiers">
            {tiers.map((t) => <PricingTier key={t.name} tier={t} />)}
          </div>
        </div>
      </section>

      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 32 }}>Compare plans</h2>
          </div>
          <table className="cmp">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="ctr">Free</th>
                <th className="ctr">Flex</th>
                <th className="ctr">Dedicated</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td className="feat">{r[0]}</td>
                  <td className="ctr">{cell(r[1])}</td>
                  <td className="ctr">{cell(r[2])}</td>
                  <td className="ctr">{cell(r[3])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Pricing });
