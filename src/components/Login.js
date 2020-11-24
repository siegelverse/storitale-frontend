import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux'
import history from "../history"
import "fontsource-rubik";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          StoriTale
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    typography: {
        fontFamily: ["Rubik", "sans-serif"]
    }
}));
  

function Login() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const usernameInput = useSelector(state => state.usernameInput)
    const passwordInput = useSelector(state => state.passwordInput)
    const emailInput = useSelector(state => state.emailInput)

    const handleUsernameChange = (e) => {
        console.log(e.target)
        dispatch({
            type: "CHANGE_USERNAME_INPUT",
            value: e.target.value
        })
    };

    const handlePasswordChange = (e) => {
        console.log(e.target)
        dispatch({
            type: "CHANGE_PASSWORD_INPUT",
            value: e.target.value
        })
    };

    const handleEmailChange = (e) => {
        console.log(e.target)
        dispatch({
            type: "CHANGE_EMAIL_INPUT",
            value: e.target.value
        })
    };

    const logIn = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
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
        .then(async(data) => {
            if (data.error) {
                console.log(data.message)
            }else {
                localStorage.setItem("token", data.token)
                await dispatch({
                    type: "LOGIN_USER", 
                    user: data.user
                })
                history.push("/home")
            }
        })
    };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={(e) => logIn(e)} className={classes.form} noValidate>
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
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e)=>handleEmailChange(e)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>handlePasswordChange(e)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Copyright />
      </Container>
    );
} 

export default Login;