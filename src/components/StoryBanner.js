import { Container } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 'grow',
        backgroundColor: '#FF2571',
        padding: '25px',
        justify: "flex-start",
    },
    font: {
        fontSize: 50,
        margin: 0
    },
    image: {
        paddingLeft: '50px',
    },
    username: {
        paddingLeft: '10px',
    }
}));

export default function StoryBanner() {
    const classes = useStyles();
    const currentStory = useSelector(state => state.story)
    return (
        <Container maxWidth="xl" className={classes.root}>
                <h1 className={classes.font}>
                    {currentStory.title}
                </h1>
                <Grid container style={{alignItems: "center"}}>
                <img alt={currentStory.user.username} src={currentStory.user.image} style={{ height: '45px', width: '45px', justify: "center", borderRadius: "50%"}}/>
                <Link to={`/users/${currentStory.user.id}`} className={classes.username}>
                    {currentStory.user.username}
                </Link>
                </Grid>
        </Container>
    )
}
