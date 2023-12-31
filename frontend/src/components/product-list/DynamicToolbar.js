import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import DescriptionContainer from './DescriptionContainer'

const useStyles = makeStyles (theme => ({
        toolbar:{
            border: `5px solid ${theme.palette.primary.main}`,
            borderRadius:25,
            width: '95%',
            height: '20rem'
        }
}))

export default function DynamicToolbar(name, description){

    const classes = useStyles()

    return(
        <Grid item container direction="column" classes={{root: classes.toolbar}} alignItems="center" >
                <DescriptionContainer name={name}  description={description}/>

                
        </Grid>
     

    )

}
