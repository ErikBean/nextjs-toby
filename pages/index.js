import { sizes } from '../src/sizes';
import { colors } from '../src/colors';
import hashCode from '../src/magicHash';
import PageTitle from '../src/PageTitle';
import Jumper from '../src/Jumper';
import { useState } from 'react';

const facts = [
  'I am a white golden retriever, and a Guide Dogs for America flunky.',
  'I like to pull on the leash!',
  'My best friends are Cisco, Natalia, and Kirsten. They pick up my poop!',
];

export default function About() {
  const [jumperShown, setJumperShown] = useState(false);
  return (
    <>
      <PageTitle title="About Me" />
      <div className="container">
        <img
          src="/toby-car.jpg"
          className="toby-car"
          onLoad={() => setJumperShown(true)}
        />
        <div className="jumper-box">
          {jumperShown && <Jumper text="THAT'S ME!" />}
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
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .container {
          display: flex;
          justify-content: space-between;
          position: relative;
        }
        .toby-car {
          width: 100%;
          background: ${colors.santasGrey};
          animation: fadeIn ease 2s;
        }
        .jumper-box {
          position: absolute;
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
        @media (max-width: ${sizes.mobileMax}) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
