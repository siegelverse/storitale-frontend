import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useDispatch,useSelector} from 'react-redux'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function NavBar() {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.currentUser)
    const classes = useStyles();
    const handleLogOut = (e) => {
      dispatch({
        type: "LOGOUT_USER",
        user: {}
      })
      localStorage.clear()
    }
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
              {loggedInUser.id ? 
                <div>
                <Link to={`/profile/${loggedInUser.id}`}>
                  <IconButton color="secondary">
                    <AccountCircle />
                  </IconButton>
                </Link>
                <Button color="inherit" component={Link} to="/home">Home</Button>
                <Button color="inherit" onClick={(e)=>handleLogOut(e)} href="/">Sign Out</Button>
                </div>
                :
                <Button color="inherit" component={Link} to="/login">Login</Button>
              }
            </Toolbar>
            </AppBar>
        </div>
    )
}