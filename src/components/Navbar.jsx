import React from 'react'
import { makeStyles } from '@mui/styles';
import { AppBar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import theme from '../theme';

const useStyles = makeStyles({
  appbar:{
    position: 'fixed',
    top: 0,
  },
  toolbar: {
   display:'flex',
   justifyContent:'space-between',
  
  },
  search:{
    display:'flex',
    alignItems: 'center',
    backgroundColor:'gray',
    width:'50%'
  },
  logLg:{
    display:'none',
    [theme.breakpoints.up('sm')]: {
      display:'block',
    },
    
  },
  logSm:{
    display:'block',
    [theme.breakpoints.up('lg')]: {
      display:'none',
    },
  },
 

});


function Navbar() {
  const classes = useStyles();
  return (
    <AppBar  className={classes.appbar} >
      <Toolbar className={classes.toolbar} >
      <Typography variant="h6" className={classes.logLg} >
       Rashed
    </Typography>
    <Typography variant="h6" className={classes.logSm} >
       Chy
    </Typography>
   
     <div className={classes.search}>
     <Search/>
     <InputBase placeholder="....search"/>
      </div>
       <div className={classes.icon}>
       <Badge badgeContent={4} color="secondary">
      <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
      <MailIcon color="action" />
      </Badge>
       </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
