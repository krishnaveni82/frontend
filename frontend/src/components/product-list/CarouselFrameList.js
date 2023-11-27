import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { UserContext, FeedbackContext } from '../../contexts';




const useStyles = makeStyles (theme => ({
  root: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      alignItems:'center',
    },
    paper: {
      //padding: theme.spacing(2),
      textAlign: 'center',
      //color: theme.palette.text.secondary,
    },
  frame:{
      // backgroundImage: `url(${frame})`,
      maxWidth: '25rem',
      maxHeight:'20rem',
      backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      border: "0.100rem solid grey",
      backgroundColor: theme.palette.background.paper,
  },
  info: {
        //  backgroundColor: theme.palette.primary.main,
          height: '50%',
          width: '65%',
          
  },
  productImage:{
         height: '7rem',
         width: '7rem', 
  },  
  iconWrapper: {
    margin: "0.5rem 1rem",
  },
  listBorder:{
    marginTop:"1rem",
  },
  // icon: {
  //   height: ({ size }) => `${size || 2}rem`,
  //   width: ({ size }) => `${size || 2}rem`,
  // },
  iconButton:{
    height: ({ size }) => `${size || 2}rem`,
    width: ({ size }) => `${size || 2}rem`,
    //backgroundColor: theme.palette.primary.main,
    padding:0,
    "&:hover": {
       backgroundColor:"transparent",
    },
  },
  card: {
    display: "flex",
    marginBottom: theme.spacing(2),
    width: '14rem',
    height: '14rem',
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: 80,
    height: 80,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  
     
}))
export default function CarouselFrameList({ product, variant, productId }) {
  const classes = useStyles();

  const [selectedProduct, setSelectedProduct] = useState(0);
  const { user, dispatchUser } = useContext(UserContext);
  const { dispatchFeedback } = useContext(FeedbackContext);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const strFullProductID = product.node.id.split('_');

  const strproductID = strFullProductID[1];

  // Set isClient to true when component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={classes.root}>
      {isClient && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="flex-end"
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title={product.node.name}
              style={{ width: '40%', height: '25%' }}
            >
              {variant.images.map((image) => (
                <img
                  src={process.env.GATSBY_STRAPI_URL + image.url}
                  alt={product.node.name}
                  className={classes.productImage}
                />
              ))}
            </CardMedia>

            <CardContent>
              <Typography variant="productName" noWrap="yes">
                {product.node.name} 1
              </Typography>

              <Typography variant="body0" color="#000">
                Price: {`$${variant.price}`}
              </Typography>

              <Typography variant="body0" color="#000">
                Deal Price: {`$${variant.dealPrice}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </div>
  );
}
