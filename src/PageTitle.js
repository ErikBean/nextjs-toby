import { colors } from './colors';
export default function PageTitle({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <style jsx>{`
        .title {
          color: ${colors.alabaster};
          padding: 20px 0 20px 20px;
          background-color: #2b78e4;
          font-size: 36px;
        }
      `}</style>
    </>
  );
}
