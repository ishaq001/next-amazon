import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import { useStyles } from './../utils/styles';
import NextLink from 'next/link';

export const Layout = ({title, description, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{ title ? `${title} - Next Amazonn` : 'Next Amazon'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazonn</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Amazonn</Typography>
      </footer>
    </div>
  );
};
