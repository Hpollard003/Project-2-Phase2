import React from 'react';
import CommentBox from '../components/CommentBox';
import Post from '../components/Post';
import NavBar from '../components/NavBar';


class ImgPosts extends React.Component {
    render() {
        return (
            <div>
                <h1>UrFeed</h1>
                <NavBar />
                <Post />
                <h3>Write your comment below</h3>
                <CommentBox />
                
            </div>
        )
    }
}

export default ImgPosts