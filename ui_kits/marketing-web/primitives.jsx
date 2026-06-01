// Shared primitives + small UI atoms for the MongoDB marketing-web kit.

// Lucide icon helper — renders an <i> that lucide.createIcons() upgrades.
function Icon({ name, size = 18, color, strokeWidth = 2, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': strokeWidth },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', color, ...style }} />;
}

function Logo({ onDark = false, onClick }) {
  return (
    <span className="logo" onClick={onClick} style={{ cursor: 'pointer', display: 'inline-flex' }}>
      <img
        src="../../assets/logo-horizontal-trim.png"
        alt="Gorman Medical and Specialty Center"
        style={{ height: onDark ? 40 : 38, display: 'block' }}
      />
    </span>
  );
}

function Button({ variant = 'primary', children, icon, iconRight, block, onClick, style }) {
  const cls = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    'secondary-dark': 'btn btn-secondary-dark',
    ghost: 'btn btn-ghost',
  }[variant] || 'btn btn-primary';
  return (
    <button className={cls + (block ? ' btn-block' : '')} onClick={onClick} style={style}>
      {icon && <Icon name={icon} size={16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={16} />}
    </button>
  );
}

const CATEGORY_COLORS = {
  Security: 'var(--c-accent-purple)',
  Search: 'var(--c-accent-orange)',
  Atlas: 'var(--c-accent-blue)',
  Develop: 'var(--c-brand-green-dark)',
  AI: 'var(--c-accent-pink)',
};

function Tag({ children, color }) {
  return <span className="tag" style={{ background: color || CATEGORY_COLORS[children] || 'var(--c-slate)' }}>{children}</span>;
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

Object.assign(window, { Icon, Logo, Button, Tag, Eyebrow, CATEGORY_COLORS });
