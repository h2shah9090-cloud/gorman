// Multi-column dark footer.

function Footer() {
  const cols = [
    { h: 'Product', links: ['Atlas', 'Enterprise Advanced', 'Community Edition', 'Vector Search', 'Pricing'] },
    { h: 'Resources', links: ['Documentation', 'MongoDB University', 'Developer Center', 'Community Forums', 'Blog'] },
    { h: 'Company', links: ['About', 'Careers', 'Newsroom', 'Partners', 'Contact'] },
    { h: 'Support', links: ['Get Help', 'Status', 'Trust Center', 'Legal'] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo onDark />
            <p className="blurb">The developer data platform that unifies operational, search, and AI workloads.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h6>{c.h}</h6>
              <ul>{c.links.map((l) => <li key={l}><a>{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="legal">
          <span>© 2026 MongoDB, Inc.</span>
          <span>Privacy · Terms · Cookie Preferences</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
