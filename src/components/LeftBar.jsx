import { Camera, Contactless, Home, Person, Phone, Telegram } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import theme from '../theme';

const useStyles = makeStyles({
    container:{
    position: 'sticky',
    top: '0',    
    height:'100vh',
    color:'white',  
    paddingTop: theme.spacing(5)  ,
    
    [theme.breakpoints.up('md')]: {
     backgroundColor: theme.palette.secondary.main,
      }
    },
    item: {
     display: 'flex',
     alignItems: 'center',
     cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
     marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
     marginBottom: theme.spacing(3)
     
      }  
    },
    text: {
        display: 'none',
        
        marginBottom: theme.spacing(4),
       [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(3)
        
         }  
       },
       icon:{
        
       }

   
 });
function LeftBar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
        <div className={classes.item}>
            <Person className={classes.icon} />
            <Typography className={classes.text} >
               Person
            </Typography>
        </div>
        <div className={classes.item}>
            <Camera className={classes.icon} />
            <Typography className={classes.text} >
                Homepage
            </Typography>
        </div>
        <div className={classes.item}>
            <Phone className={classes.icon} />
            <Typography className={classes.text} >
               Contact
            </Typography>
        </div>
        <div className={classes.item}>
            <Contactless className={classes.icon} />
            <Typography className={classes.text} >
                Homepage
            </Typography>
        </div>
        <div className={classes.item}>
            <Telegram className={classes.icon} />
            <Typography className={classes.text} >
                Homepage
            </Typography>
        </div>
        </Container>
    )
}

export default LeftBar
