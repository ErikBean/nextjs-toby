import { colors } from '../src/colors';
import Sidebar from './sidebar';

export default ({ children }) => (
  <>
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <header className="header">Toby's Tips</header>
        <main>{children}</main>
      </div>
      <footer></footer>
    </div>
    <style jsx>{`
      .header {
        height: 40px;
        background-color: ${colors.cinnabar};
        color: white;
        padding: 20px;
        font-size: 2rem;
        font-family: Open Sans, Helvetica, sans-serif;
        border-bottom: 2px solid ${colors.calico};
        box-shadow: 0 2px 10px ${colors.limedSpruce};
      }
      .main-container {
        display: flex;
      }
      .main-content {
        flex-grow: 1;
      }
    `}</style>
    <style jsx global>{``}</style>
  </>
);
