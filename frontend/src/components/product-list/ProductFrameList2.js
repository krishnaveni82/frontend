// import * as React from "react"
// // import { Link } from "gatsby"
// // import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/ui/layout"
// import Seo from "../components/ui/seo"




// const ContactPage = () => (
// <Layout>
//     <p>Contact Page</p>
//   </Layout>
// )


// export default ContactPage

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  productImage:{
    height: '15 rem',
    width: '15rem', 
    border: "0.100rem solid black",

},
}));

export default function ProductFrameList({product, variant}) {
  const classes = useStyles();

  return (
    
     <Card className={classes.root}>
        {variant.images.map(image =>(
         <img src={process.env.GATSBY_STRAPI_URL + image.url } alt={image.url} 
        className={classes.productImage}/>
            ))} 

      <CardHeader
        // avatar={
        //   <Avatar aria-label="deal" className={classes.avatar}>
        //     D
        //   </Avatar>
          
        // }
                
         title={product.node.name}
        subheader="" 
       /> 
       <CardContent>
        <Typography  color="textSecondary" component="p">
        <h2>{product.node.name}</h2>
          <p>
              {product.node.description}  1
          </p>
          <p>
            <strong>Price:</strong>  {`$${variant.price}`}
            
            <strong>Deal Price:</strong>{`$${variant.dealPrice}`}
          </p>
        </Typography>
      </CardContent> 
    </Card>
  );
}