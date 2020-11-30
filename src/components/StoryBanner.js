import { Container } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { fontSize } from '@material-ui/system';
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 'grow',
    },
    h1: {
        fontSize: 30
    }
}));

export default function StoryBanner() {
    const classes = useStyles();
    const currentStory = useSelector(state => state.story)
    return (
        <Container maxWidth="xl" className={classes.root}>
            <Grid item md={8}>
                {currentStory.title}
            </Grid>

        </Container>
    )
}
