
import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Carousel from 'react-elastic-carousel'




import clsx from "clsx"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"




import { Card, Paper } from "react-bootstrap"

import  CardMedia from '@material-ui/core/CardMedia';



import PromotionalProducts from "../home/PromotionalProducts"







const breakpoints =[
  { width:1, itemsToShow:1},
  { width:500, itemsToShow:2},
  { width:768, itemsToShow:3},
  { width:1200, itemsToShow:4},

];







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
      maxWidth: '40rem',
      maxHeight:'20rem',
      backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      border: "0.100rem solid grey",
      backgroundColor: theme.palette.background.paper,
  },
  info: {
        //  backgroundColor: theme.palette.primary.main,
          height: '70%',
          width: '70%',
          
  },
  productImage:{
         height: '15rem',
         width: '15rem', 
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
    avatar: {
      backgroundColor: 'tan',
    },
  },
  // card: {
  //   display: "flex",
  //   marginBottom: theme.spacing(2),
  //   width: '20rem',
  //   height: '25rem',
  // },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: "10rem",
    height: "16rem",
    display: 'flex',
    flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // background: theme.palette.grey[200],
  // boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down("sm")]: {
    width: "17rem",
    height: "20rem",
  },
  // padding: '1rem',
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    // padding: '1rem',
    //overflow: 'scroll',
    textOverflow: 'ellipsis',
    //whiteSpace: 'nowrap',
  },
  priceStrike: {
    textDecoration: 'line-through',
    color: '#000',
  },
   carouselImage: {
    height: "8rem",
    width: "8rem",
    borderRadius: 5,
    // [theme.breakpoints.down("sm")]: {
    //   height: "5rem",
    //   width: "10rem",
    // },
  },
  catalogImage: {
    height: "8rem",
    width: "8rem",
    borderRadius: 3,
    // [theme.breakpoints.down("sm")]: {
    //   height: "5rem",
    //   width: "10rem",
    // },
  },
  productName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize:"0.8rem",
  },
    price: {
    marginRight: '1rem',
    color: '#000',
    fontSize:"0.8rem",
    textDecoration: 'line-through',
  },
  dealPrice: {
    color: "black",
    fontSize:"0.8rem",
    color: '#000',
    //alignContent:"left",
  },
  shipping: {
    fontSize:"0.7rem",
    color: '#000',
  },
  merchantTitle:{
    fontSize:"0.9rem",
    color: '#000',
    alignContent: "right",
    fontWeight:"bold",
  },
  ShopLink: {
    color: "#fff", /* Change the text color to white to make it visible on the background */
    backgroundColor: "#000", /* Set the background color for the button */
    fontSize: "0.9rem",
    padding: "4px 8px", /* Add some padding to make it look like a button */
    borderRadius: "4px", /* Add rounded corners to the button */
    fontWeight: "bold",
    textDecoration: "none", /* Remove the default underline for links */
    display: "inline-block", /* Ensure the button takes the size of its content */
    verticalAlign:"top",
  },
  


  card: {
      width: "12rem",
      height: "23rem",
      display: 'flex',
      flexDirection: 'column',
      //alignItems: 'left',
      //justifyContent: 'space-evenly',
     //backgroundColor: 'grey',
     //background: 'theme.palette.grey[200]',
     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
     [theme.breakpoints.down("sm")]: {
      width: "17rem",
      height: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "17rem",
      height: "20rem",
    },
  },
  contentContainer: {
    padding: '1rem',
    overflow: 'visible',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
  },
  

  
  
     
}))





