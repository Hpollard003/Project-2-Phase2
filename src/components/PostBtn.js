import React from 'react';
import Comments from './Comments';

const PostBtn = (props) => {

    function handlePost() {
        console.log('Click')
    }


    return (
        <div>
            <h3>Write your comment below</h3>
            <Comments />
            <button onClick={handlePost}>Post</button>
        </div>
    )



}

export default PostBtn

