import React from 'react'
import errorPage from '../imgs/errorPage.png'

const PageNotFound = () => {
    return (
        <div className='card'>
            <h1 className='text-center'>UrFeed</h1>
            <h3>
                I didn't make a random page like this sorry. Please go check out some of the recent posts
            </h3>
            <img src={errorPage} alt='404' />
        </div>
    )
}

export default PageNotFound
