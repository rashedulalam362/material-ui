import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from './components/Navbar';
import Cardinfo from './components/Cardinfo';



const useStyles = makeStyles({
  
});
function App() {
  const classes = useStyles();
    return <div>
      <Navbar/>
      <Cardinfo />
      <Cardinfo />
   
    </div>
    
}

export default App;
