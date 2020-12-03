import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 'grow',
        backgroundColor: '#FF2571',
        padding: '20px',
        minHeight: '150px'
    },
    font: {
        fontSize: 50,
    },
    image: {
        paddingLeft: '50px',
    },
    username: {
        paddingTop: '10px',
        paddingLeft: '35px',
    }
}));

export default function HomeBanner() {
    const classes = useStyles();
    const loggedInUser = useSelector(state => state.currentUser)
    return (
        <div>
            <Container maxWidth="xl" className={classes.root}>
                <h1 className={classes.font}>{`Welcome ${loggedInUser.username}`}</h1>
            </Container>   
        </div>
    )
}
