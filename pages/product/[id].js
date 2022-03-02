import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid, Link, Typography, List, ListItem } from '@material-ui/core';

import { useStyles } from '../../utils/styles';
import data from '../../dummy-data/prodects-data.json';

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
    <Layout title={product.title.slice(0, 10)}>
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
              <Typography>Name: {product.title}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Rating: {product.rating}</Typography>
            </ListItem>
            <ListItem>
              <Typography>In Stock: {product.numInStock}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
