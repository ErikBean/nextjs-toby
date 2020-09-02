import Sidebar from './Sidebar';
import Header from './Header';
import { useEffect, useState } from 'react';
const getHeaderHeight = () => {
  if(typeof window === 'undefined') return;
  const {offsetHeight: topHeaderHeight = 0} =  document.getElementById('top-header') || {};
  const {offsetHeight: pageHeaderHeight = 0} =  document.getElementById('page-header') || {};
  return topHeaderHeight + pageHeaderHeight;
}
export default ({ children }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(getHeaderHeight())
  }, [])
  return (
    <>
      <div className="main-container">
        <Sidebar headerHeight={height}/>
        <div className="main-content">
          <Header />
          <main className="main">{children}</main>
        </div>
        <footer></footer>
      </div>
      <style jsx>{`
        .main-container {
          display: flex;
          height: 100%;
        }
        .main-content {
          flex-grow: 1;
        }
        .main {
          height: 100%;
        }
      `}</style>
    </>
  )
};
