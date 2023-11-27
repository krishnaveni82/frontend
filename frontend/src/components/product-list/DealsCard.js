import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  productImage:{
    height: '15rem',
    width: '15rem', 
},
}));

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for Product 5',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for Product 6',
  },
];

export default function DealsCard({product, variant}) {
   const classes = useStyles();

  return (
    <div className={classes.root}>
      
      {/* {variant.images.map(image =>(
                <Grid item> <img src={"http://localhost:1337" + image.url } alt={image.url} 
                className={classes.productImage}/>
                </Grid> 
                    ))} */}
        
        {variant.images.map((image) => (
                <Grid item> 
                
                <img src={process.env.GATSBY_STRAPI_URL + image.url } alt={image.url} 
                className={classes.productImage}/>

                </Grid> 
          // <Grid item xs={12} md={4} key={product.id}>
          //   <Card className={classes.card}>
          //     <CardHeader
          //       avatar={
          //         <Avatar aria-label="product" className={classes.avatar}>
          //           Home
          //         </Avatar>
          //       }
          //       title={product.title}
          //       subheader={`Product ID: ${product.id}`}
          //     />
          //     <CardContent>
          //       <Typography variant="body2" color="textSecondary" component="p">
          //         {product.description}
          //       </Typography>
          //     </CardContent>
          //   </Card>
          // </Grid>
        ))}
      
    </div>
  );
}
