import React, { useState, useContext, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles} from '@material-ui/core/styles'
import {Link, navigate} from 'gatsby'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logoDF from "./logoDF";

import CSMLChatBot from './chatBotCSML';






// import Menu from './menu'


import search from '../../images/search.svg'
import account from '../../images/account-header.svg'
import menu from '../../images/menu.svg'
import { Button, IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  coloredIndicator:{
    backgroundColor:'red'
  },
  logoText: {
      color: theme.palette.common.offBlack
  },
  logoContainer: {
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto',
    },
  },
  tab: {
    //...theme.typography.body1,
    
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 5,
    
  },
  subTabs:{
    color: "#fff",
    backgroundColor: "#228693",
    justifyContent: 'center', // Align tabs at the center
    height: '1.25rem', // Set desired height for the tabs
    minHeight: 'auto', // Allow content to expand vertically if needed
    
  },
  subTab:{
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 5,
      borderBottom: `2px solid ${theme.palette.primary.main}`, // Add border style
      height: '1.25rem', // Set desired height for the tabs
      minHeight: 'auto', // Allow content to expand vertically if needed
  },
  icon: {
    height: "3rem",
    width: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#fff",
    
  },
  badge: {
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
      height: "1.1rem",
      width: "1.1rem",
      minWidth: 0,
    },
    button: {
      margin: theme.spacing(1),
      padding: '0.5 rem 1 rem',

    },
  },
}))

export default function Header({categories}){
const classes=useStyles()

const matchesMD = useMediaQuery((theme)=> theme.breakpoints.down('md'))

const [drawerOpen, setDrawerOpen] = useState(false)
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  // Client-side code can go here, if needed
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

}, []);


const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

// const activeIndex = () =>{
//   const found = routes.indexOf(routes.filter(
//     ({node: {name}}) => `/ ${name}` === window.location.pathname)[0]
//   )

//   console.log('pathverify', found , "windowpath",  window.location.pathname, "nodeName",  )
  
//     return found === -1 ? false: found
    
// }







const activeIndex = () => {
  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : null

  const found = routes.indexOf(
    routes.filter(
      ({ node: { pageName, link } }) =>
        (link || `/${pageName.toLowerCase()}`) === `/${pathname}`
    )[0]
  )

  return found === -1 ? false : found
}


// const routes =[...categories,{node:{pageName:'Contact Us',strapId:'contact', link: '/contact'}}]
const routes =[...categories]
const topNavs =[
                //{node:{navName:'Your Favorites',strapId:'urfavorite', link: '/urfavorite'}},
                {node:{navName:'Blog',strapId:'blog', link: '/blog'}},
                // {node:{navName:'Info',strapId:'contact', link: '/contact'}},
                 ]


const topSubNavs =[{node:{navName:'Stores',strapId:'urfavorite', link: '/urfavorite'}},
{node:{navName:'E-Freebies',strapId:'blog', link: '/blog'}},
{node:{navName:'Credit Cards',strapId:'contact', link: '/contact'}},
]

// console.log("Header",categories)


const tabsNav = (
  <Tabs 
  //  value={activeIndex()} 
    classes={
      {
        // indicator:classes.coloredIndicator, 
        root:classes.tabs
        
       }}
  >
  
  {topNavs.map((topNav,i) => (
    <Tab 
    //  value={activeIndex()} 
    classes={
      { 
        // indicator:classes.coloredIndicator,
         //root:classes.tabs 
        }}  
    component={Link}
    to={topNav.node.link || `/${topNav.node.navName.toLowerCase()}`}
    // classes={{root: classes.tab}}  
    label={topNav.node.navName} 
    key={topNav.node.strapId}/>
  ) )}  &nbsp;
  </Tabs> 
)



const tabSubNav = (
  <Tabs 
  //  value={activeIndex()} 
    classes={
      {
        // indicator:classes.coloredIndicator, 
          root:classes.subTabs
        
       }}
  >
  
  {topSubNavs.map((topSubNav,i) => (
    <Tab 
    //  value={activeIndex()} 
    classes={
      { 
        // indicator:classes.coloredIndicator,
         root:classes.subTab 
        }}  
    component={Link}
    to={topSubNav.node.link || `/${topSubNav.node.navName.toLowerCase()}`}
    // classes={{root: classes.tab}}  
    label={topSubNav.node.navName} 
    key={topSubNav.node.strapId}/>
  ) )}
  </Tabs> 
)





