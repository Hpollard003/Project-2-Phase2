import React from 'react';
import NavBar from '../components/NavBar';
import PostGallery from '../components/PostGallery';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to UrFeed</h1>
                <NavBar />
                <PostGallery />
            </div>
        )
    }
}

export default Home