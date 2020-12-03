import { Button, Container, Typography } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux'
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
    root: {
        flex: 'grow',
        backgroundColor: '#FF2571',
        padding: '20px',
    },
    font: {
        fontSize: 30,
    },
    image: {
        paddingLeft: '50px',
    },
    username: {
        paddingTop: '10px',
        paddingLeft: '35px',
    }
}));

export default function UserBanner() {
    const classes = useStyles();
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    const followColl = useSelector(state => state.follow)

    const postFollow = () => {
        fetch(`http://localhost:3000/users/${loggedInUser.id}/follow`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                follower_id: loggedInUser.id, 
                followable_id: currentStory.user.id,
            })
        })
        .then(res => res.json())
        .then(follow => {
            console.log(follow)
            dispatch({
                type: "SET_FOLLOWING",
                follow: follow
            })
        })
    }

    useEffect(()=> {

        fetch(`http://localhost:3000/users/${loggedInUser.id}/follow`)
        .then(res => res.json())
        .then(data => { 
            dispatch({
                type: "SET_FOLLOWING",
                follow: data
            })
        })
        console.log(followColl)
    }, [])

    function FollowButton() {
        
        return followColl.map(user => {
            console.log(user)
            if (user.followable_id !== loggedInUser.id) {
                return (
                    <Button disabled startIcon={<CheckIcon/>}>Following</Button>
                )
                } else {
                    return (
                        <Button onClick={postFollow}>+ Follow</Button> 
                    )
                }
            })    
        
    }


    return (
        <Container maxWidth="xl" className={classes.root}>
                <img alt={currentStory.user.username} src={currentStory.user.image} style={{ height: '80px', width: '80px', justify: "center", borderRadius: "50%"}} />
                <h2 className={classes.font}>
                    {currentStory.user.username}
                </h2>
                <p>{currentStory.user.bio}</p>
                {followColl.length ? 
                    <FollowButton />
                :
                    <Button onClick={postFollow}>+ Follow</Button>
                }
        </Container>
    )
}
