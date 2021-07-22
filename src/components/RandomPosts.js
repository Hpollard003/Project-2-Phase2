import React from 'react'
import dog from '../imgs/dog.jpg'


const text = {
    color: 'red'
}

const RandomPosts = () => {
    return (
        <div>
            <div>
                <h1 className='display-2'>UrFeed</h1>
                <h2>Are dogs Happy idiots or Noble warriors with a bone to pick?</h2>
                <img src={dog} alt='dog' />
                <h2 style={text}>Comments are off</h2>
                
                    <div className='card m-2 bg-primary bg-gradient'>
                        <div className='text-start'>
                            <h3>Dolphins</h3>
                            <p>So long and thanks for all the fish</p>

                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default RandomPosts
