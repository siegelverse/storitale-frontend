import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import history from "../history"
import {useDispatch, useSelector} from 'react-redux'
import { Container } from '@material-ui/core';

export default function UserSettings() {
    const dispatch = useDispatch()
    const imageInput = useSelector(state => state.updateImage)
    const usernameInput = useSelector(state => state.updateUsername)
    const bioInput = useSelector(state => state.updateBio)
    const passwordInput = useSelector(state => state.updatePassword)
    const loggedInUser = useSelector(state => state.currentUser)


    const handleImageChange = (e) => {
        console.log(e.target.value)
        dispatch({
            type: "UPDATE_IMAGE_INPUT",
            value: e.target.value
        })
    };

    const handleUsernameChange = (e) => {
        console.log(e.target.value)
        dispatch({
            type: "UPDATE_USERNAME_INPUT",
            value: e.target.value
        })
    };

    const handleBioChange = (e) => {
        console.log(e.target.value)
        dispatch({
            type: "UPDATE_BIO_INPUT",
            value: e.target.value
        })
    };

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        dispatch({
            type: "UPDATE_PASSWORD_INPUT",
            value: e.target.value
        })
    };


    const updateUser = (e) => {

        e.preventDefault();
        fetch(`http://localhost:3000/users/${loggedInUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                image: imageInput, 
                username: usernameInput, 
                bio: bioInput, 
                password: passwordInput, 
                id: loggedInUser.id
            })
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           history.push(`profile/${loggedInUser.id}`)
        })
    };

    return (
        <div>
            <h1>Edit User</h1>
            <Container maxWidth="xs">
            <form onSubmit={(e) => updateUser(e)} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="imageUrl"
              label="Image URL"
              name="imageUrl"
              autoComplete="imageUrl"
              onChange={(e)=>handleImageChange(e)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={(e)=>handleUsernameChange(e)}
              autoFocus
            />
            <TextField
                id="bio"
                label="Bio"
                margin="normal"
                name="bio"
                autoComplete="bio"
                multiline
                fullWidth
                defaultValue="Enter your bio here..."
                onChange={(e)=>handleBioChange(e)}
                variant="outlined"
                autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
              onChange={(e)=>handlePasswordChange(e)}
              autoFocus
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Update Settings
            </Button>
            </form>
            </Container>
        </div>
    )
}
