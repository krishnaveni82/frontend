import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import { makeStyles  } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

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
           height: '10rem',
           width: '10rem', 
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
    card: {
      display: "flex",
      marginBottom: theme.spacing(2),
      width: '19rem',
      height: '19rem',
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
    priceStrike: {
      textDecoration: 'line-through',
      color: '#999',
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





export default function ProductFrameList({product, variant,productId,}){

    const classes = useStyles()
    
    const [selectedProduct,setSelectedProduct] = useState(0)
    const { user, dispatchUser } = useContext(UserContext)
    const { dispatchFeedback } = useContext(FeedbackContext)
     const [loading, setLoading] = useState(false)
     const [isClient, setIsClient] = useState(false);

    

      const strFullProductID = product.node.id.split("_")
     
      const strproductID =strFullProductID[1]

  // Set isClient to true when component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);


      const imageUrl = variant.images.map(image => (
        <img
          //src={process.env.GATSBY_STRAPI_URL + image.url}
          src={image.url}
          alt={image.url}
          className={classes.productImage}
        />
      ));

    return (
     
     <div className={classes.root}>
{isClient && (
      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justify="flex-end">
  
        <Card className={classes.card}>
              <CardMedia className={classes.media} title={product.node.name} style={{ width: '45%', height: '45%' }}>
                  {variant.images.map(image => (
                  <img
                    src={image.url}
                    alt={image.url}
                    className={classes.productImage}
                  />
              ))}
              
                <CardContent>
                    <Typography variant="productName" className={classes.twoLineCell}  >
                          {product.node.name} 
                    </Typography>   
                    <br/>

                  
                <Typography variant="dealPrice" color="textSecondary"   >
                   {`$${variant.dealPrice}`}
                </Typography>
                 &nbsp;&nbsp;
                <Typography variant="body0" color="textSecondary" className={classes.priceStrike}>
                  {`$${variant.price}`}
                </Typography>
                <br/>
                {/* <Typography variant="body0" color="textSecondary" >
                        Add as favorite 
                        <span className={classes.icon} >
                          <Favorite size={1.5} productId={strproductID} noPadding  alt="Add to Favorite" />
                        </span>
                    </Typography>     */}

                    <br/>
            </CardContent> 
            </CardMedia>
            <table border={0} >
                <tr>
                  <td valign="Top">
                        {product.node.merchantname}
                    </td>
                </tr>
                <tr>    
                    <td valign="bottom">
                          <a href={product.node.merchantLink} className={classes.ShopLink} > Shop Deals </a> 
                    </td>
                </tr>
            </table>  

          </Card>       
          
           
  
       {/* <Grid item xs={6} style={{ border: '0px solid gray', padding: '10px',height: 'auto', width:'auto' }} >
              Here you Go !        
        </Grid>
      <Grid item xs={6}  style={{ border: '1px solid gray', padding: '10px',height: 'auto', width:'auto' }} >
         Third row, first column 
      </Grid>
     <Grid item xs={6} >
         Third row, second column 
      </Grid>
      <Grid item xs={6} >
        Fourth row, first column 
      </Grid>
      <Grid item xs={6} >
        Fourth row, second column 
      </Grid> */}
</Grid>  
 )}
</div>      

    );
    

}