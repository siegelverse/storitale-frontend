import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import StoryCard from './StoryCard';


export default function Home() {
    const [stories, setStories] = useState([]);
    const loggedInUser = useSelector(state => state.currentUser)

    useEffect(()=> {
        fetch("http://localhost:3000/stories")
        .then(res => res.json())
        .then(stories => { 
            console.log(stories)
            setStories(stories)
        })
    }, [])

    console.log(stories.stories)
    return (
        <div>
            <h1>{`Welcome ${loggedInUser.username}!`}</h1>
            {stories.length ?
                stories.map((story) => {
                    return (
                        <StoryCard story={story} />
                    )
            }) : <h1>Loading Data</h1>}  
        </div>
    )
}

