// MongoDB University: search hero, category filter, course catalog grid.

function University() {
  const categories = ['All', 'Security', 'Search', 'Atlas', 'Develop', 'AI'];
  const [active, setActive] = React.useState('All');
  const courses = [
    { cat: 'Develop', title: 'MongoDB Basics', desc: 'Get hands-on with the document model, CRUD operations, and the aggregation framework.', level: 'Beginner', time: '4 hrs' },
    { cat: 'Security', title: 'Securing MongoDB', desc: 'Configure authentication, role-based access, encryption, and network rules for production.', level: 'Intermediate', time: '3 hrs' },
    { cat: 'Search', title: 'Atlas Search Fundamentals', desc: 'Build relevance-tuned full-text search into your application with Atlas Search indexes.', level: 'Intermediate', time: '5 hrs' },
    { cat: 'AI', title: 'Building AI Apps with Vector Search', desc: 'Implement semantic search and RAG pipelines using Atlas Vector Search and your own embeddings.', level: 'Advanced', time: '6 hrs' },
    { cat: 'Atlas', title: 'Deploying & Managing Atlas', desc: 'Provision clusters, configure auto-scaling, and operate multi-cloud deployments.', level: 'Beginner', time: '4 hrs' },
    { cat: 'Develop', title: 'Data Modeling', desc: 'Design schemas that match your access patterns and scale gracefully over time.', level: 'Intermediate', time: '5 hrs' },
  ];
  const shown = active === 'All' ? courses : courses.filter((c) => c.cat === active);

  return (
    <main>
      <section className="uni-hero">
        <div className="container">
          <Eyebrow>MongoDB University</Eyebrow>
          <h1 style={{ marginTop: 12 }}>Learn MongoDB, free.</h1>
          <p>Self-paced courses, hands-on labs, and industry-recognized certifications — taught by the team behind the database.</p>
          <div className="search-lg">
            <Icon name="search" size={20} color="var(--c-steel)" />
            Search 100+ free courses
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="cat-filter">
            {categories.map((c) => (
              <button key={c} className={'pill-tab' + (c === active ? ' active' : '')} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <div className="catalog">
            {shown.map((c) => (
              <div className="course" key={c.title}>
                <Tag>{c.cat}</Tag>
                <h5>{c.title}</h5>
                <p>{c.desc}</p>
                <div className="meta">
                  <span><Icon name="bar-chart-3" size={14} style={{ verticalAlign: '-2px', marginRight: 4 }} />{c.level}</span>
                  <span><Icon name="clock" size={14} style={{ verticalAlign: '-2px', marginRight: 4 }} />{c.time}</span>
                </div>
                <div className="go">Get Started →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { University });
