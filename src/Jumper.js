import { colors } from '../src/colors';

export default function Jumper({
  ball = false,
  image = '',
  inMotion = true,
}) {
  return (
    <>
      <div className="stage">
        <div className={`box ${inMotion ? 'bounce-7' : 'glow'}`}></div>
      </div>
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 30px 30px ${colors.cinnabar};
          }
          50% {
            box-shadow: none;
          }
          100% {
            box-shadow: 0 0 30px 30px ${colors.cinnabar};
          }
        }
        @keyframes bounce-7 {
          0% {
            transform: scale(1, 1) translateY(0);
          }
          10% {
            transform: scale(1.1, 0.9) translateY(0);
          }
          30% {
            transform: scale(0.9, 1.1) translateY(-100px);
          }
          50% {
            transform: scale(1.05, 0.95) translateY(0);
          }
          57% {
            transform: scale(1, 1) translateY(-7px);
          }
          64% {
            transform: scale(1, 1) translateY(0);
          }
          100% {
            transform: scale(1, 1) translateY(0);
          }
        }
        .stage {
          display: flex;
          height: 100%;
          width: 100%;
          transform: scale(0.5);
        }
        .box {
          align-self: flex-end;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          margin: 0 auto 0 auto;
          transform-origin: bottom;
          height: 20%;
          width: 15%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-radius: ${ball ? 999 : 0}px;
          background-image: ${image ? `url(${image})` : 'none'};
          background-size: cover;
        }
        .bounce-7 {
          font-size: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation-name: bounce-7;
          animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
        }
        .glow {
          animation-name: glow;
          animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
        }
        .text {
          font-size: 20px;
        }
      `}</style>
    </>
  );
}
