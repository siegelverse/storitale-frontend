import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 'grow',
        backgroundColor: '#FF2571',
        padding: '20px',
    },
    font: {
        fontSize: 25,
    },
    image: {
        paddingLeft: '50px',
    },
    username: {
        paddingTop: '10px',
        paddingLeft: '35px',
    }
}));

export default function ProfileBanner() {
    const classes = useStyles();
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    return (
        <Container maxWidth="xl" className={classes.root}>
            <img alt={loggedInUser.username} src={loggedInUser.image} style={{ height: '80px', width: '80px', justify: "center", borderRadius: "50%"}} />
            <h2 className={classes.font}>
                {loggedInUser.username}
            </h2>
            <div style={{spacing: '1'}}>
                <Link to={"/new-story"} color="inherit">
                    <Button variant="solid" color="white" size="small">New Story</Button>
                </Link>
                <Link to={`/profile/${loggedInUser.id}/settings`} color="inherit">
                    <Button variant="solid" color="white" size="small">Settings</Button>
                </Link>
            </div>
        </Container>
    )
}