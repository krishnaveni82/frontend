import React, {useState, useContext} from 'react'
import axios from "axios"
import clsx from 'clsx'
import Grid from "@material-ui/core/Grid"
import  Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import EmailAdornment from "../images/EmailAdornment"
import { InputAdornment} from '@material-ui/core/InputAdornment'
import { FeedbackContext, UserContext } from '../contexts'

import { CircularProgress } from '@material-ui/core/CircularProgress'


import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import signUp from '../images/signUp.png'

import Fields from '../components/auth/Fields'

import {setUser, setSnackbar} from '../contexts/actions'

import Complete from './complete'

// import { EmailPassword } from '../components/auth/Login'

import { Link, navigate } from "gatsby"
import addUserIcon from '../images/add-user.svg'
import nameAdornment from '../images/name-adornment.svg'
import PasswordAdornment from "../images/password-adornment.svg"
import HidePasswordIcon from "../images/hide-password.svg"
import ShowPasswordIcon from "../images/show-password.svg"
import forward from '../images/forward-outline.svg'
import backward from '../images/backwards-outline.svg'
import { IconButton } from '@material-ui/core'
import Layout from '../components/ui/layout';
import SignUp from '../components/auth/SignUp'
import { string } from 'prop-types'



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
        marginBottom: "8rem",
        marginTop:"2rem"
     },
     TextField:{
        width:"20rem",
        marginBottom: "3rem",
        marginTop: "3rem"

    },   
    visibleIcon: {
        padding: 0,
    },
    emailAdornment:{
        height:17,
        width:22,
        marginBottom:"10rem",
        marginTop:"3rem" 
    },
    SignUPButton:{
        width:"20rem",
        borderRadius:50,
        marginTop:"3rem"

    },
    removeButtonMargin:{
        marginTop:0
    }
    
}))

 


export const EmailPassword= (classes, hideEmail,hidePassword,visible,setVisible ) =>(
    {

        email:{
            helperText: 'invalid email' ,
            placeholder: 'Email' ,
            type:'text',
            hidden:"text",
            startAdornment: (
                <span className={classes.EmailAdornment}>
                <EmailAdornment/>
                </span>
            ),
        },
        password:{
            helperText: ' Password must be atleast 8 Characters 1 Upper Case 1 Number 1 Special Character',
            placeholder: 'Password' ,
            type:visible ? "text" : "password",
            hiddden: hidePassword,
            startAdornment:<img src={PasswordAdornment} alt="password"/>,
            endAdornment: (
                <IconButton classes={{root:classes.visibileIcon}} 
                onClick={()=> setVisible(!visible)}>
               
                
                <img  src={visible ? ShowPasswordIcon : HidePasswordIcon
            } 
            alt={`$visible ? "Show" : "Hide"} Password` } />  </IconButton>)
        }

    }
) 




