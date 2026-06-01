// Promo banner + sticky top navigation.

function TopNav({ page, onNavigate }) {
  const links = ['Solutions', 'Resources', 'Company', 'Pricing'];
  const map = { Pricing: 'pricing', Resources: 'university' };
  return (
    <header>
      <div className="promo">
        New — <b>Atlas Vector Search</b> is now generally available.{' '}
        <a onClick={() => onNavigate('home')}>Learn more →</a>
      </div>
      <nav className="topnav">
        <div className="container topnav-inner">
          <Logo onClick={() => onNavigate('home')} />
          <div className="links">
            {links.map((l) => {
              const target = map[l];
              const active =
                (l === 'Pricing' && page === 'pricing') ||
                (l === 'Resources' && page === 'university');
              return (
                <a
                  key={l}
                  className={active ? 'active' : ''}
                  onClick={() => target && onNavigate(target)}
                >
                  {l}
                </a>
              );
            })}
          </div>
          <div className="spacer" />
          <span className="signin">Sign In</span>
          <Button variant="primary" onClick={() => onNavigate('home')}>Try Free</Button>
        </div>
      </nav>
    </header>
  );
}

Object.assign(window, { TopNav });
