import { colors } from '../src/colors';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          html,
          body {
            background-color: ${colors.alabaster};
            font-family: Open Sans, Helvetica, sans-serif;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
