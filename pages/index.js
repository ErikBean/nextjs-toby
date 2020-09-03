import { sizes } from '../src/sizes';
import { colors } from '../src/colors';
import hashCode from '../src/magicHash';
import PageTitle from '../src/PageTitle';
import Jumper from '../src/Jumper';
import { useState, useEffect, useRef } from 'react';

const facts = [
  'I am a white golden retriever, and a Guide Dogs for America flunky.',
  'I like to pull on the leash!',
  'My best friends are Cisco, Natalia, and Kirsten. They pick up my poop!',
];

export default function About() {
  const [jumperClicked, setJumperClicked] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const img = useRef();
  const toggleJumper = () => setJumperClicked(!jumperClicked);
  useEffect(() => {
    if (img.current.complete) {
      setImgLoaded(true);
    }
  }, [img]);
  return (
    <>
      <PageTitle title="About Me" />
      <div className="container" onClick={toggleJumper}>
        <div className="img-box">
          <img src="/toby-car.jpg" className="toby-car" />
          <img ref={img} src="/sunglasses.png" className="sunglasses" />
          <div className="jumper-box">
            <Jumper
              ball
              image="/tennis-ball.webp"
              inMotion={jumperClicked}
              glow
            />
          </div>
        </div>
        <div className="bio">
          <ul className="list">
            {facts.map((fact) => (
              <li className="list-item" key={hashCode(fact)}>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
        }
        .img-box {
          position: relative;
        }
        .toby-car {
          opacity: ${imgLoaded ? 1 : 0};
          width: 100%;
          width: 600px;
          background: ${colors.santasGrey};
        }
        .sunglasses {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.7;
          transform: ${jumperClicked
            ? 'rotate(-42deg) scale(0.37) translate(108px, 434px)'
            : 'translateY(-1000px)'};
          transition: all 2s linear;
        }
        .jumper-box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(-30%);
        }
        .bio {
          font-size: 24px;
          padding: 20px;
          font-family: Times, serif;
          min-width: 250px;
        }
        .list {
          list-style-type: '🦴 ';
          margin-left: 40px;
        }

        @media (any-hover: hover) {
          .list-item:hover {
            list-style-type: '🐶 ';
            list-style-position: outside;
          }
        }
        @media (max-width: ${sizes.tabletMax}) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
