import React from 'react'
import dog from '../imgs/dog.jpg'
import post1 from '../imgs/Post2.jpg'
import post2 from '../imgs/cat.jpg'

function PostGallery() {
    return (
        <div>
            <img src={dog} alt='dog' />
            <img src={post1} alt='anime' />
            <img src={post2} alt='cat' />
        </div>
    )
}

export default PostGallery
