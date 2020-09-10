import PageTitle from '../src/PageTitle';
export default function Crates() {
  return (
    <>
      <PageTitle title="Crates" />
      <p className="bio">Checkout my crib, yo!</p>

      <style jsx>{`
        .bio {
          font-size: 24px;
          padding: 20px;
          font-family: Times, serif;
        }
      `}</style>
    </>
  );
}
