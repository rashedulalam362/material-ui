import React from 'react'
import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import theme from '../../theme';
const useStyles = makeStyles({
    
        card:{
          marginBottom: theme.spacing(5),
        },
        media:{
          height: 250,
        [theme.breakpoints.down("sm")]: {
         height: 150,
    },
        }
   
});
function FeedDetail({title,img}) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
      <CardMedia className={classes.media}
        image={img}
         />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}

export default FeedDetail
