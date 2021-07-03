import React from 'react'
import dog from '../imgs/dog.jpg'
import NavBar from '../components/NavBar';

const text = {
    color: 'red'
}

function RandomPosts() {
    return (
        <div>
            <div>
                <h1 className='display-2'>UrFeed</h1>
                <NavBar />
                <h2>Are dogs Happy idiots or Noble warriors with a bone to pick?</h2>
                <img src={dog} alt='dog' />
                <h2 style={text}>Comments are off</h2>
            </div>
        </div>
    )
}

export default RandomPosts
