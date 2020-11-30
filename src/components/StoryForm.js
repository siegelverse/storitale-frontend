import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import history from "../history"
import {useDispatch, useSelector} from 'react-redux'
import { Container } from '@material-ui/core';

export default function StoryForm() {
    const dispatch = useDispatch()
    const titleInput = useSelector(state => state.titleInput)
    const descriptionInput = useSelector(state => state.descriptionInput)
    const bodyInput = useSelector(state => state.bodyInput)
    const loggedInUser = useSelector(state => state.currentUser)

    const handleTitleChange = (e) => {
        dispatch({
            type: "CHANGE_TITLE_INPUT",
            value: e.target.value
        })
    };

    const handleBodyChange = (e) => {
        dispatch({
            type: "CHANGE_BODY_INPUT",
            value: e.target.value
        })
    };

    const handleDescriptionChange = (e) => {
        dispatch({
            type: "CHANGE_DESCRIPTION_INPUT",
            value: e.target.value
        })
    };

    const postStory = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/stories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                title: titleInput, 
                description: descriptionInput, 
                body: bodyInput, 
                user_id: loggedInUser.id


            })
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           history.push("/home")
        })
    };

    return (
        <div>
            <h1>Post Story</h1>
            <Container maxWidth="md">
            <form onSubmit={(e) => postStory(e)} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              onChange={(e)=>handleTitleChange(e)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              onChange={(e)=>handleDescriptionChange(e)}
              autoFocus
            />
            <TextField
                id="body"
                label="Body"
                margin="normal"
                name="body"
                autoComplete="body"
                multiline
                fullWidth
                defaultValue="Write Your Story!"
                onChange={(e)=>handleBodyChange(e)}
                variant="outlined"
                autoFocus
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit Your Story!
            </Button>
            </form>
            </Container>
        </div>
    )
}
