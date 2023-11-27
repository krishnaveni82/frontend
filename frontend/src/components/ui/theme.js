import { Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const green="#228693"
const darkGreen="#708670"
const tan="#FECEA8"
const lightRed="#FF847C"
const red="#EE84A5F"
const offBlack="#2A363B"
const gray ="#747474" 

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green
        },
        secondary: {
            main: darkGreen
        },
        authBorder:{
            main:gray
        },
        common: {
            tan:`tan`,
            lightRed: `lightRed`,
            red,
            offBlack
       }
    },

    typography: {
        h1:{
           fontSize: "4.5rem",  // 1 rem is 16px
           fontFamily: 'Greycliff CF, sans-serif',
           fontStyle: "italic",
           fontWeight: 700,
           color: green 
        },
        h2:{
            fontSize: "3rem",  // 1 rem is 16px
            fontFamily: "Montserrat",
            fontWeight: 500,
            color : "#fff" 
         },
        h3:{
            fontSize: "2rem",  // 1 rem is 16px
            fontFamily: "Montserrat",
            fontWeight: 300,
            color: green  
         },
         h4:{
            fontSize: "3rem",  // 1 rem is 16px
            fontFamily: "Philosopher",
            fontStyle: "bold",
            fontWeight: 700,
            color : "#fff"
         },
         h5:{
            fontSize: "1.5rem",  // 1 rem is 16px
            fontFamily: "Montserrat",
            fontStyle: "italic",
            fontWeight: 700,
            color : "#fff"
         },
         body0:{
            fontFamily: "-apple-system",
            fontSize: "1rem",
            color: grey
        },
        body1:{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            color: grey
        },
        body2:{
            fontFamily: "Montserrat",
            fontSize: "2rem",    
            color: "#fff"
        },
        productName:{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",    
            color: "#fff",
            fontWeight: "bold",
        },
        dealPrice:{
            textDecoration: "line-through",
            fontFamily: "Montserrat",
            fontSize: "1rem",
            color: grey
        },
        labelContact:{
            fontSize: "3rem",  // 1 rem is 16px
            fontFamily: "Philosopher",
            fontStyle: "italic",
            fontWeight: 700,
            color : "#fff"
        },

    },

    overrides: {}

})

export default theme