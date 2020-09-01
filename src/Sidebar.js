import Link from 'next/link';
import { colors } from './colors';

const routes = [
  { route: '/', title: 'About Me', icon: '💁' },
  { route: '/food', title: 'Food', icon: '🥡' },
  { route: '/treats', title: 'Treats', icon: '🍖' },
  { route: '/training', title: 'Training', icon: '🐾' },
  { route: '/toys', title: 'Toys', icon: '🎱' },
  { route: '/crates', title: 'Crates', icon: '📥' },
];

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar-main">
        <img className="toby-avatar" src="/toby-avatar-small.jpeg" />
        <nav className="routes">
          {routes.map(({ route, title, icon }) => (
            <Link href={route} key={route}>
              <a className="route-link">
                <span className="route-icon">{icon}</span>
                <span className="title-text">{title}</span>
              </a>
            </Link>
          ))}
        </nav>
      </aside>

      <style jsx>{`
        .sidebar-main {
          position: relative;
          display: flex;
          width: 200px;
          flex-direction: column;
          background-color: ${colors.calico};
          box-shadow: 0 4px 8px ${colors.limedSpruce};
          z-index: 2;
        }
        .toby-avatar {
          width: 100px;
          height: 100px;
          border-radius: 99px;
          margin: 20px 0;
          align-self: center;
          border: 3px solid ${colors.limedSpruce};
        }
        .toby-avatar:hover {
          box-shadow: 0 0 12px 8px #ffff0057;
        }
        .routes {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 350px;
        }
        .route-icon {
          padding: 0 20px;
        }
        @media (any-hover: hover) {
          .route-link:hover {
            transform: scale(1.1);
          }
          .route-link:hover .title-text {
            color: white;
            text-shadow: 0px 0px 3px ${colors.limedSpruce};
          }
        }
        .route-link {
          transition: transform 0.1s ease-in;
          flex-grow: 1;
          padding-right: 20px;
          display: flex;
          align-items: center;
          color: ${colors.limedSpruce};
          text-decoration: none;
          font-size: 1.5rem;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
