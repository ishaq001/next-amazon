import '../styles/globals.css';
import { useEffect } from 'react';
import { StoreProvider } from '../context/store';

function MyApp({ Component, pageProps }) {
 /* This is a React Hook. It is used to execute a side effect at the beginning or at the end of the
 lifecycle of a component. In this case, it is used to remove the `#jss-server-side` element from
 the DOM. */
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    console.log(jssStyles);
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
  /* A React Hook that provides the store to the component tree. */
  <StoreProvider>
    <Component {...pageProps} />;
  </StoreProvider>
  );
}

export default MyApp;
