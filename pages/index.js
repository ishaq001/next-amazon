import NextLink from 'next/link';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import { Layout } from '../components';
import { database } from './../utils/db';
import { Product } from '../models/Product';

/**
 * It renders a list of products.
 * @returns The return is a layout with a grid of products.
 */
export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={4}>
          {products?.map((product) => {
            return (
              <Grid item md={4} key={product.id}>
                <Card>
                  <NextLink href={`/product/${product.id}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        //height={'330vh'}
                        component="img"
                        image={product.image}
                        title={product.title}
                      ></CardMedia>
                      <CardContent>
                        <Typography>
                          {product.title.slice(0, 20) + '...'}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>{`${product.price} $`}</Typography>
                    <Button size="small" color="primary" variant="contained">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

/**
 * Get all products from the database and return them as props
 * @returns The props object is being returned.
 */
export async function getServerSideProps() {
  await database.connect();
  const products = await Product.find({}).lean();
  console.log('products', products);
  await database.disconnect();
  return {
    props: {
      products: products?.map(database.convertDocToObj),
    },
  };
}
