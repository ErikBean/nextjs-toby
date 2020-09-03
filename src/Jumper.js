export default ({ text }) => (
  <>
    <div className="stage">
      <div className="box bounce-7">
        <div>{text}</div>
      </div>
    </div>
    <style jsx>{`
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
        height: 330px;
        width: 100%;
      }
      .box {
        text-align: center;
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #f44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
      }
      .bounce-7 {
        font-size: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
      }
    `}</style>
  </>
);
