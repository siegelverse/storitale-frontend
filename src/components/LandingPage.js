import React from 'react'
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core'
import '../landing.css';

export default function LandingPage() {
    return (
        <div className="container" style={{alignItems: 'center'}}>
            <br />
            <img src={'https://i.imgur.com/RawkqTQ.png'} style={{width: '500px',  height: '500px'}}/>
            <br />
            <Button href="/login" color="primary" variant="contained">Start Writing</Button>
        </div>
    )
}
