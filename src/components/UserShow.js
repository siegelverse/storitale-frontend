import React, {useState, useEffect} from 'react'
import UserBanner from "./UserBanner"
import {useSelector} from 'react-redux'
import UserShowCards from './UserShowCards'


export default function UserShow() {
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    const [userStories, setUserStories] = useState([])
    console.log(loggedInUser)
    console.log(currentStory)

    useEffect(()=> {
        fetch(`http://localhost:3000/users/${currentStory.user.id}`)
        .then(res => res.json())
        .then(user => { 
            setUserStories(user.stories)
        })
    }, [])

    return (
        <div>
            <UserBanner />
            <br/>
            {userStories.length ?
                userStories.map((story) => {
                    return (
                        <UserShowCards story={story} />
                    )
            }) : <h1>You Have No Stories!</h1>}
        </div>
    )
}