import { Button, CardActions, Container } from '@material-ui/core'
import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RenderReviews from './RenderReviews';

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

export default function Review() {
    const classes = useStyles();
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    const [review, setReview] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        console.log(e.target.value)
        setReview(e.target.value)
    }
    const postReview = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/stories/${currentStory.id}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                content: review, 
                story_id: currentStory.id,
                user_id: loggedInUser.id
            })
        })
        .then(res => res.json())
        .then(data => {
           dispatch({
               type: "SET_REVIEW",
               data
            })
        })
    }
    return (
        <Container maxWidth="md">
            <form onSubmit={(e) => postReview(e)} noValidate>
            <Card className={classes.root} variant="outlined">
                <TextField
                margin="normal"
                required
                fullWidth
                id="review"
                label="Review"
                name="review"
                multiline
                onChange={(e)=>handleChange(e)}
                autoFocus
                />
                <CardActions>
                    <Button
                    size="small"
                    type="submit"
                    variant="contained"
                    color="primary"
                    >Post Review</Button>
                </CardActions>
            </Card>
            </form>
            <RenderReviews />
        </Container>
    )
}
