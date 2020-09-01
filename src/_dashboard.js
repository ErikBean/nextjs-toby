import { colors } from '../src/colors';
import Sidebar from './sidebar';
import Header from './Header';

export default ({ children }) => (
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
      }
      .main-content {
        flex-grow: 1;
      }
      .main {
        margin: 5vw;
      }
    `}</style>
    <style jsx global>{``}</style>
  </>
);
