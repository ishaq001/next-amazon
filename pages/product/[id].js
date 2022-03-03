import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components';
import NextLink from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  Card,
  Button,
} from '@material-ui/core';

import { useStyles } from '../../utils/styles';
import data from '../../dummy-data/prodects-data.json';
import { theme } from './../../utils/themeProvider';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();

  const { id } = router.query;
  console.log('id', id, data);
  const product = data.find((product) => product.id === +id);
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout
        description={product.description}
        title={product.title.slice(0, 10)}
      >
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>Back to Products</Link>
          </NextLink>
        </div>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.id}
              width={640}
              height={640}
              layout="responsive"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography component="div">Name: {product.title}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Rating: {product.rating}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Description: {product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{product.price}$</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography fontWe>Status</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        {product.numInStock > 0 ? 'In Stock' : 'Unavailable'}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth color="primary" variant="contained">
                    Add to cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}
