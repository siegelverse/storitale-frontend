import { Typography } from '@material-ui/core'
import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

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

export default function ReviewCards(props) {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="md">
            <Typography variant="body2" component="p" className={classes.title}>
                {props.review.content}
            </Typography>
            <hr />
            <Typography variant="body2" component="p" color="textSecondary">
                {props.review.user.username}
            </Typography>
            </Container>
        </div>
    )
}
