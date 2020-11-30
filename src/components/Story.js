import React from 'react'
import StoryBanner from './StoryBanner'
import {useSelector} from 'react-redux'
import Review from './Review'

export default function Story() {
    const currentStory = useSelector(state => state.story)
    console.log(currentStory)
    return (
        <div>
            <StoryBanner />
            <h1>Story Page</h1>
            <p>{currentStory.body}</p>
            <hr />
            <Review />
        </div>
    )
}
