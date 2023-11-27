import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Carousel from 'react-elastic-carousel';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import useMediaQuery from "@material-ui/core/useMediaQuery"

import promoAdornment from "../../images/promo-adornment.svg"
import explore from "../../images/explore.svg"
import { Card, Paper } from "react-bootstrap"
import { node } from "prop-types"
import  CardMedia from '@material-ui/core';


const breakpoints =[
  { width:1, itemsToShow:1},
  { width:500, itemsToShow:2},
  { width:768, itemsToShow:3},
  { width:1200, itemsToShow:4},

];


const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "35rem",
    padding: "30rem 10rem 10rem 10rem",
    [theme.breakpoints.down("lg")]: {
      padding: "20rem 2rem 2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "hidden",
    },
  },
  productName: {
    color: "black",
    fontWeight: 'bold',
    nowrap:'no',
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  carouselImage: {
    height: "5rem",
    width: "5rem",
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      height: "5rem",
      width: "10rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
      width: "10rem",
    },
  },
  carouselContainer: {
    marginLeft: "0rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      height: "30rem",
    },
  },
  space: {
    margin: "0 0rem 0rem 0rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 rem 0rem 0rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 10rem 10rem 10rem",
    },
  },
  explore: {
    textTransform: "none",
    marginRight: "2rem",
  },
  descriptionContainer: {
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  card: {
    width: "45rem",
    height: 150,
     display: 'flex',
    // alignItems: 'center',
     justifyContent: 'center',
      backgroundColor: 'grey',
     background: 'theme.palette.grey[200]',
     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
     [theme.breakpoints.down("sm")]: {
      width: "35rem",
      height: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: "25rem",
      height: 150,
    },
  },
  carouselCard: {
    width: '45rem',
    height: '150px',
    margin: '1 auto',
    border: '1.0px solid #ccc',
    // background: '#ccc',
    display: 'flex',
    alignItems: 'center',
    marginRight: "20px", /* Adjust the value as needed */
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },
  productName: {
    color: '#000',
  },
  price: {
    marginRight: '1rem',
  },
  dealPrice: {
    textDecoration: 'line-through',
    color: '#999',
  },
  priceStrike: {
    textDecoration: 'line-through',
    color: '#999',
  },
  productImage:{
    height: '15rem',
    width: '55rem', 
}, 
icon: {
      height: ({ size }) => `${size || 2}rem`,
      width: ({ size }) => `${size || 2}rem`,
    },
  twoLineCell: {
      color: '#000',
      fontWeight: 'bold',
      fontSize:"0.8rem",
      maxHeight: '4.8rem', // Approximately 2 lines of text (assuming line-height is 1.6)
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      nowrap:'no',
    },
}
))

