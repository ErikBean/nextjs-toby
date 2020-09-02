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

export default function Sidebar({ headerHeight }) {
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
        <div className="avatar-container">
          <img
            className="toby-avatar"
            src="/toby-avatar-small.jpeg"
            onClick={toggleDrawer}
          />
        </div>
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
          flex-direction: column;
          background-color: ${colors.calico};
          box-shadow: 0 4px 8px ${colors.limedSpruce};
          z-index: 2;
          width: ${open ? '280px' : '80px'};
          transition: width 0.5s ease-in-out;
        }
        .avatar-container {
          display: flex;
          height: ${headerHeight}px;
          width: 100%;
          flex-direction: column;
          justify-content: center;

        }
        .toby-avatar {
          width: ${open ? '100px' : '50px'};
          height: ${open ? '100px' : '50px'};
          border-radius: 99px;
          align-self: center;
          border: 3px solid ${colors.limedSpruce};
          transition: height 0.5s ease-in-out, width 0.5s ease-in-out;
        }
        .routes {
          display: flex;
          margin: 20px;
          flex-direction: column;
          justify-content: space-between;
          height: 400px;
        }
        .route-icon {
          padding: ${open ? '0 20px 0 0' : '0'};
        }
        .title-text {
          position: ${open ? 'relative' : 'absolute'};
          opacity: ${open ? '1' : '0'};
          font-size: ${open ? '1.5rem' : '0'};
          transition: opacity 0.2s linear, font-size 0.2s linear;
          white-space: nowrap;
        }
        @media (any-hover: hover) {
          .route-link:hover {
            transform: scale(${open? '1.1' : '1.3'});
          } 
        }
        .route-link {
          line-height: 1.5;
          transition: transform 0.1s ease-in-out;
          transition-origin: top left;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: ${colors.limedSpruce};
          overflow-x: ${open ? 'visible' : 'hidden'};
          text-decoration: none;
          font-size: ${open ? '1.5rem' : '2.5rem'};
          box-sizing: border-box;
          transition: font-size 0.7s ease-in-out;
        }
      `}</style>
    </>
  );
}
