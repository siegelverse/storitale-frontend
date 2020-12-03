import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReviewCards from './ReviewCards'

export default function RenderReviews() {
    const currentStory = useSelector(state => state.story)
    const dispatch = useDispatch()
    const renderReviews = useSelector(state => state.review)

    useEffect(()=>{
        fetch(`http://localhost:3000/stories/${currentStory.id}/reviews`)
        .then(res => res.json())
        .then(data => {
           console.log(data)
           dispatch({
            type: "SET_REVIEW",
            data
         })
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
