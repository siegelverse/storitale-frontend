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
import history from "../history"
import DeleteIcon from '@material-ui/icons/Delete';
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

export default function FollowingCards(props) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const loggedInUser = useSelector(state => state.currentUser)

    const deleteFollow = (e) => {
        fetch(`http://localhost:3000/users/${loggedInUser.id}/follow`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                follower_id: loggedInUser.id, 
                followable_id: props.user.id,
            })
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "SET_FOLLOWING",
                follow: data
            })
            console.log(data)
        })
    }
    
  return (
    <div>
      <Container maxWidth="xs">
        <Card className={classes.root} variant="outlined">
          <CardContent>
          <img alt={props.user.username} src={props.user.image} style={{ height: '80px', width: '80px', justify: "center", borderRadius: "50%"}} />
          <Link to={`/users/${props.user.id}`} color="inherit">
            <Typography variant="h5" component="h2">
              {props.user.username}
            </Typography>
            </Link>
            <Typography variant="body2" component="p" color="textSecondary">
              {props.user.bio}
            </Typography>
          </CardContent>
            <Button variant="outlined" color="primary" size="small" onClick={(e)=>deleteFollow(e)} startIcon={<DeleteIcon />}>
                Unfollow
            </Button>
        </Card>
        <hr />
      </Container>
    </div>
  );
}
