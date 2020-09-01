import PageTitle from '../src/PageTitle';
export default function Toys() {
  return (
    <>
      <PageTitle title="Toys, Fun, Play!" />
      <p className="bio">
        I like squeaky toys because they imitate the death cries of my prey!
      </p>
      <style jsx>{`
        .bio {
          font-size: 18px;
          padding: 20px;
          font-family: Times, serif;
        }
      `}</style>
    </>
  );
}
