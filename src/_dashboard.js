import Link from 'next/link';

export default ({ children }) => (
  <>
    <header className="header">Toby's Tips</header>
    <div className="sidebar-main">
      <sidebar className="sidebar">
        <Link href="/">About Me</Link>
        <Link href="/food">Food</Link>
        <Link href="/treats">Treats</Link>
        <Link href="/training">Training</Link>
        <Link href="/toys">Toys</Link>
        <Link href="/crates">Crates</Link>
      </sidebar>
      <main>{children}</main>
      <footer></footer>
    </div>
    <style jsx>{`
      .header {
        width: 100%;
        background-color: blue;
        color: white;
        padding: 20px;
        font-family: Open Sans, Helvetica, sans-serif;
      }
      .sidebar-main {
        display: flex;
      }
      .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    `}</style>
    <style jsx global>{``}</style>
  </>
);
