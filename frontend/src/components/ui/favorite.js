import React, { useState, useContext, useEffect } from "react";
import axios from "axios"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

import { UserContext, FeedbackContext } from "../../contexts"
import { setSnackbar, setUser } from "../../contexts/actions"

import FavoriteIcon from "../../images/Favorite"

const useStyles = makeStyles(theme => ({
  icon: {
    height: ({ size }) => `${size || 2}rem`,
    width: ({ size }) => `${size || 2}rem`,
  },
  // iconButton: {
  // padding: ({ noPadding }) => (noPadding ? 0 : undefined),
  // "&:hover": {
  // backgroundColor: theme.palette.primary.main,
  //  backgroundColor: "transparent",
  // },
  // },
  iconButton:{
    height: ({ size }) => `${size || 1}rem`,
    width: ({ size }) => `${size || 1}rem`,
    backgroundColor: theme.palette.primary.main,
    padding:0,
    "&:hover": {
      // backgroundColor:"transparent",
      backgroundColor: theme.palette.primary.main,
    },
  },

}))

export default function Favorite({
  color,
  size,
  product,
  productId,
  buttonClass,
  noPadding,
}) {
  const classes = useStyles({ size, noPadding })
  const { user, dispatchUser } = useContext(UserContext)
  const { dispatchFeedback } = useContext(FeedbackContext)
  const [loading, setLoading] = useState(false)

  const existingFavorite = user.favorites?.find(
    favorite => favorite.productId === productId
    
  )

  useEffect(() => {
    // Client-side code can go here, if needed
  }, []);
  

  const handleFavorite = () => {
    if (user.username === "Guest") {
      dispatchFeedback(
        setSnackbar({
          status: "error",
          message: "You must be logged in to add an item to favorites.",
        })
      )
      return
    }

    setLoading(true)

    
    const axiosFunction = existingFavorite ? axios.delete : axios.post
    const route = existingFavorite
      ? `/favorites/${existingFavorite.id}`
      : "/favorites"
    const auth = { Authorization: `Bearer ${user.jwt}` }

    axiosFunction(
      process.env.GATSBY_STRAPI_URL + route,
      { productId, headers: existingFavorite ? auth : undefined },
      { headers: auth }
    )
      .then(response => {
        setLoading(false)

        dispatchFeedback(
          setSnackbar({
            status: "success",
            message: `${existingFavorite ? "Deleted" : "Added"} Product ${
              existingFavorite ? "From" : "To"
            } Favorites`,
          })
        )

      

        let newFavorites= [...user.favorites]

       

        if (existingFavorite  !== undefined) {
          newFavorites = newFavorites.filter(
            favorite => favorite.id !== existingFavorite.id
          )
        } else {
          newFavorites.push({
            id: response.data.id,
            productId:productId,
            // product: response.data.product,
          })
        }
        console.log("ProductID", productId, "Id", response.data.id,"Product", product)
        dispatchUser(setUser({ ...user, favorites: newFavorites }))
      })
      .catch(error => {
        setLoading(false)
        console.error(error)

        dispatchFeedback(
          setSnackbar({
            status: "error",
            message: `There was a problem ${
              existingFavorite ? "removing" : "adding"
            } this item ${
              existingFavorite ? "from" : "to"
            } favorites. Please try again.`,
          })
        )
      })
  }

  if (loading) return <CircularProgress size={`${size || 2}rem`} />

  return (
    <IconButton
      onClick={handleFavorite}
      classes={{ root: clsx(classes.iconButton, buttonClass) }}
    >
      <span className={classes.icon}>
        <FavoriteIcon color={color} filled={existingFavorite} />
      </span>
    </IconButton>
  )
}
