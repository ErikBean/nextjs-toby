import { colors } from '../src/colors';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/reset.min.css" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
          html,
          body,
          #__next {
            background-color: ${colors.alabaster};
            font-family: Open Sans, Helvetica, sans-serif;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
