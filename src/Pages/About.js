import React from 'react'
import NavBar from '../components/NavBar';

function About() {
    return (
        <div>
            <h1 className='display-2'>UrFeed About Page</h1>
            <NavBar />
            <h3>Website By : H Pollard III</h3>
            <h4>Phase 2 Project</h4>
            <h5> Objectives :</h5>
                <ul>3 client-side routes</ul>
                <ul>Single Page application</ul>
                <ul>Utilize GET and POST requests</ul>
                <ul>Demonstraite an understanding of components, props, and state</ul>
            <h6>Its atually my feed since I control the forum pages because I dont have moderators</h6>
        </div>
    )
}

export default About
