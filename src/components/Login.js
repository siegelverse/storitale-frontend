import React from 'react'
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/signup">Don't have an account? Sign up here!</Link>
        </div>
    )
}
