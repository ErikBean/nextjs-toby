// import App from 'next/app'

import Dashboard from '../src/Dashboard';

function MyApp({ Component, pageProps }) {
  return (
    <Dashboard>
      <Component {...pageProps} />;
    </Dashboard>
  );
}

export default MyApp;
