// Terminal-aesthetic code mockup card (sits on the dark hero band).

function CodeMockup({ file = 'mongosh', lines }) {
  const defaultLines = (
    <>
      <span className="c">// Find this year's top-rated movies</span>{'\n'}
      <span className="g">db</span>.<span className="b">movies</span>.<span className="g">find</span>({'{'} year: <span className="s">2025</span> {'}'}){'\n'}
      {'  '}.<span className="g">sort</span>({'{'} <span className="b">imdb.rating</span>: <span className="s">-1</span> {'}'}){'\n'}
      {'  '}.<span className="g">limit</span>(<span className="s">10</span>){'\n'}
      {'\n'}
      <span className="c">// Insert a document</span>{'\n'}
      <span className="g">db</span>.<span className="b">users</span>.<span className="g">insertOne</span>({'{'}{'\n'}
      {'  '}name: <span className="s">"Ada Lovelace"</span>,{'\n'}
      {'  '}roles: [<span className="s">"admin"</span>, <span className="s">"builder"</span>]{'\n'}
      {'}'})
    </>
  );
  return (
    <div className="mockup">
      <div className="bar">
        <span className="dot" style={{ background: '#FF5F57' }} />
        <span className="dot" style={{ background: '#FEBC2E' }} />
        <span className="dot" style={{ background: '#28C840' }} />
        <span className="file">{file}</span>
      </div>
      <pre>{lines || defaultLines}</pre>
    </div>
  );
}

Object.assign(window, { CodeMockup });
