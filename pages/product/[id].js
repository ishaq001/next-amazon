import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components';
import NextLink from 'next/link';
import Image from 'next/image';
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
import { data } from '../../dummy-data/prodects-data';
/**
 * It renders the product page.
 * @returns The `Layout` component is being returned.
 */
export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();

  const { id } = router.query;
  /* Checking if the product exists in the data array. If it doesn't exist, it will return a div with
  the text "Product not found." */
  const product = data.products.find((product) => product.id === +id);
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
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
              <Typography variant="h1" component="h1">
                {product.title}
              </Typography>
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
                <Button color="primary" variant="contained" fullWidth>
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
