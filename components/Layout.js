import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Amazonn</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazonn</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Amazonn</Typography>
      </footer>
    </div>
  );
};
