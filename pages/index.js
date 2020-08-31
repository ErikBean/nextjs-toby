import Dashboard from '../src/Dashboard';

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">Toby's Tips</h1>
      </main>

      <footer></footer>

      <style jsx>{`
        .title {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