const drawer = (
  <SwipeableDrawer open={drawerOpen} 
  onOpen={()=> setDrawerOpen(true)} 
  onClose={()=> setDrawerOpen(false)}  
  disableBackdropTransition={!iOS} 
  disableDiscovery={iOS}
  classes={{ paper: classes.drawer }}
  
  >

    <List disablePadding>
      {routes.map((route, i) => (
        <ListItem 
        selected={activeIndex() === i}
        component={Link} 
        to={route.node.link || `/${route.node.pageName.toLowerCase()}`}
        divider button key={route.node.strapiId}>
          {/* <ListItemText primary={route.node.name}/> */}
          <ListItemText
              classes={{ primary: classes.listItemText }}
              primary=  {route.node.pageName}
           > {route.node.pageName} </ListItemText>
        </ListItem>
      ))}
    </List>
   </SwipeableDrawer> 
)

const handleClick = event  => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
 setAnchorEl(null);
};    

const [anchorEl, setAnchorEl] = React.useState(null);

   const actions =[
    // {icon: search, alt: "search", visible: true, onClick: () => {console.log('Search')}},
    { icon: account, alt: "account", visible: !matchesMD, link: "/account" },
    {icon: menu, alt: "menu", visible: matchesMD, onClick: () => setDrawerOpen(true), marginRight:"0.5rem" },
   ]     


   const tabsMenu = (
    <Tabs 
        // value={activeIndex()} 
    // classes={{indicator:classes.coloredIndicator, root:classes.tabs }}
    >
      <Tab   
      // component={Link}
      //to={route.node.link || `/${route.node.pageName.toLowerCase()}`}
      //classes={{root: classes.tab}}  
      //label={route.node.pageName} 
      label ="Categories"
      //key={route.node.strapId}
      key = "TabsMenu"
      onClick={handleClick}
      aria-contorls={true ? 'simple-menu' : undefined}
      aria-haspopup ='true'
      aria-expanded={true ? 'true': undefined}
      />
    {routes.map((route,i) => (
      <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         MenuListProps={{'aria-labelledby': 'TabsMenu'}}
         onClose={handleClose}
         
       > 
         
         {routes.map((route,i) => (
           <MenuItem 
           component={Link}
           //classes={{root: classes.tab}}
           selected={activeIndex() === i}
           to={route.node.link || `/${route.node.pageName.toLowerCase()}`}
           >   
            {route.node.name}
           </MenuItem>
           )
           ) } 
           
       </Menu>
      
    ) )}
    </Tabs> 
  )

   

    return(
     
    <AppBar color="transparent" elevation={0} position="static" >
      <ToolBar disableGutters>
      
      <Button  component={Link}    to="/"  classes={{root: classes.logoContainer }}>
            <Typography variant="h3">Deals Favorite <span className={classes.logoText}></span></Typography>  
          <logoDF />
          
        </Button>
        {matchesMD ? drawer : tabsMenu}
        {tabsNav}
        
        
        <CSMLChatBot />
       {actions.map( action => {
          if(action.visible){ 
            return(
              <IconButton onClick={action.onClick} 
              key={action.alt} 
              component={ action.onClick ? undefined:Link} 
              to={action.onClick ? undefined:action.link}>
                <img 
                  className={classes.icon}
                  src={action.icon}
                  alt={action.alt}
                  
                />
              </IconButton>

            )
          }
          }
        )
       } 
      </ToolBar>

      {tabSubNav}  
     
  </AppBar>
  
  )

}

 {/*  REFERENCES ONLY / -
 
 <IconButton>
          <img src={search} alt="search"/>
        </IconButton>
        <IconButton onClick={() => matchesMD ? setDrawerOpen(true): navigate('/account')}>
          <img src={matchesMD ? menu :account} alt={matchesMD ? "menu" : "account"}/>
        </IconButton> */}

        {/* {actions.map( action => {
    if(action.visible){
      return(
        <menu>
        <nav>
        <ul>
        <li>
        <a href="#" onClick={() => setIsOpen(!isOpen)} 
        // key={action.alt} 
        //component={ action.onClick ? undefined:Link} 
        //to={action.link ? undefined:action.link}
        > Categories
        </a>
        {isOpen && (
            <ul>
               {routes.map((route,i) => (
                <li>   
                <a href="#" onClick={() => setIsOpen(!isOpen)} key={action.alt}  
                  component={ action.onClick ? undefined:Link} 
                  to={action.link ? undefined:action.link}> {route.node.pageName}</a>
                </li>
                )
                ) } 
            </ul>
          )}
        </li>
      </ul>
    </nav>
    </menu>
      )
    }
    }
  )
 }  */}