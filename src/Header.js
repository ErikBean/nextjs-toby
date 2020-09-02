import { colors } from '../src/colors';
import { sizes } from '../src/sizes';

export default () => (
  <>
    <header className="header" id="top-header">
      <h1 className="title">Toby's Tips</h1>
    </header>
    <style jsx>{`
      .header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        background-color: ${colors.cinnabar};
        box-shadow: 0 2px 10px ${colors.limedSpruce};
        font-family: 'Gamja Flower', sans-serif;
        color: ${colors.alabaster};
        font-size: 65px;
        font-weight: bold;
        letter-spacing: 5px;
      }
      @media (max-width: ${sizes.mobileMax}) {
        .header {
          letter-spacing: initial;
          font-size: 40px;
          padding-left: 20px;
        }
      }
    `}</style>
  </>
);
