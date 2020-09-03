import Link from 'next/link';
import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';
import { colors } from './colors';
import MenuArrow from './MenuArrow';
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
    const onResize = debounce(
      () => window.innerWidth <= 639 && setOpen(false),
      500,
    );
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <>
      <aside className="sidebar-main">
        <button onClick={toggleDrawer} className="arrow-button">
          <MenuArrow isArrow={open} />
        </button>
        <div className="avatar-container">
          <img className="toby-avatar" src="/toby-avatar-small.jpeg" />
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
          padding: 15px;
          transition: width 0.5s ease-in-out;
          box-sizing: border-box;
        }
        .avatar-container {
          display: flex;
          height: 176px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .toby-avatar {
          width: ${open ? '150px' : '50px'};
          height: ${open ? '150px' : '50px'};
          border-radius: 99px;
          border: 3px solid ${colors.limedSpruce};
          background-color: 3px solid ${colors.limedSpruce};
          transition: height ${open ? 0.8 : 0.4}s ease-in-out,
            width ${open ? 0.8 : 0.4}s ease-in-out;
        }
        .arrow-button {
          position: absolute;
          top: ${open ? 0 : '20'}px;
          right: ${open ? -10 : 0}px;
          align-self: flex-end;
          border: none;
          outline: none;
          text-transform: none;
          background: transparent;
          transform: scaleX(-1) translateX(${open ? 0 : 4}px);
          transition: top 0.5s linear;
        }
        .routes {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 400px;
        }
        .route-icon {
          padding: ${open ? '0 20px 0 0' : '0 5px'};
        }
        .title-text {
          position: ${open ? 'relative' : 'absolute'};
          opacity: ${open ? '1' : '0'};
          font-size: ${open ? '1.5rem' : '0'};
          transition: opacity ${open ? 0.3 : 0}s ease-in-out ${open ? 0.5 : 0}s,
            font-size ${open ? 0.3 : 0}s ease-in-out ${open ? 0.5 : 0}s;
          white-space: nowrap;
        }
        @media (any-hover: hover) {
          .route-link:hover {
            transform: scale(${open ? '1.1' : '1.3'});
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
          transition: all 0.7s ease-in-out;
        }
      `}</style>
    </>
  );
}
