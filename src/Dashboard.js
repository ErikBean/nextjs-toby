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
          height: 100%;
          width: 100%;
        }
        .main-content {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
};
