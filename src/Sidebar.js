import Link from 'next/link';
import { colors } from '../src/colors';

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
                {title}
              </a>
            </Link>
          ))}
        </nav>
      </aside>

      <style jsx>{`
        .sidebar-main {
          display: flex;
          width: 200px;
          flex-direction: column;
          background-color: ${colors.calico};
        }
        .toby-avatar {
          width: 100px;
          height: 100px;
          border-radius: 15px;
          margin: 20px 0 20px 20px;
        }
        .routes {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 350px;
        }
        .route-icon {
          padding: 5px 0;
        }
        .route-link {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: ${colors.limedSpruce};
          text-decoration: none;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
