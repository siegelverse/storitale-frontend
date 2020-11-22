import React from 'react'
import PopularStories from './PopularStories'
import FilterStories from './FilterStories'
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <PopularStories />
            <FilterStories />
            <Link to="/story/:id">Story</Link>
            <Link to="/profile/:id">Profile</Link>
        </div>
    )
}

