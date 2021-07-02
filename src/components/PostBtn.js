import render from 'dom-serializer';
import React from 'react';

const PostBtn = (props) => {

    function handlePost(){
        console.log('Click')
    }


        return(
        <div>
        <button onClick={handlePost}>Post</button>
        
        </div>
        )
    


}

export default PostBtn

