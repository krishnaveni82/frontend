import React from 'react'
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'







import CarouselFrameList from './CarouselFrameList'




// import DealsCard from './DealsCard'


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

export default function CarouselList({products,variant}){
    const classes = useStyles()

     //const matchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))

    
     
    //  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))
    
    // console.log("variantId", product)
    
    // if(!products) return null
     

    return(
  <Grid container  alignItems="center">
  <Grid item classes={{ root: classes.textContainer }}>
     <Grid container direction="row" wrap="nowrap">
       <Grid item>
       </Grid>
       {products.map(product => 
                 product.node.variants.map(variant => (
                      <CarouselFrameList
                       key={variant.id}
                       variant={variant}
                       product={product}
                        />
                 ))
            )} 
     </Grid>
   </Grid>
 </Grid>




       

        
    )
      

}