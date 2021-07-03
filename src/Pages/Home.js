import React from 'react';
import NavBar from '../components/NavBar';
import HomeContent from '../components/HomeContent';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 className='display-2'>Welcome to UrFeed</h1>
                <NavBar />
                <HomeContent />
            </div>
        )
    }
}

export default Home