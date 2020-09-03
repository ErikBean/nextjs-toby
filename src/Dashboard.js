import Sidebar from './Sidebar';
import Header from './Header';
export default ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main className="main">{children}</main>
        </div>
        <footer></footer>
      </div>
      <style jsx>{`
        .main-container {
          display: flex;
          overflow: auto;
          width: 100%;
          height: 100%;
        }
        .main-content {
          flex-grow: 1;
        }
        .main {
          min-width: 200px;
        }
      `}</style>
    </>
  );
};