export default function HomeListOfProducts(variant) {
  const classes = useStyles()
  
  // Use useEffect to set the initial state on the client side
  useEffect(() => {
    setSelectedSlide(0);
  }, []);

  const [selectedSlide, setSelectedSlide] = useState(0);

  

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const data = useStaticQuery(graphql`
  query HomeListOfProducts {
    allStrapiProduct(filter: { status: { eq: true } }) {
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



<div className={classes.root}  style={{ width: '100%' }} alignItems="center" spacing={{ xs: 2, md: 3 }} >



{/* spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justify="flex-end" */}
<Grid container  spacing={1} > 


     

<table border="0" width="100%" >
                      <tr>
                
                          <td align="center">
                              {/* <Typography variant="body0" className="disclaimerLink" > We may get paid on qualifying purchases as commission from brands & deals promoted here. </Typography> */}
                              <Typography variant="body0" color="textSecondary"> We may get paid on qualifying purchases as commission from brands & deals promoted here. </Typography> 
                          </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>

                      <div>
                          {matchesMD ? (
                            // Content for mobile view
                            null
                          ) : (
                            // Content for desktop view
                            <PromotionalProducts  />
                          )}
                        </div> 


                      </td>
                    </tr>
                  {/* <Grid container direction="column"   alignItems='center'  style={{ minHeight: "10vh" }}> */}
                  {/* <Grid item xs={6}  container direction="row" classes={{root: classes.descriptionContainer}} justify="center" alignItems="center"  >   */}
               
                  {/* {content}   */}


                   {/* </Grid>  */}
                   {/* </Grid> */}
</table>



              

{data.allStrapiProduct.edges.map(({ node },i) => {
   const dealPrice = node.variants[0].dealPrice;
return(
<div className={classes.root}  alignItems="center" spacing={{ xs: 2, md: 3 }}   border="1">


<Card className={classes.card}  style={{ marginBottom: '10px' }}  >
    <CardMedia className={classes.media} title={node.name} >

    

  {/* <CardContent> */}
                {/* <Typography  className={classes.productName} style={{ textAlign: "left", marginBottom: "0.0rem" }}   >
                        {node.name}  
                </Typography> 

                <Typography   className={classes.price} style={{ textAlign: "left",marginBottom: "0.0rem" }}>    
                        Price: 
                        <span style={{ textDecoration: 'line-through', color: '#999' }}>
                        {`$${node.variants[0].price}`}
                        </span>
                </Typography>

                <Typography className={classes.dealPrice} style={{ textAlign: "left",marginBottom: "0.0rem" }} >
                              Deal Price: {`$${node.variants[0].dealPrice}`}
                </Typography>

                <Typography className={classes.shipping} style={{ textAlign: "left",marginBottom: "0.0rem" }} noWrap="yes" >
                              Shipping: {`${node.shipping}`}
                </Typography>

                <Typography className={classes.merchantTitle} style={{ textAlign: "left", marginBottom: "0.0rem" }} noWrap="yes" >
                              {`${node.merchantName}`}
                </Typography>

                <button onClick='#'  aria-label="Link to Product" style={{ textAlign: "left", marginBottom: "0.0rem" }} > Shope Now </button> */}



          

                {/* <Typography component="div"> */}
                  <table style={{ border: "0px solid black", width:"100%" }} border="0" >

                      
                      <tr align="justify" >
                        <td className={[classes.twoLineCell]}>  
                        {node.name} </td>
                      </tr>   

                     <tr>
                        <td alignContent="center">
                            {/* <img src={process.env.GATSBY_STRAPI_URL + node.promoImage[0].url} className={classes.catalogImage}  />  */}
                            
                            {/* <img src={node.promoImage[0]?.url} className={classes.catalogImage} alt={node.name} /> */}

                            {node.promoImage && node.promoImage[0] && node.promoImage[0].url && (
                              <img src={node.promoImage[0].url} className={classes.catalogImage} /> 
                            )}


                            
                            
                        </td>
                     </tr> 
                   

                     <tr>
                        <td className={classes.productName}>
                            {`$${node.variants[0].dealPrice}`} 
                            &nbsp;&nbsp;
                            <span style={{ textDecoration: 'line-through', color: '#000' }}>
                                {`$${node.variants[0].price}`}
                            </span>
                        </td>
                      </tr>

                 
                    
                      <tr>
                        <td className={classes.shipping}>Shipping: {`${node.shipping}`}</td>
                      </tr>

                      <tr>
                        <td className={classes.merchantTitle}>{`${node.merchantName}`}</td>
                      </tr>
                      
                      <tr>
                        <td align="center">
                          <a href={node.merchantLink} className={classes.ShopLink} > Shop Deals </a> 
                        </td>
                    </tr>



                  </table>
                {/* </Typography> */}

               
          


      {/* </CardContent>  */}

    </CardMedia>   
</Card> 

      

</div>
)


              })}


</Grid>






</div>

    
    
//     <Grid  >
//       <Grid item>

      
//         {/* <Carousel breakPoints={breakpoints} className={classes.carouselContainer} {classes.space}> */}
        

//       {data.allStrapiProduct.edges.map(({ node },i) => (

//       <Grid container alignItems="center" style={{ width: '80%', margin: 0 }}>
//           {/* {node.name}
//           Price: ${node.variants[0].price}
//           Deal Price : ${node.variants[0].dealPrice} */}
//           <Grid item key={node.id} xs={12} sm={6} md={4}>
//           <div>
//             <h2>{node.name}</h2>
//             <p>Price: ${node.variants[0].price}</p>
//             <p>Deal Price: ${node.variants[0].dealPrice}</p>
//           </div>
//       </Grid>    



// </Grid>
//           //  <Card key={node.id} className={classes.carouselCard}>
//           //          <div>
//           //         <Typography variant="subtitle1" component="h3" className={classes.productName} style={{ fontWeight: 'bold' }}>
//           //             {node.name}
//           //          </Typography> 
                   
                  
//           //         <Typography variant="subtitle1" component="h3"  className={classes.productName} >    
//           //         Price: 
//           //         <span style={{ textDecoration: 'line-through', color: '#999' }}>
//           //           ${node.variants[0].price}
//           //         </span>
//           //         </Typography>
                  
                  
//           //         <Typography variant="subtitle2" component="p" className={classes.productName} >
//           //                 Deal Price : ${node.variants[0].dealPrice}
//           //         </Typography>

//           //         </div>

//           //         <p>{node.variants[0].images.url}</p>
//           //         {/* <CardMedia className={classes.cardMedia} image={process.env.GATSBY_STRAPI_URL + node.promoImage[0].url} title={node.name} /> */}
//           //         <img src={process.env.GATSBY_STRAPI_URL + node.promoImage[0].url} className={classes.carouselImage}  objectFit="contain" /> 
//           // </Card>
          
//         ))}    

        
//       </Grid>
//     </Grid>

  ) 
}