export default function PromotionalProducts(variant) {
  const classes = useStyles()
  const [selectedSlide, setSelectedSlide] = useState(0)

  const [isClient, setIsClient] = useState(false); // Track if component is on the client side


  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  // Use a useEffect to set isClient when component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = useStaticQuery(graphql`
  query GetPromo {
    allStrapiProduct(filter: { promo: { in: true }, status: { eq: true } }) {
      edges {
        node {
          name
          strapiId
          description
          promo
          merchantLink
          merchantName
          shipping
          promoImage {
            id
            url
          }
          createdAt
          variants {
            dealPrice
            price
          }
        }
      }
    }
  }
  `)

  return (
    <Grid>
    <Grid item xs={12} style={{ width: "100%", margin: 0 }}>
      {isClient ? (
        <Carousel breakPoints={breakpoints} className={[classes.space, classes.anotherClassName].join(" ")}>
          {data.allStrapiProduct.edges.map(({ node }, i) => {
            // Ensure all client-side logic is inside this block
            const dealPrice = node.variants[0].dealPrice;
            const regularPrice = node.variants[0].price;
            const percentageOffer = ((regularPrice - dealPrice) / regularPrice) * 100;

            return (
              <Card key={node.id} className={classes.carouselCard}>
                <a href={node.merchantLink}>
                  <Typography variant="subtitle1" className={classes.twoLineCell}>
                    <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                      {node.name}
                    </span>  
                  </Typography>
                  
                  <span style={{ fontWeight: 'bold', color: 'black', fontSize: '0.75rem' }}>
                    {node.merchantName}
                  </span>

                  {node.promoImage && node.promoImage[0] && node.promoImage[0].url && (
                    <img src={node.promoImage[0].url} className={classes.carouselImage} objectFit="contain" alt={node.name} />
                  )}

                  <Typography variant="subtitle1" component="h3" className={classes.productName} align="left">
                    <span style={{ fontWeight: 'bold', color: 'black', fontSize: '0.75rem' }}>
                      ${node.variants[0].dealPrice}&nbsp;&nbsp;&nbsp;
                    </span> 
                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.75rem' }}>
                      ${node.variants[0].price}
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={{ fontWeight: 'bold', color: 'green', fontSize: '1rem' }}>
                      {percentageOffer.toFixed(2)}% Offer
                    </span>
                  </Typography>
                </a>
              </Card>
            );
          })}
        </Carousel>
      ) : null }
    </Grid>
  </Grid>
  

  );

 
 
  
//   return (


//     <Grid>
//       <Grid item xs={12}  style={{ width: '100%', margin: 0 }}  >

//        {/* <Carousel breakPoints={breakpoints} className={classes.carouselContainer} {classes.space}> */}
//         <Carousel  breakPoints={breakpoints}  className={[ classes.space, classes.anotherClassName].join(" ")}>

//       {data.allStrapiProduct.edges.map(({ node },i) => (

        
//            <Card key={node.id} className={classes.carouselCard}>
//             <a href={node.merchantLink}>
// {/* 
//            <table style={{ border: "0px solid black", width:"100%" }} border="0" >

//                 <tr align="justify" >
//                   <td className={classes.twoLineCell} >  {node.name} </td>
//                 </tr>   

//                 <tr>
//                   <td alignContent="center">
//                       <img src={process.env.GATSBY_STRAPI_URL + node.promoImage[0].url} className={classes.catalogImage}  /> 
//                   </td>
//                 </tr> 


//                 <tr>
//                   <td className={classes.productName}>
//                       {`$${node.variants[0].dealPrice}`} 
//                       &nbsp;&nbsp;
//                       <span style={{ textDecoration: 'line-through', color: '#000' }}>
//                           {`$${node.variants[0].price}`}
//                       </span>
//                   </td>
//                 </tr>
//               </table> */}


//                   <Typography variant="subtitle1"  className={[classes.twoLineCell]} >
//                       {node.name} 
//                    </Typography> 


                       
//                       <img src={process.env.GATSBY_STRAPI_URL + node.promoImage[0].url} className={classes.carouselImage}  objectFit="contain" alt={node.name}  /> 

//                       const percentageOffer = ((${node.variants[0].price} - ${node.variants[0].dealPrice}) / regularPrice) * 100;  

//                   <Typography variant="subtitle1" component="h3"  className={[classes.productName]} >   
//                   ${node.variants[0].dealPrice} &nbsp; &nbsp;&nbsp;
//                   <span style={{ textDecoration: 'line-through', color: '#999' }}>
//                   ${node.variants[0].price}
//                   </span>
//                   <p>
//                       {percentageOffer.toFixed(2)}%
//                   </p>
//                   </Typography>
                  
                  


//                   {/* <p>{node.variants[0].images.url}</p> */}
//                   {/* <CardMedia className={classes.cardMedia} image={process.env.GATSBY_STRAPI_URL + node.promoImage[0].url} title={node.name} /> */}
                  

//                     </a>
//           </Card>
          
          
//         ))}    

//         </Carousel>
//       </Grid>
//     </Grid>

 

//   ) 
}
