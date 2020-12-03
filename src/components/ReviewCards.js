import { Typography } from '@material-ui/core'
import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom'

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
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
    cardBottom: {
        minHeight: '40px',
        alignItems: 'center',
        backgroundColor: '#DCDCDC' 
    }
});

export default function ReviewCards(props) {
    const classes = useStyles();
    return (
        <div>
            <br />
            <Container maxWidth="md">
                <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="body2" component="p" className={classes.title}>
                        {props.review.content}
                     </Typography>
                </CardContent>
                <div className={classes.cardBottom}>
                    <img alt={props.review.user.username} src={props.review.user.image} style={{width: '25px', height: '25px', borderRadius: '50%', justify: 'flex-start', }} />
                    <Link to={`profile/${props.review.user.username}`}>
                        {props.review.user.username}
                    </Link>
                    {/* <span>
                        {new Date(props.review.createdAt).toDateString()}
                    </span> */}
                </div>
                </Card>
            </Container>
        </div>
    )
}
