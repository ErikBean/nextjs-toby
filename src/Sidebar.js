import Link from 'next/link';
import { colors } from '../src/colors';

const routes = [
  { route: '/', title: 'About Me' },
  { route: '/food', title: 'Food' },
  { route: '/treats', title: 'Treats' },
  { route: '/training', title: 'Training' },
  { route: '/toys', title: 'Toys' },
  { route: '/crates', title: 'Crates' },
];

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar-main">
        <nav className="routes">
          {routes.map(({ route, title }) => (
            <Link href={route} key={route}>
              <a className="sidebar-link">{title}</a>
            </Link>
          ))}
        </nav>
      </aside>

      <style jsx>{`
        .sidebar-main {
          display: flex;
          flex-direction: column;
          background-color: ${colors.secondary};
        }
        .routes {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 200px;
        }
        .sidebar-link {
        }
      `}</style>
    </>
  );
}
