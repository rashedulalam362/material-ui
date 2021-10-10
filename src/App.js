import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import { Grid, Toolbar } from '@mui/material';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import ToolTips from './components/ToolTips';


const useStyles =makeStyles((theme)=>({
  container:{
  paddingBottom:20,
  marginTop:50 

   
  },
  
  


}))

function App() {
  const classes = useStyles();
    return <div>
    <Navbar/>
     <Grid container className={classes.container}>
     <Grid item sm={2} xs={2}>
       <LeftBar/>
     </Grid>  
     <Grid item sm={7} xs={10}>
       <Feed></Feed>
     </Grid>
     <Grid item sm={3} lx={12}>  
      <RightBar />
     </Grid>
     </Grid>
     <ToolTips/>
     </div>
    
}

export default App;
