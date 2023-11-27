import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/ui/layout"
import Seo from "../components/ui/seo"
import Carousel from 'react-elastic-carousel'

import PromotionalProducts from "../components/home/PromotionalProducts"


import ProductFrameList from '../components/product-list/ProductFrameList'

import HomeListOfProducts from "../components/product-list/HomeListOfProducts"

//import Card from '../templates/CardComponent'


import HeroBlock from "../components/home/HeroBlock"
import "../components/ui/styles.css"
import Grid from '@material-ui/core/Grid'

import Container from '@material-ui/core/Container'; // Import the Container component



import ProductHeroBlock from "../components/home/ProductHeroBlock"



const Index = (
  // {
  // pageContext: {name, description}, 
  // data: { allStrapiProduct: {edges: products}},
  // }
    ) => (
   <Layout>
  
  <Grid container   spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justify="block"  >
  <Grid item xs={12} >

        {/* <PromotionalProducts /> */}
        <HomeListOfProducts/>
   </Grid>

   
  
  </Grid>  

{/* <Container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justify="block"> Use Container with maxWidth "lg" (large) */}
       {/* <PromotionalProducts /> */}
      {/* <HomeListOfProducts />  */}

{/* </Container>  */}


  



  

   {/* <HeroBlock/> */}
    
  </Layout>
)





/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />






export default Index
