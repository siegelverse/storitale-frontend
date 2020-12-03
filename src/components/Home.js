import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import StoryCard from './StoryCard';
import HomeBanner from './HomeBanner'


export default function Home() {
    const [stories, setStories] = useState([]);
    const loggedInUser = useSelector(state => state.currentUser)
    const followColl = useSelector(state => state.follow)
    const dispatch = useDispatch()
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

    useEffect(()=> {

        fetch("http://localhost:3000/stories", {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
            },
        })
        .then(res => res.json())
        .then(stories => { 
            console.log(stories)
            setStories(stories)
        })
    }, [])

    console.log(loggedInUser)
    return (
        <div>
            <HomeBanner />
            <br />
            {stories.length ?
                stories.map((story) => {
                    return (
                        <StoryCard story={story} />
                    )
            }) : <h1>Loading Data...</h1>}  
        </div>
    )
}

