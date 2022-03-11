import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
import { useContext } from 'react';
import Cookies from 'js-cookie';

import { useStyles } from './../utils/styles';
import { Store } from './../context/store';

/**
 * It creates a layout for our pages
 * @returns The Layout component is returning a div element with a container element inside of it. The
 * container element is the parent element of the children elements.
 */
export const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  /* Creating a theme for our application. We are using the `createTheme` function from
  `@material-ui/core` to create a theme. The `createTheme` function is a function that takes a theme
  object as a parameter and returns a new theme object. The theme object is an object that contains
  the typography, palette and other properties that are used to style our application. */
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();

  /**
   *If the dark mode cookie is set to ON, then set the dark mode state to ON. 
   * Otherwise, set the dark mode state to OFF.*
   */
  function darkModeHandler() {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  }
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazonn` : 'Next Amazon'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Amazonn</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={darkModeHandler}></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Amazonn</Typography>
      </footer>
    </div>
  );
};
