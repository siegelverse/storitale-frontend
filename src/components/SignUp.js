import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux'
import history from "../history"
import { Redirect } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const usernameInput = useSelector(state => state.usernameInput)
    const passwordInput = useSelector(state => state.passwordInput)
    const emailInput = useSelector(state => state.emailInput)

    const handleUsernameChange = (e) => {
        dispatch({
            type: "CHANGE_USERNAME_INPUT",
            value: e.target.value
        })
    };

    const handlePasswordChange = (e) => {
        dispatch({
            type: "CHANGE_PASSWORD_INPUT",
            value: e.target.value
        })
    };

    const handleEmailChange = (e) => {
        dispatch({
            type: "CHANGE_EMAIL_INPUT",
            value: e.target.value
        })
    };

  const handleOnSubmit = (e) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            username: usernameInput, 
            email: emailInput, 
            password: passwordInput
        })
    })
    .then(resp => resp.json())
    .then(async (data) => {
        if (data.message) {
            console.log("sign up no good")
        } else {
            localStorage.setItem("token", data.token)
            await dispatch({
                type: "LOGIN_USER", 
                user: data.user
            })
            history.push("/home")
        }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={(e)=>handleUsernameChange(e)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e)=>handleEmailChange(e)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=>handlePasswordChange(e)}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOnSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    <Copyright />
    </Container>
  );
}
 
export default SignUp;