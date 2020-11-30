import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import UserStoryCards from './UserStoryCards'


export default function Profile() {
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    const [userStories, setUserStories] = useState([])
    console.log(loggedInUser)
    console.log(currentStory)

    useEffect(()=> {
        fetch(`http://localhost:3000/users/${loggedInUser.id}`)
        .then(res => res.json())
        .then(user => { 
            console.log(user.stories)
            setUserStories(user.stories)
        })
    }, [])

    return (
        <div>
            <h1>{loggedInUser.username}</h1>
            <Link to={"/new-story"} color="inherit">
                <Button variant="outlined" color="primary" size="small">New Story</Button>
            </Link>
            <Link to={`/profile/${loggedInUser.id}/settings`} color="inherit">
                <Button variant="outlined" color="primary" size="small">Settings</Button>
            </Link>
            {userStories.length ?
                userStories.map((story) => {
                    return (
                        <UserStoryCards story={story} />
                    )
            }) : <h1>You Have No Stories!</h1>}
        </div>
    )
}
