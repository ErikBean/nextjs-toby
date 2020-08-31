import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="header-top">
        <div className="links-box">
          <Link href="/">Home</Link>
          <Link href="/food">Food</Link>
          <Link href="/treats">Treats</Link>
          <Link href="/training">Training</Link>
          <Link href="/toys">Toys</Link>
          <Link href="/crates">Crates</Link>
        </div>
      </header>
      <style jsx>{`
        .header-top {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .links-box {
          display: flex;
          width: 100%;
          max-width: 800px;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
