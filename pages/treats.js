import PageTitle from '../src/PageTitle';
export default function Treats() {
  return (
    <>
      <PageTitle title="My Favorite Treats" />
      <p className="bio">
        Here are some treats I like: dried tracheas and penises, yummy!
      </p>
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
