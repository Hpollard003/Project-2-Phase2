import React from 'react'
import post1 from '../imgs/Post2.jpg'


function HomeContent() {

    return (

        <div className='text-center p-4'>
            <h3>Updated weekly</h3>
            <p>
                Click on New Posts to see what everyones talking about this week
            </p>
            <img src={post1} alt='anime'/>
        </div>

    )
}

export default HomeContent
