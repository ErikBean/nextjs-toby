import { colors } from '../src/colors';

export default () => (
  <>
    <header className="header">
      <h1 className="title">Toby's Tips</h1>
    </header>
    <style jsx>{`
      .header {
        display: flex;
        align-items: center;
        padding-left: 40px;
        height: 140px;
        background-color: ${colors.cinnabar};
        border-bottom: 2px solid ${colors.calico};
        box-shadow: 0 2px 10px ${colors.limedSpruce};
        box-sizing: border-box;
      }
      .title {
        color: ${colors.alabaster};
        font-size: 2rem;
      }
    `}</style>
  </>
);
