import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import "fontsource-rubik";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StoryCard(props) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const currentStory = useSelector(state => state.story)
  const loggedInUser = useSelector(state => state.currentUser)

  const handleSetStory = (e) => {
    dispatch({
      type: "SET_CURRENT_STORY",
      story: props.story
    })
  }
  console.log(props)
  return (
    <Container maxWidth="md">
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {loggedInUser.id === props.story.user.id ?
            <Link to={`/profile/${props.story.user.id}`} onClick={(e)=>handleSetStory(e)} color="inherit">
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {props.story.user.username}
              </Typography>
            </Link>
          :
            <Link to={`/users/${props.story.user.id}`} onClick={(e)=>handleSetStory(e)} color="inherit">
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.story.user.username}
              </Typography>
            </Link>
          }
        <Typography variant="h5" component="h2">
          {props.story.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
            {props.story.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/story/${props.story.id}`} onClick={(e)=>handleSetStory(e)} color="inherit">
        <Button variant="outlined" color="primary" size="small">Read More</Button>
      </Link>
      </CardActions>
    </Card>
    <hr/>
    </Container>
  );
}
