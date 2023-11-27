import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid"
import  Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { InputAdornment} from '@material-ui/core/InputAdornment'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import { Link } from "gatsby"
import addUserIcon from '../images/add-user.svg'
import nameAdornment from '../images/name-adornment.svg'
import forward from '../images/forward-outline.svg'
import backward from '../images/backwards-outline.svg'
import { IconButton } from '@material-ui/core'
import Layout from '../components/ui/layout';

const useStyles = makeStyles(theme => ({

    paper:{
        border: `2rem solid ${theme.palette.secondary.main}`,
        width: '50rem',
        heigh:'40rem',
        borderRadius:0
    },
        inner:{
            height: '40rem',
            width: '100%',
            border: `2rem solid ${theme.palette.primary.main}`,    

        },
     container: {
        marginBottom: "8rem"
     },
     newuser: {
        height:'10rem',
        width:'11rem',
        marginTop: "5rem"
     },
     TextField:{
        width:"20rem",
        marginBottom: "3rem",
        marginTop: "3rem"
    },   
    input: {
        color: theme.palette.secondary.main
    },

}))

export default function FbUser(steps, setSelectedStep){

    const classes = useStyles()
    const [name,setName] = useState("")

    const signUpHolder = {
        "addUserIcon": [
            {icon: addUserIcon, alt: "signup", link: "/contact" }
        ]
    }

    
    return (
        <Layout>
          
          <Grid container justify="center"  classes={{root: classes.container}} >
          
                  <Paper elevation={6} classes={{root: classes.paper}} >
          
                    <Grid item align='center' >

                    <Grid item >
                            <img src={addUserIcon} alt="new User" classes={{root: classes.newuser}} /> 
                    </Grid>   

                    <Grid item>
                <TextField 
                        value={name} 
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        classes={{root:classes.TextField}} 
                        
                        placeholder="Name"
                         InputProps={{
                             startAdornment:(
                                //   <InputAdornment position="start">
                                    <img src={nameAdornment} alt="name" />
                                //   </InputAdornment>  
                             ),
                          classes:{input:classes.input}     
                        }}
                     />
                    </Grid>

                    <Button variant="contained"  color="secondary">
                        <Typography variant="h5">
                            Sign up with Facebook
                        </Typography>
                    </Button>
            </Grid>

             <Grid item container justify="space-between">
                <Grid item>
                    <IconButton>
                    <img src={backward} alt="back to login"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton>
                    <img src={forward} alt="continue registration"/>
                    </IconButton>
                </Grid>
            </Grid>   
            </Paper>
           </Grid> 

        </Layout>


    )

}
