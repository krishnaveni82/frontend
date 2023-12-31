import React, { useEffect, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import { UserContext } from '../contexts'

import { setUser } from "../contexts/actions"
import Layout from '../components/ui/layout';

import checkmark from "../images/checkmark-outline.svg"
import forward from "../images/forward-outline.svg"

const useStyles = makeStyles(theme => ({
  iconText: {
    marginTop: "10rem",
  },
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textTransform: "none",
  },
  shop: {
    marginLeft: "1rem",
  },
  shopContainer: {
    marginRight: "1rem",
    marginBottom: "1rem",
  },
}))

export default function Complete() {
  const classes = useStyles()
  const {user, dispatchUser}  = useContext(UserContext) 

  useEffect(() => {
    //cleanup function --- only executes on component unmount
    return () => {
      dispatchUser(setUser({ ...user, onboarding: true }))
    }
  }, [])
  
  return (
    <Layout>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.iconText }}
      >
        <Grid item>
          <img src={checkmark} alt="sign up finished" />
        </Grid>
        <Grid item>
          <Typography variant="h3" classes={{ root: classes.text }}>
            Account Created
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify="flex-end">
        <Grid item classes={{ root: classes.shopContainer }}>
          <Button>
            <Typography variant="h3" classes={{ root: classes.text }}>
              <a href="/"> Build Your Favorite  </a> 
            </Typography>
            <img src={forward} alt="browse products" className={classes.shop} />
          </Button>

          <Button>
            <Typography variant="h3" classes={{ root: classes.text }}>
              <a href="/"> Shop Deals  </a> 
            </Typography>
            <img src={forward} alt="browse products" className={classes.shop} />
          </Button>

        </Grid>
      </Grid>
    </Layout>
  )
}
