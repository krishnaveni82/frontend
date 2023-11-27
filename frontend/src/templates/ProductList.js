import React, { useState } from "react"
import Grid from '@material-ui/core/Grid' 



import Carousel from 'react-elastic-carousel'
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Layout  from "../components/ui/layout"
// import DynamicToolbar from "../components/product-list/DynamicToolbar"
import Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from "gatsby"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton"
import filter from "../images/filter.svg"
import sort from "../images/sort.svg"



import ListOfProducts from "../components/product-list/ListOfProducts"
import CarouselList from "../components/product-list/CarouselList"
// import PromotionalProducts from "../components/home/PromotionalProducts"
import { Autocomplete } from "@material-ui/lab"

import Breadcrumb from "../components/home/BreadCrumb"


const useStyles = makeStyles (theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },  
    toolbarContent:{
        border: `5px solid ${theme.palette.primary.main}`,
        borderRadius:25,
        width: '30%',
        height: '1rem',
    },
    card: {
      maxWidth: 'auto',
    },
    cardCarousel: {
      maxHeight:'2rem',
      
    },
    cardContent: {
      display: 'block',
      height: '2rem',
      padding: "1rem",
    },
    description: {
        color: '#fff',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    descriptionContainer: {
        border: `1px solid ${theme.palette.primary.main}`,
        // borderRadius:25,
        // width: '100%',
        // height: '10rem',
        // backgroundColor: theme.palette.primary.main,
        height: "auto",
        width: "100%",
        borderRadius: 25,
        marginBottom:'5rem',
        padding: "1rem",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          borderRadius: 0,
        },
      },
      
}))





export default function ProductList({
  pageContext: {name, description}, 
  data: { allStrapiProduct: {edges: products}},
    }) {
     //console.log(process.env.GATSBY_STRAPI_URL)
    // console.log('GRID',Grid)
    // console.log('Layout',Layout)
    // console.log('DynamicToolbar', DynamicToolbar)
    const classes = useStyles()

    const [option, setOption] = useState(null)  

//    const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

    const breakpoints =[
      { width:1, itemsToShow:1},
      { width:500, itemsToShow:2},
      { width:768, itemsToShow:3},
      { width:1200, itemsToShow:4},
    
    ];



    const content = () => {
        switch(option) {
          case null:
            const items = [{icon: filter, alt: 'filter'}, {icon: sort, alt:'sort'}]
            return (
            <div>
             <Grid item container justifyContent="space-around">
              {items.map(item => (
            <Grid item key={item.alt}>
              <IconButton>
                <img  src={item.icon} alt={item.alt}/>
            </IconButton>
          </Grid>
            ))}
          </Grid>
            </div>
            );
          default:
              return null  
        }

    }


    const breadcrumbItems = [
      { name: "Home", link: "/" },
      { name: <span>{description}</span>, link: {description} },
   ];


    return(
        <Layout>
            {/* <Grid container direction="column"   alignItems='center'  style={{ minHeight: "10vh" }}>  */}
            <div style={{ textAlign: "center", backgroundColor: "#fff" }}>
                        <Typography variant="body0" backgroundColor="#fff"> We may get paid on qualifying purchases as commission from brands & deals promoted here. </Typography> 
            </div>

            <div align="left">
            <Breadcrumb items={breadcrumbItems} />
            </div>

            <br></br>
          
           {/* <Grid item xs={6}  container direction="row" classes={{root: classes.descriptionContainer}} justify="center" alignItems="center"  >  */}
               
                     {/* {content}  */}
                    

           {/* </Grid>  */}
        
           {/* <Carousel breakPoints={breakpoints} >
                                <Card className='cardCarousel'>
                                        <CarouselList  products={products}/>  
                                        <PromotionalProducts products={products}/>
                                 </Card>

          </Carousel>   
 */}

        

          
          <Grid item xs={12}  container direction="row"  justify="center" alignItems="center" >  
              <Card className={classes.card}>
               {/* <CardContent className={classes.cardContent}>
                 <Typography variant="body1" color="textSecondary" component="p">
                 {description}
                 </Typography>
               </CardContent> */}
             </Card>
          

  
           <ListOfProducts  products={products}/>

          

            {/* </Grid>  */}
     
            </Grid> 
        
        </Layout>
    )
}


export const query = graphql`
  query GetCategoryProducts($id: String!) {
    allStrapiProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          createdAt
          name
          id
          description
          merchantLink  
          category {
            name
            description
          }
          variants {
            color
            id
            price
            dealPrice
            size
            style
            images {
                url
            }
          }
        }
      }
    }
  }
`




// export const query = graphql `
// query GetCategoryProducts($id: String!) {
//     allStrapiProduct(filter: {category: {id: {eq:$id}}}) {
//       edges {
//         node {
//           name
//           strapiId
//           variants {
//             id
//             price
//             dealPrice
//             images {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `