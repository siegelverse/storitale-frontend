import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import ReviewCards from './ReviewCards'

export default function RenderReviews() {
    const currentStory = useSelector(state => state.story)
    const [renderReviews, setRenderReviews] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/stories/${currentStory.id}/reviews`)
        .then(res => res.json())
        .then(data => {
           console.log(data)
           setRenderReviews(data)
        })
    }, [])

    return (
        <div>
            {renderReviews.length ? 
                renderReviews.map(review=> {
                    return (
                        <ReviewCards review={review} />
                    )
                }) : <h1>Be The First To Review!</h1>}
        </div>
    )
}
