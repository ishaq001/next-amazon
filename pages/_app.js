import '../styles/globals.css';
import { useEffect } from 'react';
import { StoreProvider } from '../context/store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    console.log(jssStyles);
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
  <StoreProvider>
    <Component {...pageProps} />;
  </StoreProvider>
  );
}

export default MyApp;
