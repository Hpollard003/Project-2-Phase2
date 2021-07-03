import React from 'react';

import CommentBox from './CommentBox';
import Post from '../container/Post';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>UrFeed</h1>
                <Post />
                <h3>Write your comment below</h3>
                <CommentBox />
                
            </div>
        )
    }
}

export default Home