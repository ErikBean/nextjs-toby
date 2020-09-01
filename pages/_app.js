// import App from 'next/app'

import Dashboard from '../src/_dashboard';

function MyApp({ Component, pageProps }) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}

export default MyApp;
