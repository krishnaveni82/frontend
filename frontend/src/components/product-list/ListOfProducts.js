import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ProductFrameList from './ProductFrameList'
import PromotionalProducts from "../../components/home/PromotionalProducts"






const useStyles = makeStyles (theme => ({

    productContainer:{
        width: "85%",
        "& > *": {
            marginRight:"0",
            marginBotttom: "5rem",
        },
        "& > :nth-child(4n)": {
            marginRight: 0,
        },
    },
    card: {
        maxWidth: 'auto',
      },
        
}))

export default function ListOfProducts({products,variant}){
    const classes = useStyles()

    const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

    console.log("product-Cuxt",products)
     //const matchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))

    
     
    //  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))
    
    // console.log("variantId", product)
    
    // if(!products) return null

    

     

    return(


  <Grid container alignItems="center" style={{ width: '85%', margin: 0 }}>
  <Grid item xs={12} classes={{ root: classes.textContainer }} alignItems="center" style={{ width: '80%', margin: 0 }}  >
        
        <div>
                          {matchesMD ? (
                            // Content for mobile view
                            null
                          ) : (
                            // Content for desktop view
                            <PromotionalProducts  />
                          )}
                        </div> 
  </Grid>
  {products.map(product =>
          product.node.variants.map(variant => (
            <ProductFrameList
              key={variant.id}
              variant={variant}
              product={product}
            />
          ))
        )}
</Grid>


        
    //   <Grid container  alignItems="center">



    //   <Grid item classes={{ root: classes.textContainer }}>
    //     <Grid container direction="column">
    //       <Grid item>

    //       <PromotionalProducts /> 

    //       {products.map(product => 
    //                 product.node.variants.map(variant => (
    //                      <ProductFrameList
    //                       key={variant.id}
    //                       variant={variant}
    //                       product={product}
    //                        />

    //                 ))
    //            )} 

            

          
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>




       

        
    )
      

}