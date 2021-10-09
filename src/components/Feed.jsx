import React from 'react'
import { makeStyles } from '@mui/styles';
import theme from '../theme';
import { Container } from '@mui/material';
import FeedDetail from './FeedDetail/FeedDetail';
const useStyles = makeStyles({
    container:{
       marginTop: '10px',
       display: 'flex',
       justifyContent:'space-around',
       alignItems: 'center' 
        },
   
});
function Feed() {
    const classes = useStyles();
    return (
    <Container className={classes.container}>
    <FeedDetail title="Choose the perfect design" img="https://cdn.pixabay.com/photo/2021/09/29/13/17/redwood-national-park-6667452__340.jpg"/>
      <FeedDetail title="Simply Recipes Less Stress. More Joy" img="https://media.istockphoto.com/photos/lady-with-kayak-picture-id516449022?s=612x612"/>
      <FeedDetail title="What To Do In London" img="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <FeedDetail title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <FeedDetail title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <FeedDetail title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        </Container>
    )
}

export default Feed