export default function NewUser(steps, setSelectedStep){

    const classes = useStyles()
    const [errors,setErrors]=useState({})    
    const [visible, setVisible] = useState(false)
    const [info, setInfo] = useState(false)
    const {user, dispatchUser}  = useContext(UserContext) 
    const {feedback, dispatchFeedback} = useContext(FeedbackContext)
    const [loading,setLoading] = useState(false)
    

// const handleComplete = 
//     [
//         {icon: signUp, alt: "Sign Up", link: "/complete"}
//     ]

// if (object !== undefined && object !== null) {
//     // Access the object's properties here
//   }

const handleComplete =  () => {
    setLoading(true)
    const url = process.env.GATSBY_STRAPI_URL + "/auth/local/register";
    const username = values.name
    const email = values.email
    const password = values.password

    if (!username || !email || !password) return;
    const user = { username, email, password };
        const res =  axios.post(url, {
        username,
        email,
        password
      }).then(response => {
        setLoading(false)
        // console.log("User Profile",response.data.user)
        // console.log("JWT",response.data.jwt)
        dispatchUser(setUser({...response.data.user,jwt:response.data.jwt}))
        navigate('/complete')
        })
        .catch(error => {
            setLoading(false)
            const { message } = error.response.data.message[0].messages[0]
            console.error(error)
            dispatchFeedback(setSnackbar({ status:"error", message: message }))
          })
       }

const handleComplete1 = () => {
    const url = "http://localhost:1337" + "/auth/local/register";
    const username=(string ?? "")[0]
    const email=(string ?? "")[0]
    const password=(string ?? "")[0]

      axios.post(
        url, {
        username: values.name,
        email: values.email,
        password: values.password,
      })
      .then(response => {
        
        dispatchUser(setUser({...response.data.user,jwt:response.data.jwt}))
         

        // const complete = steps.find(step => step.label === "Complete")

        // setSelectedStep(steps.indexOf(complete))
      })
      .catch(error => {
        const { message } = error.response.data.message[0].messages[0]
        // setLoading(false)
        console.error(error)
         dispatchFeedback(setSnackbar({ status: "error", message }))
      })
  }


const handleNavigate = direction =>{

    if ( direction === "forward"){
        setInfo(true)
    
    }else {
        if(info) {
            setInfo(false)
        }
        else{
            // const login = steps.find(step => step.label === "Login")
            // setSelectedStep(steps.indexOf(login))     
            alert('NO');
    
        }
        
    }

}




const nameField = {name:{

    helperText: 'you must enter a name',
    placeholder:'Name',
    startAdornment: (
        <img src={nameAdornment} alt="name" />
    )

}}

const fields = info ?  EmailPassword(classes, false,false,visible,setVisible) : nameField

    const [values,setValues]= useState(
        {
            email:"",
            password:"",
            name:""
        })

 
const disabled = Object.keys(errors).some(error => errors[error] === true) ||
                Object.keys(errors).length !== Object.keys(values).length


    const signUpHolder = {
        "addUserIcon": [
            {icon: addUserIcon, alt: "signup", link: "/contact" }
        ]
    }

    
    
    return (
        <Layout>
          
          <Grid container justify="center"  classes={{root: classes.container}} >

          
          <Paper elevation={6} classes={{root: classes.paper}} >
                    <Grid item align='center'>
                    <Grid item>
                <img src={addUserIcon} alt="new User" classes={{root:clsx(classes.SignUPButton,
                    {
                        [classes.removeButtonMargin] :info 
                    }
                    )}}   /> 
                </Grid>
                    <Fields fields={fields} 
                            errors={errors}
                            setErrors={setErrors}
                            values={values}
                            setValues={setValues}/>
                     

                    {/* {handleComplete.map(platform => (
              <Grid item key={platform.alt}>
                <IconButton
                  classes={{ root: classes.icon }}
                  component="a"
                  disableRipple
                  href={platform.link}
                >
                  <img src={platform.icon} alt={platform.alt} />
                </IconButton>
              </Grid>
            ))}     */}


                     <Button 
                            variant="contained" 
                            marginBottom="2rem" 
                            color="secondary" 
                            disabled ={ loading || info && disabled}
                            onClick={() => info ? handleComplete(): null}
                            >
                                {/* {loading ? <CircularProgress/> :( */}
                                    
                                    <Typography variant="h5" classes={{root:classes.facebookText}}>
                                    Sign up {info ? "" : " with Facebook"}
                                </Typography>
                                {/* )
                                }  */}
                    </Button> 
            </Grid>

            <Grid item container justify="center">
                  
                  
            { info ? 
            <Grid item>
                <IconButton onClick={() => handleNavigate("backward")}>
                <img src={backward} alt="back to login"/>
                </IconButton>
            </Grid>            
            :
            (
                  <Grid item>
                      <IconButton onClick={() => handleNavigate("forward")}>
                      <img src={forward} alt="continue registration"/>
                      </IconButton>
                  </Grid>
                
            )
            }

</Grid>  
           
        </Paper>
           </Grid> 

        </Layout>


    )

}
