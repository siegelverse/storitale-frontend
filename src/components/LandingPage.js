import React from 'react'
import {Link} from "react-router-dom";
import '../landing.css';

export default function LandingPage() {
    return (
        <div className="container">
            <h1>LandingPage</h1>
            <Link to="/login">Start Writing</Link>
        </div>
    )
}
