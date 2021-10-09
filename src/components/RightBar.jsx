import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import theme from '../theme';
const useStyles = makeStyles({
    container:{
        paddingTop:theme.spacing(10),
       
        },
        avatar:{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'  
        },
        title:{
          fontSize:'20',
          fontWeight:'bold',
          color: 'gray',

          
        }
   
});
function RightBar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
         <Typography variant="h5" gutterBottom className={classes.title}>Candidates Here</Typography>
     <AvatarGroup max={5} className={classes.avatar}>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg"/>
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
    </AvatarGroup>
    <ImageList sx={{ width: 200, height: 200 }} variant="woven" cols={3} gap={2}>
     <img src="https://cdn.pixabay.com/photo/2018/09/25/17/14/airplane-3702676__340.jpg"
     alt=""/>
     </ImageList>
     <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={2}>
     <img src="https://cdn.pixabay.com/photo/2018/09/25/17/14/airplane-3702676__340.jpg"
     alt=""/>
     </ImageList>
     
        </Container>
    )
}

export default RightBar
