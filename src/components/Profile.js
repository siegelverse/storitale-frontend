import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import UserStoryCards from './UserStoryCards'
import ProfileBanner from './ProfileBanner'
import ProfileTabs from './ProfileTabs'
import FollowingCards from './FollowingCards'
import FavCards from './FavCards'

export default function Profile() {
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    const tab = useSelector(state => state.tab)
    const followColl = useSelector(state => state.follow)
    const favsColl = useSelector(state => state.favs)
    const dispatch = useDispatch()
    const userStories = useSelector(state => state.userStories)
    console.log(loggedInUser)
    console.log(currentStory)

    useEffect(()=> {
        fetch(`http://localhost:3000/users/${loggedInUser.id}`)
        .then(res => res.json())
        .then(user => { 
            console.log(user.stories)
            dispatch({
                type: 'SET_USER_STORIES',
                stories: user.stories
            })
        })
    }, [])

    useEffect(()=> {
        fetch(`http://localhost:3000/users/${loggedInUser.id}/follow`)
        .then(res => res.json())
        .then(users => { 
            dispatch({
                type: "SET_FOLLOWING",
                follow: users
            }) 
        })       
    }, [])

    useEffect(()=> {
        fetch(`http://localhost:3000/users/${loggedInUser.id}`)
        .then(res => res.json())
        .then(favs => { 
            dispatch({
                type: "SET_FAVORITES",
                favs: favs.favorites
            }) 
        })       
    }, [])

    function UserStory() {
        return userStories.length ?
            userStories.map((story) => {
                return (
                    <UserStoryCards story={story} />
                )
        }) : <h1>You Have No Stories!</h1>
    }
    function FollowFeed() {

        return followColl.length ? 
            followColl.map((user) => {
                return (
                    <FollowingCards user={user} />
                )
            }) : <h1>You're Not Following Anyone</h1>
    }

    function FavsFeed() {
        return favsColl.length ?
            favsColl.map((fav) => {
                return (
                    <FavCards fav={fav} />
                )
        }) : <h1>You Have No Favorites!</h1>
    }

    function ProfileContainer() {
        if(tab === 0) {
            return <UserStory />
        } else if(tab === 1) {
            return <FollowFeed />
        } else {
            return <FavsFeed />
        }
    }
    return (
        <div>
            <ProfileBanner />
            <br/>
            <ProfileTabs />
            <ProfileContainer />
        </div>
    )
}
