import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Container, Grid, Typography } from '@material-ui/core';

const backgroundImage = 'https://source.unsplash.com/1600x900/?fashion';


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
        heroBlock: {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: theme.spacing(8, 0, 6),
          
        },
        heroContent: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: theme.spacing(4),
          borderRadius: theme.shape.borderRadius,
          marginBotttom:'2rem'
        },
        heroButtons: {
          marginTop: theme.spacing(4),
        },
    },
  
        
}))

export default function ProductHeroBlock({products,variant}){
    const classes = useStyles()

    return(


      <div className={classes.heroBlock} >
      <Container maxWidth="md" gutterBottom>
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Fashion Trends for All Seasons
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Find the latest styles and trends in our collection of clothing, shoes, and accessories for women, men, and
            kids.
          </Typography>
          <div className={classes.heroButtons}>
          <Grid container justifyContent="space-around" alignItems="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Shop Women's
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Shop Men's
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Shop Kids'
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>




       

        
    )
      

}