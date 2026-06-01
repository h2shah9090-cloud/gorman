// Router shell: switches between Home / Pricing / University.

function App() {
  const [page, setPage] = React.useState('home');
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'auto' }); };

  return (
    <div>
      <TopNav page={page} onNavigate={navigate} />
      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'pricing' && <Pricing />}
      {page === 'university' && <University />}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
