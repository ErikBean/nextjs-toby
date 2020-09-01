import PageTitle from '../src/PageTitle';
export default function About() {
  return (
    <>
      <PageTitle title="About Me" />
      <p className="bio">
        I am a white golden retriever, and a Guide Dogs for America flunky. I
        like to pull on the leash! My best friends are Cisco, Natalia, and
        Kirsten. They pick up my poop !
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
