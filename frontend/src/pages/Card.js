import React from 'react'
import { makeStyles } from '@material-ui/core/styles'



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

//const Card=({number}) => <div className='card'> {number} </div>

// export default function Card( pageContext: {name, description}, 
//   data: { allStrapiProduct: {edges: products}},{number}){



export default function Card({products,variant}){
  const classes = useStyles()

  

  // console.log("product-Cuxt",products)
   //const matchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))

  
   
  //  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))
  
  // console.log("variantId", product)
  
  // if(!products) return null


   

  return(

    <div className='card'> 
         <h1> Title</h1>
        <img src={process.env.GATSBY_STRAPI_URL }      className={classes.productImage}     />
        
    </div>

  //   <Grid container  alignItems="center">
  // <Grid item classes={{ root: classes.textContainer }}>
  //    <Grid container direction="row" wrap="nowrap">
  //      <Grid item>
  //      </Grid>
  // <div className='card'>
      
  // </div>
//      </Grid>
//    </Grid>
//  </Grid>
      
  )
    

}


// export default function Card({
//   pageContext, 
//   number,
//   name,
//     }) {

//   const classes = useStyles()


  

//   return(
//       <div className='card'> 
//       {number} 
//       {name}
      

      

      

//       </div>

//   )
// }








