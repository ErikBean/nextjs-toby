import Link from 'next/link';
import { colors } from './colors';
import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';

const routes = [
  { route: '/', title: 'About Me', icon: '💁' },
  { route: '/food', title: 'Food', icon: '🥡' },
  { route: '/treats', title: 'Treats', icon: '🍖' },
  { route: '/training', title: 'Training', icon: '🐾' },
  { route: '/toys', title: 'Toys', icon: '🎱' },
  { route: '/crates', title: 'Crates', icon: '📥' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen(!open);
  useEffect(() => {
    const onResize = debounce(() => setOpen(window.innerWidth >= 800), 500);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <>
      <aside className="sidebar-main">
        <img
          className="toby-avatar"
          src="/toby-avatar-small.jpeg"
          onClick={toggleDrawer}
        />
        <nav className="routes">
          {routes.map(({ route, title, icon }) => (
            <Link href={route} key={route}>
              <a className="route-link">
                <span className="route-icon">{icon}</span>
                {open && <span className="title-text">{title}</span>}
              </a>
            </Link>
          ))}
        </nav>
      </aside>

      <style jsx>{`
        .sidebar-main {
          position: relative;
          display: flex;
          flex-direction: column;
          background-color: ${colors.calico};
          box-shadow: 0 4px 8px ${colors.limedSpruce};
          z-index: 2;
          width: ${open ? '200px' : '70px'};
          transition: width 0.5s ease-in;
        }
        .toby-avatar {
          width: ${open ? '100px' : '50px'};
          height: ${open ? '100px' : '50px'};
          border-radius: 99px;
          margin: ${open ? '20px 0' : '90px 0 5px 0'};
          align-self: center;
          border: 3px solid ${colors.limedSpruce};
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
          .toby-avatar:hover {
            box-shadow: 0 0 12px 8px #ffff0057;
          }
        }
        .route-link {
          transition: transform 0.1s ease-in;
          flex-grow: 1;
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
