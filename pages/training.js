import PageTitle from '../src/PageTitle';
export default function Training() {
  return (
    <>
      <PageTitle title="Training Me" />
      <p className="bio">Here are some tips to help me learn more betterer</p>
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
