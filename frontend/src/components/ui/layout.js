/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';



import Header from "./header"
import Footer from "./footer"

import Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'





//import "./layout.css"



const useStyles = makeStyles(theme => (
  {
    spacer: {
        marginBottom: "5rem",
        [theme.breakpoints.down("md")]: {
          marginBottom: "2rem",

        },
    },
    disclaimerLink: {
      backgroundcolor: "#f5f5f5", /* Light gray background */
      padding: "10px",
      fontsize: "14px",
      color: "#666", /* Dark gray text color */
    },


  }))


const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query GetCategories {
      allStrapiCategory {
      edges {
        node {
          strapiId
          name
          pageName
        }
      }
    }
  }
  
  `)
  



  return (
    <>
      <Header categories={data.allStrapiCategory.edges}/>
      

      {/* <div align="auto"> */}
        <div align="center">
          {/* <Typography variant="body0" className="disclaimerLink" > We may get paid on qualifying purchases as commission from brands & deals promoted here. </Typography> */}
                
          </div>  
      
      {/* <Helmet>
      <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/82dba2b5-4aa8-4227-9f17-a4224c9e2023/webchat/config.js" defer></script>
      </Helmet> */}

      {/* </div> */}

      <div valign="top" style={{ marginBottom: '10px'  }} 
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: `var(--size-content)`,
        //   padding: `var(--size-gutter)`,
        // }}
      >
           
        
        <main>{children}</main>
        
      </div>
      {/* <div align="Center">
      <CSMLChatBot />
      </div> */}

     
      <Footer/>
    </>
  )
}

export default Layout
