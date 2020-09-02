import { colors } from './colors';

export default ({ isArrow = false }) => {
  return (
    <>
      <div className={`bt-menu-trigger ${isArrow ? 'bt-menu-open' : ''}`}>
        <span></span>
      </div>
      <style jsx>{`
        .bt-menu-trigger {
          font-size: 30px;
          position: relative;
          display: inline-block;
          width: 2em;
          height: 2em;
          cursor: pointer;
          transform: scale(${isArrow ? 0.5 : 1});
          transition: transform 0.5s;
        }

        .bt-menu-trigger span {
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 100%;
          height: 0.2em;
          margin-top: -0.1em;
          background-color: ${colors.limedSpruce};
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-transition: background-color 0.3s;
          transition: background-color 0.3s;
        }

        .bt-menu-trigger span:after,
        .bt-menu-trigger span:before {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${colors.limedSpruce};
          content: '';
          -webkit-transition: -webkit-transform 0.3s;
          transition: transform 0.3s;
        }

        .bt-menu-trigger span:before {
          -webkit-transform: translateY(-0.5em);
          transform: translateY(-0.5em);
        }

        .bt-menu-trigger span:after {
          -webkit-transform: translateY(0.5em);
          transform: translateY(0.5em);
        }

        .bt-menu-trigger.bt-menu-open span:before {
          -webkit-transform: translateY(-0.36em) translateX(0.65em)
            rotate(45deg) scaleX(0.6);
          transform: translateY(-0.35em) translateX(0.65em) rotate(45deg)
            scaleX(0.6);
        }

        .bt-menu-trigger.bt-menu-open span:after {
          -webkit-transform: translateY(0.36em) translateX(0.65em)
            rotate(-45deg) scaleX(0.6);
          transform: translateY(0.35em) translateX(0.65em) rotate(-45deg)
            scaleX(0.6);
        }
      `}</style>
    </>
  );
};
