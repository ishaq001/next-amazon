import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Layout } from '../components';
import NextLink from 'next/link';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Data from '../dummy-data/prodects-data.json';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={4}>
          {Data.map((product) => {
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
                    <Button size="small" color="primary" variant="outlined">
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
